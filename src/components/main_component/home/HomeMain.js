import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';


// components
import NavbarDynamic from '../../navbar/NavbarDynamic';
import BannerCarouselFullSize from './BannerCarouselFullSize';
import OpenStore from './OpenStore';
import FooterDefault from '../../footer_offer/FooterDefault';
import NavbarBottomFixed from '../../navbar/NavbarBottomFixed';
import ApplyFormModal from './ApplyFormModal';
import ProductList from './ProductList';
import YoutubePlayPart from './YoutubePlayPart';
import NoticeComponent from './NoticeComponent';
import PopupComponent from './PopupComponent';

// handler
import { handleScrollToTop } from '../../../handler/ScrollHandler';
import { setCookie, getCookie } from '../../../handler/CookieHandler';

// dataConnect
import { bannerDataConnect } from '../../data_connect/BannerDataConnect';
import { videoDataConnect } from '../../data_connect/VideoDataConnect';
import { productDataConnect } from '../../data_connect/ProductDataConnect';
import { storeDataConnect } from '../../data_connect/StoreDataConnect';
import { csDataConnect } from '../../data_connect/CsDataConnect';
import { popupDataConnect } from '../../data_connect/PopupDataConnect';

const MainContainer = styled.div`
    /* position:relative; */
`;

const LineBreaker1 = styled.div`
    width: 80%;
    height: 1px;
    margin: 10px auto 25px;
    border-bottom:1px dashed #ee5470;
    /* background-color: #ee5470; */
`;

// Scroll을 움직이면 h1의 스타일을 변화해주기 위한 함수.
const useScroll = () => {
    // state를 생성합니다.
    const [state, setState] = useState({
        x: 0,
        y: 0
    });
    // scrll의 값을 가져와 state를 갱신합니다.
    const onScroll = () => {
        setState({ y: window.scrollY, x: window.scrollX });
    };
    useEffect(() => {
        // scroll 이벤트를 만들어줍니다. 스크롤을 움직일때 마다 
        // onScroll 함수가 실행됩니다.
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state.y;
};

const HomeMain = () => {
    const scrollY = useScroll();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [banners, setBanners] = useState([]);
    const [videoList, setVideoList] = useState(null);
    const [productNewList, setProductNewList] = useState(null);
    const [productHitList, setProductHitList] = useState(null);
    const [productEventList, setProductEventList] = useState(null);
    const [storeList, setStoreList] = useState(null);
    const [csList, setCsList] = useState(null);
    const [popupList, setPopupList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        handleScrollToTop();
    }, []);

    useEffect(() => {
        async function loadInit() {
            await loadDataConnect().loadBannerList();
            await loadDataConnect().getVideoList();
            await loadDataConnect().getProductList().new();
            await loadDataConnect().getProductList().hit();
            await loadDataConnect().getProductList().event();
            await loadDataConnect().getStoreList();
            await loadDataConnect().getCsList();
            await loadDataConnect().getPopupList();
            setIsLoading(false);
        }
        loadInit();
    }, [])

    const loadDataConnect = () => {
        return {
            loadBannerList: async function () {
                await bannerDataConnect().searchBanners()
                    .then(data => {
                        setBanners(data.data);
                    })
            },
            getVideoList: async function () {
                await videoDataConnect().searchVideoAll()
                    .then(data => {
                        if (data && data.message === 'success') {
                            setVideoList(data.data);
                        }
                    })
            },
            getProductList: function () {
                return {
                    all: async function () {

                    },
                    new: async function () {
                        await productDataConnect().searchProductAllByCondition(true, false, false)
                            .then(data => {
                                if (data && data.message === 'success') {
                                    setProductNewList(data.data);
                                }
                            });
                    },
                    hit: async function () {
                        await productDataConnect().searchProductAllByCondition(false, true, false)
                            .then(data => {
                                if (data && data.message === 'success') {
                                    setProductHitList(data.data);
                                }
                            });
                    },
                    event: async function () {
                        await productDataConnect().searchProductAllByCondition(false, false, true)
                            .then(data => {
                                if (data && data.message === 'success') {
                                    setProductEventList(data.data);
                                }
                            });
                    }
                }
            },
            getStoreList: async function () {
                await storeDataConnect().searchStoreAll()
                    .then(data => {
                        if (data && data.message == 'success') {
                            // console.log(data);
                            setStoreList(data.data);
                        }
                    })
            },
            getCsList: async function () {
                await csDataConnect().searchCsAll()
                    .then(data => {
                        if (data && data.message == 'success') {
                            setCsList(data.data);
                        }
                    })
            },
            getPopupList: async function () {
                await popupDataConnect().searchPopupAll()
                    .then(data => {
                        if (data && data.message == 'success') {
                            let popupData = data.data;
                            let newPopupList = [];
                            popupData.forEach(r => {
                                let popupCookie = getCookie(`popup${r.popupId}`);
                                if (popupCookie && popupCookie == 1) {
                                } else {
                                    newPopupList.push(r);
                                }
                            })
                            setPopupList(newPopupList);
                        }
                    })
            }
        }
    }
    const mainHandleDialogControl = () => {
        return {
            open: () => {
                setDialogOpen(true);
            },
            close: function () {
                setDialogOpen(false);
            }
        }
    }

    if(isLoading){
        return null; 
    }
    return (
        <MainContainer>
            <NavbarDynamic
                scrollY={scrollY}
            ></NavbarDynamic>
            {popupList ?
                <PopupComponent
                    popupList={popupList}
                ></PopupComponent>
                :
                <></>
            }

            <BannerCarouselFullSize
                banners={banners}
            ></BannerCarouselFullSize>
            {productNewList && productHitList && productEventList ?
                <ProductList
                    productNewList={productNewList}
                    productHitList={productHitList}
                    productEventList={productEventList}
                ></ProductList>
                :
                <></>
            }
            {storeList ?
                <OpenStore
                    banners={banners}
                    storeList={storeList}
                ></OpenStore>
                :
                <></>
            }

            {/* <LineBreaker1></LineBreaker1> */}
            {videoList ?
                <YoutubePlayPart
                    scrollY={scrollY}
                    videoList={videoList}
                ></YoutubePlayPart>
                :
                <></>
            }
            {csList ?
                <NoticeComponent
                    csList={csList}
                ></NoticeComponent>
                :
                <></>
            }

            <FooterDefault></FooterDefault>
            <NavbarBottomFixed
                mainHandleDialogControl={mainHandleDialogControl}
            ></NavbarBottomFixed>
            <ApplyFormModal
                dialogOpen={dialogOpen}

                mainHandleDialogControl={mainHandleDialogControl}
            >
            </ApplyFormModal>
        </MainContainer >

    );
}

export default HomeMain;