import { useEffect,useState } from 'react';
import styled from 'styled-components';

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
`;

const MainTitleSub = styled.div`
    text-align:center;
    font-size:22px;
    font-weight:600;
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

const LineBreaker2 = styled.div`
    width: 50%;
    height: 2px;
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
    grid-template-columns:repeat(3,1fr);
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
    border:3px solid #f8bac9;
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
const FoundIntro1Main = () =>{
    useEffect(()=>{
        handleScrollToTop();
    },[]);
    
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
                title={'창업 절차 안내'}
                linkPage={'intro1'}
            ></FoundTopLayout>
            {/* BODY START */}
            <>
                <Container>
                    <MainTitleBox>
                        <MainTitle>
                            LAUNCHING PROCESS
                        </MainTitle>
                        <MainTitleSub>창업 절차 안내</MainTitleSub>
                        <LineBreaker1></LineBreaker1>
                        <ExplainEl>퍼니랜드의 비전과 함께할 <br/>소중한 <b>가맹점주</b>님들을 모십니다. </ExplainEl>
                    </MainTitleBox>
                    <LineBreaker2></LineBreaker2>
                    <ProcessContainer className='container'>
                        <ProcessWrapper>
                            <ProcessBox>
                                <ProcessContent>
                                    <div>
                                        <img src='/images/funnyland/icon/icon_step1.png'></img>
                                    </div>
                                    <ProcessTitleBox>01. 문의</ProcessTitleBox>
                                    <ProcessDescBox>가맹점 개설 의뢰</ProcessDescBox>
                                </ProcessContent>
                            </ProcessBox>
                            <ProcessBox>
                                <ProcessContent>
                                    <div>
                                        <img src='/images/funnyland/icon/icon_step2.png'></img>
                                    </div>
                                    <ProcessTitleBox>02. 상담</ProcessTitleBox>
                                    <ProcessDescBox>희망지역 및 규모에 맞는 운영형태 선정</ProcessDescBox>
                                </ProcessContent>
                            </ProcessBox>
                            <ProcessBox>
                                <ProcessContent>
                                    <div>
                                        <img src='/images/funnyland/icon/icon_step3.png'></img>
                                    </div>
                                    <ProcessTitleBox>03. 상권분석, 점포계약</ProcessTitleBox>
                                    <ProcessDescBox>상권조사와 입지분석을 통한 점포 선점</ProcessDescBox>
                                </ProcessContent>
                            </ProcessBox>
                            <ProcessBox>
                                <ProcessContent>
                                    <div>
                                        <img src='/images/funnyland/icon/icon_step4.png'></img>
                                    </div>
                                    <ProcessTitleBox>04. 계약 체결</ProcessTitleBox>
                                    <ProcessDescBox>가맹 세부사항 협의 및 계약 체결</ProcessDescBox>
                                </ProcessContent>
                            </ProcessBox>
                            <ProcessBox>
                                <ProcessContent>
                                    <div>
                                        <img src='/images/funnyland/icon/icon_step5.png'></img>
                                    </div>
                                    <ProcessTitleBox>05. 인테리어 시공</ProcessTitleBox>
                                    <ProcessDescBox>설계도면 검토 및 확정 인테리어 공사 및 감리</ProcessDescBox>
                                </ProcessContent>
                            </ProcessBox>
                            <ProcessBox>
                                <ProcessContent>
                                    <div>
                                        <img src='/images/funnyland/icon/icon_step6.png'></img>
                                    </div>
                                    <ProcessTitleBox>06. 인허가 준비</ProcessTitleBox>
                                    <ProcessDescBox>영업을 위한 각종 인허가 및 서류발급 완비</ProcessDescBox>
                                </ProcessContent>
                            </ProcessBox>
                            <ProcessBox>
                                <ProcessContent>
                                    <div>
                                        <img src='/images/funnyland/icon/icon_step7.png'></img>
                                    </div>
                                    <ProcessTitleBox>07. 교육</ProcessTitleBox>
                                    <ProcessDescBox>가맹점주 교육을 통한 매장 운영 매뉴얼 및 서비스 교육</ProcessDescBox>
                                </ProcessContent>
                            </ProcessBox>
                            <ProcessBox>
                                <ProcessContent>
                                    <div>
                                        <img src='/images/funnyland/icon/icon_step8.png'></img>
                                    </div>
                                    <ProcessTitleBox>08. 최종점검</ProcessTitleBox>
                                    <ProcessDescBox>오픈매니저 파견하에 설비 및 물품 입고, 최종 마무리 </ProcessDescBox>
                                </ProcessContent>
                            </ProcessBox>
                            <ProcessBox style={{backgroundColor:'#ee547020'}}>
                                <ProcessContent>
                                    <div>
                                        <img src='/images/funnyland/icon/icon_step9.png'></img>
                                    </div>
                                    <ProcessTitleBox>09. 그랜드 오픈</ProcessTitleBox>
                                    <ProcessDescBox>매장 그랜드 오픈</ProcessDescBox>
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

export default FoundIntro1Main;