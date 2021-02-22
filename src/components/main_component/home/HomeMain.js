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
// handler
import { handleScrollToTop } from '../../../handler/ScrollHandler';

// dataConnect
import { bannerDataConnect } from '../../data_connect/BannerDataConnect';

const MainContainer = styled.div`
    .youtube-player{
        width:100%;
        height:auto;
    }

    .youtube-player-el{
        width:100%;
    }

    @media only screen and (max-width:768px){
        .youtube-player-el{
            /* width:100%; */
        }   
    }
`;

const LineBreaker1 = styled.div`
    width: 80%;
    height: 1px;
    margin: 10px auto 25px;
    border-bottom:1px dashed #ee5470;
    /* background-color: #ee5470; */
`;

const HomeMain = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        handleScrollToTop();
    }, []);

    useEffect(() => {
        async function loadInit() {
            await loadDataConnect().loadBannerList();
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
    return (
        <MainContainer>
            <NavbarDynamic></NavbarDynamic>
            <BannerCarouselFullSize
                banners={banners}
            ></BannerCarouselFullSize>

            <OpenStore
                banners={banners}
            ></OpenStore>
            <ProductList></ProductList>
            <LineBreaker1></LineBreaker1>
            <YoutubePlayPart></YoutubePlayPart>
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