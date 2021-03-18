import { useEffect, useState, memo, useCallback, useRef } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkedAlt,
    faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';

// components
import NavbarDynamic from '../../../navbar/NavbarDynamic';
import IntroduceTopLayout from '../layout/IntroduceTopLayout';
import FooterDefault from '../../../footer_offer/FooterDefault';
import NavbarBottomFixed from '../../../navbar/NavbarBottomFixed';
import ApplyFormModal from '../../home/ApplyFormModal';

// handler
import { handleScrollToTop } from '../../../../handler/ScrollHandler';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    name: '퍼니랜드',
    lat: 37.54933842721005,
    lng: 126.92096784021315
};

const center2 = {
    name: '게임토피아',
    lat: 37.56701055743499,
    lng: 126.99542015596762
}
const Container = styled.div`

`;

const IntroduceBodyWrapper = styled.div`
    margin-bottom:100px;
`;

const IntroduceBodyContentWrapper = styled.div`
    width:80%;
    margin:0 10%;
    .intro3-title{
        font-weight:700;
        margin:70px 0 20px 0;
    }
    .intro3-content-box{
        padding:15px 0;
    }
`;

const MainTitleBox = styled.div`
    margin-top:70px;
`;
const MainTitle = styled.div`
    text-align:center;
    font-size:42px;
    font-weight:800;
    @media only screen and (max-width:768px){
        &{
            font-size:35px;
        }
    }
    @media only screen and (max-width:320px){
        &{
            font-size:28px;
        }
    }
`;

const MainTitleSub = styled.div`
    text-align:center;
    font-size:22px;
    font-weight:600;
    @media only screen and (max-width:768px){
        &{
            font-size:20px;
        }
    }
    @media only screen and (max-width:320px){
        &{
            font-size:18px;
        }
    }
`;

const ExplainEl = styled.div`
    text-align:center;
    font-size:22px;
    font-weight:600;
`;
const LineBreaker1 = styled.div`
    width: 55px;
    height: 5px;
    margin: 30px auto 45px;
    background-color: #ee5470;
`;

const KakaoMapContainer = styled.div`
    /* border:3px double black; */
`;

const KakaoMapWapper = styled.div`
    border:4px double #d1d1d1;
`;

const KakaoMapEl = styled.div`
    width:100%;
    height:450px;
    @media only screen and (max-width:992px){
        height:300px;
    }
`;

const { kakao } = window;

