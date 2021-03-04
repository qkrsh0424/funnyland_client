import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

// handler
import { handleScrollToTop } from '../../../../handler/ScrollHandler';

// data connector
import { storeDataConnect } from '../../../data_connect/StoreDataConnect';

// components
import NavbarDynamic from '../../../navbar/NavbarDynamic';
import FooterDefault from '../../../footer_offer/FooterDefault';
import NavbarBottomFixed from '../../../navbar/NavbarBottomFixed';
import ApplyFormModal from '../../home/ApplyFormModal';
import StoreTopLayout from '../layout/StoreTopLayout';
import DetailComponent from './DetailComponent';

const { kakao } = window;
const StoreDetailMain = ({ history, match, location }) => {
    let query = queryString.parse(window.location.search);
    let kakaoMapRef = useRef();

    useEffect(() => {
        handleScrollToTop();

    }, []);

    const [dialogOpen, setDialogOpen] = useState(false);
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

    const [storeData, setStoreData] = useState(null);

    useEffect(() => {
        async function fetchInit() {
            await __handleStoreDataConnect().getStoreOne();


        }
        fetchInit();
    }, [location]);

    // kakao map create
    useEffect(() => {
        function init() {
            if (storeData) {
                // var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
                var container = kakaoMapRef.current //지도를 담을 영역의 DOM 레퍼런스
                var options = { //지도를 생성할 때 필요한 기본 옵션
                    // center: new kakao.maps.LatLng(35.157588, 129.058822), //지도의 중심좌표.
                    center: new kakao.maps.LatLng(storeData.storeLat, storeData.storeLng), //지도의 중심좌표.
                    level: 3 //지도의 레벨(확대, 축소 정도)
                };
                const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

                // 마커가 표시될 위치입니다 
                var markerPosition = new kakao.maps.LatLng(storeData.storeLat, storeData.storeLng);

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);

                var iwContent = `<div style="padding:5px;"> ${storeData.storeName}<br><a href="https://map.kakao.com/link/map/${storeData.storeName},${storeData.storeLat},${storeData.storeLng}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/${storeData.storeName},${storeData.storeLat},${storeData.storeLng}" style="color:blue" target="_blank">길찾기</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다 
                    iwPosition = new kakao.maps.LatLng(storeData.storeLat, storeData.storeLng); //인포윈도우 표시 위치입니다

                // 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                    position: iwPosition,
                    content: iwContent
                });

                // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
                infowindow.open(map, marker);
            }

        }
        init();

    }, [storeData])
    const __handleStoreDataConnect = () => {
        return {
            getStoreOne: async function () {
                let storeId = query.storeId;
                if (storeId) {
                    await storeDataConnect().searchStoreOne(storeId)
                        .then(data => {
                            if (data && data.message == 'success') {
                                setStoreData(data.data);
                                console.log(data);
                            } else if (data && data.message == 'no_data') {
                                alert('존재하지 않는 데이터입니다.');
                                history.push('/store/list');
                            }
                        })
                }

            }
        }
    }
    return (
        <>
            <NavbarDynamic></NavbarDynamic>
            <StoreTopLayout
                title={'매장상세'}
                linkPage={'detail'}
            ></StoreTopLayout>
            {/* Body Start */}
            {storeData ?
                <DetailComponent
                    kakaoMapRef={kakaoMapRef}
                    storeData={storeData}
                ></DetailComponent>
                :
                <></>
            }

            {/* Body End */}
            <FooterDefault></FooterDefault>
            <NavbarBottomFixed
                mainHandleDialogControl={mainHandleDialogControl}
            ></NavbarBottomFixed>
            <ApplyFormModal
                dialogOpen={dialogOpen}

                mainHandleDialogControl={mainHandleDialogControl}
            >
            </ApplyFormModal>
        </>
    );
}

export default StoreDetailMain;