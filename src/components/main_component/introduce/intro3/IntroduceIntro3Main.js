import { useEffect, useState, memo, useCallback } from 'react';
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
    lat: 37.54927888427358,
    lng: 126.9210000267195
};

const center2 = {
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
const IntroduceIntro3Main = () => {

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
                            <span style={{marginLeft:'8px'}}>주소</span>
                        </h5>
                        <div style={{paddingLeft:'16px', fontWeight:'600'}}>서울특별시 마포구 서교동 어울마당로 46-1</div>
                    </div>
                    <div className='intro3-content-box'>
                        <h5>
                            <FontAwesomeIcon icon={faPhoneAlt} color='#ee5470'></FontAwesomeIcon>
                            <span style={{marginLeft:'8px'}}>전화번호</span>
                        </h5>
                        <div style={{paddingLeft:'16px', fontWeight:'600'}}>02-2272-1244</div>
                    </div>
                    <div style={{border:'4px double #f1f1f1'}}>
                        <LoadScript
                            googleMapsApiKey={process.env.REACT_APP_GOOGLEMAP_API}
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={18}
                            >
                                { /* Child components, such as markers, info windows, etc. */}
                                <>
                                    <Marker
                                        position={center}
                                        title={`퍼니랜드`}
                                        label={'퍼니랜드'}
                                    ></Marker>
                                </>
                            </GoogleMap>
                        </LoadScript>
                    </div>
                    
                </IntroduceBodyContentWrapper>
                <IntroduceBodyContentWrapper>
                    <h4 className="intro3-title">
                        게임토피아 유통 센터
                    </h4>
                    <div className='intro3-content-box'>
                        <h5>
                            <FontAwesomeIcon icon={faMapMarkedAlt} color='#ee5470'></FontAwesomeIcon>
                            <span style={{marginLeft:'8px'}}>주소</span>
                        </h5>
                        <div style={{paddingLeft:'16px', fontWeight:'600'}}>서울특별시 중구 천계천로 160(산림동) 대림상가 2F 다열 265호</div>
                    </div>
                    <div className='intro3-content-box'>
                        <h5>
                            <FontAwesomeIcon icon={faPhoneAlt} color='#ee5470'></FontAwesomeIcon>
                            <span style={{marginLeft:'8px'}}>전화번호 / 팩스</span>
                        </h5>
                        <div style={{paddingLeft:'16px', fontWeight:'600'}}>02-2272-1244 / 02-2272-1244</div>
                    </div>
                    <div style={{border:'4px double #f1f1f1'}}>
                        <LoadScript
                            googleMapsApiKey={process.env.REACT_APP_GOOGLEMAP_API}
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center2}
                                zoom={18}
                            >
                                { /* Child components, such as markers, info windows, etc. */}
                                <>
                                    <Marker
                                        position={center2}
                                        title={`게임토피아`}
                                        label={'게임토피아'}
                                    ></Marker>
                                </>
                            </GoogleMap>
                        </LoadScript>
                    </div>
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