const IntroduceIntro3Main = () => {
    let kakaoMapRef1 = useRef();
    let kakaoMapRef2 = useRef();
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

    useEffect(() => {
        function initMap1() {
            // if (storeData) {
            // var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
            var container = kakaoMapRef1.current //지도를 담을 영역의 DOM 레퍼런스
            var options = { //지도를 생성할 때 필요한 기본 옵션
                // center: new kakao.maps.LatLng(35.157588, 129.058822), //지도의 중심좌표.
                center: new kakao.maps.LatLng(center.lat, center.lng), //지도의 중심좌표.
                level: 3 //지도의 레벨(확대, 축소 정도)
            };
            const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

            // 마커가 표시될 위치입니다 
            var markerPosition = new kakao.maps.LatLng(center.lat, center.lng);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            var iwContent = `<div style="padding:5px;"> ${center.name}<br><a href="https://map.kakao.com/link/map/${center.name},${center.lat},${center.lng}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/${center.name},${center.lat},${center.lng}" style="color:blue" target="_blank">길찾기</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다 
                iwPosition = new kakao.maps.LatLng(center.lat, center.lng); //인포윈도우 표시 위치입니다

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                position: iwPosition,
                content: iwContent
            });

            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker);
            // }
            // if (storeData) {
            // var container = document.getElementById('myMap'); //지도를 담을 영역의 DOM 레퍼런스
            var container2 = kakaoMapRef2.current //지도를 담을 영역의 DOM 레퍼런스
            var options2 = { //지도를 생성할 때 필요한 기본 옵션
                // center: new kakao.maps.LatLng(35.157588, 129.058822), //지도의 중심좌표.
                center: new kakao.maps.LatLng(center2.lat, center2.lng), //지도의 중심좌표.
                level: 3 //지도의 레벨(확대, 축소 정도)
            };
            const map2 = new kakao.maps.Map(container2, options2); //지도 생성 및 객체 리턴

            // 마커가 표시될 위치입니다 
            var markerPosition2 = new kakao.maps.LatLng(center2.lat, center2.lng);

            // 마커를 생성합니다
            var marker2 = new kakao.maps.Marker({
                position: markerPosition2
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker2.setMap(map2);

            var iwContent2 = `<div style="padding:5px;"> ${center2.name}<br><a href="https://map.kakao.com/link/map/${center2.name},${center2.lat},${center2.lng}" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/${center2.name},${center2.lat},${center2.lng}" style="color:blue" target="_blank">길찾기</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다 
                iwPosition2 = new kakao.maps.LatLng(center2.lat, center2.lng); //인포윈도우 표시 위치입니다

            // 인포윈도우를 생성합니다
            var infowindow2 = new kakao.maps.InfoWindow({
                position: iwPosition2,
                content: iwContent2
            });

            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow2.open(map2, marker2);
            // }
        }
        initMap1();
        // initMap2();
    }, [])
    return (
        <Container>
            <NavbarDynamic></NavbarDynamic>
            <IntroduceTopLayout
                title={'오시는 길'}
                linkPage={'intro3'}
            ></IntroduceTopLayout>
            <MainTitleBox>
                <MainTitle>
                    DIRECTIONS
                </MainTitle>
                <MainTitleSub>오시는 길</MainTitleSub>
                <LineBreaker1></LineBreaker1>
            </MainTitleBox>
            <IntroduceBodyWrapper>
                <IntroduceBodyContentWrapper>
                    <h4 className="intro3-title">
                        퍼니랜드 본점
                    </h4>
                    <div className='intro3-content-box'>
                        <h5>
                            <FontAwesomeIcon icon={faMapMarkedAlt} color='#ee5470'></FontAwesomeIcon>
                            <span style={{ marginLeft: '8px' }}>주소</span>
                        </h5>
                        <div style={{ paddingLeft: '16px', fontWeight: '600' }}>서울특별시 마포구 서교동 어울마당로 46-1</div>
                    </div>
                    <div className='intro3-content-box'>
                        <h5>
                            <FontAwesomeIcon icon={faPhoneAlt} color='#ee5470'></FontAwesomeIcon>
                            <span style={{ marginLeft: '8px' }}>전화번호</span>
                        </h5>
                        <div style={{ paddingLeft: '16px', fontWeight: '600' }}>02-332-9074</div>
                    </div>
                    {/* <div style={{ border: '4px double #f1f1f1' }}>
                        <LoadScript
                            googleMapsApiKey={process.env.REACT_APP_GOOGLEMAP_API}
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={18}
                            >
                                <>
                                    <Marker
                                        position={center}
                                        title={`퍼니랜드`}
                                        label={'퍼니랜드'}
                                    ></Marker>
                                </>
                            </GoogleMap>
                        </LoadScript>
                    </div> */}
                    <KakaoMapContainer>
                        <KakaoMapWapper>
                            <KakaoMapEl ref={kakaoMapRef1}></KakaoMapEl>
                        </KakaoMapWapper>
                        
                    </KakaoMapContainer>
                </IntroduceBodyContentWrapper>
                <IntroduceBodyContentWrapper>
                    <h4 className="intro3-title">
                        게임토피아 유통 센터
                    </h4>
                    <div className='intro3-content-box'>
                        <h5>
                            <FontAwesomeIcon icon={faMapMarkedAlt} color='#ee5470'></FontAwesomeIcon>
                            <span style={{ marginLeft: '8px' }}>주소</span>
                        </h5>
                        <div style={{ paddingLeft: '16px', fontWeight: '600' }}>서울특별시 중구 을지로 157 대림상가 2F 다열 265호</div>
                    </div>
                    <div className='intro3-content-box'>
                        <h5>
                            <FontAwesomeIcon icon={faPhoneAlt} color='#ee5470'></FontAwesomeIcon>
                            <span style={{ marginLeft: '8px' }}>전화번호 / 팩스</span>
                        </h5>
                        <div style={{ paddingLeft: '16px', fontWeight: '600' }}>02-2272-1244 / 02-2274-1244</div>
                    </div>
                    {/* <div style={{ border: '4px double #f1f1f1' }}>
                        <LoadScript
                            googleMapsApiKey={process.env.REACT_APP_GOOGLEMAP_API}
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center2}
                                zoom={18}
                            >
                                <>
                                    <Marker
                                        position={center2}
                                        title={`게임토피아`}
                                        label={'게임토피아'}
                                    ></Marker>
                                </>
                            </GoogleMap>
                        </LoadScript>
                    </div> */}
                    <KakaoMapContainer>
                        <KakaoMapWapper>
                            <KakaoMapEl ref={kakaoMapRef2}></KakaoMapEl>
                        </KakaoMapWapper>
                        
                    </KakaoMapContainer>
                </IntroduceBodyContentWrapper>
            </IntroduceBodyWrapper>
            <FooterDefault></FooterDefault>
            <NavbarBottomFixed
                mainHandleDialogControl={mainHandleDialogControl}
            ></NavbarBottomFixed>
            <ApplyFormModal
                dialogOpen={dialogOpen}

                mainHandleDialogControl={mainHandleDialogControl}
            >
            </ApplyFormModal>
        </Container>
    );
}

export default IntroduceIntro3Main;