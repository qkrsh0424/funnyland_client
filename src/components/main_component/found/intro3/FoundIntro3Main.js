import { useEffect, useState } from 'react';
import styled from 'styled-components';

// DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// data connector
import { counselingDataConnect } from '../../../data_connect/CounselingDataConnect';

// components
import NavbarDynamic from '../../../navbar/NavbarDynamic';
import FooterDefault from '../../../footer_offer/FooterDefault';
import NavbarBottomFixed from '../../../navbar/NavbarBottomFixed';
import ApplyFormModal from '../../home/ApplyFormModal';
import FoundTopLayout from '../layout/FoundTopLayout';
// handler
import { handleScrollToTop } from '../../../../handler/ScrollHandler';

const Container = styled.div`

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

const ProcessContainer = styled.div`
    /* width:80%;
    margin:5px 10%;
    padding:15px; */
    margin-bottom:150px;
`;
const ProcessWrapper = styled.div`

    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-auto-rows: minmax(auto, auto);
    grid-gap:15px;

    @media only screen and (max-width:768px){
        grid-template-columns:repeat(2,1fr);
    }
`;

const ProcessBox = styled.div`
    text-align:center;
    min-height:250px;
    padding:8px;
    border:4px solid #f8bac9;
    border-radius:10px;
    @media only screen and (max-width:768px){
        min-height:150px;
    }
`;

const ProcessContent = styled.div`
    margin-top:10%;
`;
const ProcessTitleBox = styled.div`
    font-size:19px;
    font-weight:700;
    padding:8px 0;
    @media only screen and (max-width:768px){
        font-size:13px;
    }
`;

const ProcessDescBox = styled.div`
    font-size:19px;
    font-weight:600;
    padding:8px 0;
    line-height:1.5;
    @media only screen and (max-width:768px){
        font-size:12px;
    }
`;

const LogoImage = styled.img`
    max-height:65px;
    @media only screen and (max-width:992px){
        max-height:45px;
    }
    @media only screen and (max-width:768px){
        max-height:40px;
    }
    @media only screen and (max-width:576px){
        max-height:35px;
    }
    @media only screen and (max-width:320px){
        max-height:24px;
    }
`;

const FoundIntro3Main = () => {
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
        <>
            <NavbarDynamic></NavbarDynamic>
            <FoundTopLayout
                title={'임대 절차 안내'}
                linkPage={'intro3'}
            ></FoundTopLayout>
            {/* BODY START */}
            <>
                <Container>
                    <MainTitleBox>
                        <MainTitle>
                            RENTAL PROCESS
                        </MainTitle>
                        <MainTitleSub>임대 절차 안내</MainTitleSub>
                        <LineBreaker1></LineBreaker1>
                        <ExplainEl>성공적인 렌탈서비스는 <b>퍼니랜드</b>와 함께 </ExplainEl>
                    </MainTitleBox>
                    <LineBreaker1></LineBreaker1>
                    <ProcessContainer className='container'>
                        <ProcessWrapper>
                            <ProcessBox style={{borderColor:'#ee547050'}}>
                                <ProcessContent>
                                    <div>
                                        <LogoImage src='/images/funnyland/icon/icon_step1_2.png'></LogoImage>
                                    </div>
                                    <ProcessTitleBox>01. 문의 및 상담</ProcessTitleBox>
                                    <ProcessDescBox>행사나 렌탈문의에 대한 상담진행</ProcessDescBox>
                                </ProcessContent>
                            </ProcessBox>
                            <ProcessBox style={{borderColor:'#ee547070'}}>
                                <ProcessContent>
                                    <div>
                                        <LogoImage src='/images/funnyland/icon/icon_step3.png'></LogoImage>
                                    </div>
                                    <ProcessTitleBox>02. 분석 및 기획</ProcessTitleBox>
                                    <ProcessDescBox>상담내용을 토대로 렌탈형식 분석 및 기획</ProcessDescBox>
                                </ProcessContent>
                            </ProcessBox>
                            <ProcessBox style={{borderColor:'#ee547090'}}>
                                <ProcessContent>
                                    <div>
                                        <LogoImage src='/images/funnyland/icon/icon_step5.png'></LogoImage>
                                    </div>
                                    <ProcessTitleBox>03. 렌탈 상품 체크</ProcessTitleBox>
                                    <ProcessDescBox>선정된 렌탈 상품 및 제안서 제출</ProcessDescBox>
                                </ProcessContent>
                            </ProcessBox>
                            <ProcessBox style={{borderColor:'#ee5470c0', background:'#ee547020'}}>
                                <ProcessContent>
                                    <div>
                                        <LogoImage src='/images/funnyland/icon/icon_step8.png'></LogoImage>
                                    </div>
                                    <ProcessTitleBox>04. 출고</ProcessTitleBox>
                                    <ProcessDescBox>일정에 맞춰 배송 및 설치 완료</ProcessDescBox>
                                </ProcessContent>
                            </ProcessBox>
                        </ProcessWrapper>
                    </ProcessContainer>
                </Container>
            </>
            {/* BODY END */}
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

export default FoundIntro3Main;