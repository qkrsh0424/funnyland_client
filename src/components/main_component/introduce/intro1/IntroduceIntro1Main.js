
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// components
import NavbarDynamic from '../../../navbar/NavbarDynamic';
import IntroduceTopLayout from '../layout/IntroduceTopLayout';
import IntroduceTopLayout2 from '../layout/IntroduceTopLayout2';
import FooterDefault from '../../../footer_offer/FooterDefault';
import NavbarBottomFixed from '../../../navbar/NavbarBottomFixed';
import ApplyFormModal from '../../home/ApplyFormModal';
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
`;

const ExplainEl = styled.div`
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

const IntroduceBodyWrapper = styled.div`
    margin-bottom:100px;
`;

const IntroduceBodyTitle = styled.div`
    font-size:34px;
    font-weight:700;
    text-align:center;
    margin: 70px 0 20px 0;

    @media only screen and (max-width:768px){
        font-size:24px;
    }
`;
const IntroduceBodyContentWrapper = styled.div`
    width:80%;
    margin:5px 10%;
    /* padding:15px; */
    padding:15px 20%;
    @media only screen and (max-width:992px){
        padding:0;
    }
`;
const IntroduceBodyContentWrapper2 = styled.div`
    width:80%;
    margin:5px 10%;
    padding:15px;
    /* padding:15px 20%; */
    @media only screen and (max-width:992px){
        margin:5px 0;
        width:100%;
        padding:0;
    }
`;

const ContentImageWrapper = styled.div`
    /* text-align:center; */
`;

const ContentImageEl = styled.img`
    width:100%;
    border-right:4px solid #ee547060;
    border-bottom:4px solid #ee547060;
    border-radius:10px;
    filter: drop-shadow(5px 5px 5px #000);
    -webkit-filter: drop-shadow(5px 5px 5px #000);

    @media only screen and (max-width:768px){
        width:100%;
    }
`;

const ContentImageEl2 = styled.img`
    width:100%;
`;

const ContentTextWrapper = styled.div`
    position:relative;
`;

const ContentTextEl = styled.div`
    /* padding: 40px; */
    /* width:50%; */
    font-size:30px;
    font-weight:600;
    line-height:1.8;
    text-align:center;
    font-family: 'Nanum Pen Script', cursive;
    @media only screen and (max-width:768px){
        font-size:25px;
    }
`;
const LineBreaker1 = styled.div`
    width: 55px;
    height: 5px;
    margin: 30px auto 45px;
    background-color: #ee5470;
`;
const IntroduceIntro1Main = () => {
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
                title={'인사말'}
                linkPage={'intro1'}
            ></IntroduceTopLayout>
            <MainTitleBox>
                <MainTitle>
                    GREETING
                </MainTitle>
                <MainTitleSub>인사말</MainTitleSub>
                <LineBreaker1></LineBreaker1>
                <ExplainEl>퍼니랜드는 대한민국의 건전한 <br />게임문화를 선도하는 기업입니다.</ExplainEl>
            </MainTitleBox>
            <IntroduceBodyWrapper>
                {/* <IntroduceBodyContentWrapper>
                    <ContentImageWrapper>
                        <ContentImageEl src='/images/funnyland/bg/funnyland-bg4.jpg'></ContentImageEl>
                    </ContentImageWrapper>
                    <LineBreaker1></LineBreaker1>
                    <ContentTextWrapper>
                        <ContentTextEl>
                            게임산업 발전과 건전한 게임문화를 위해 항상 노력하며 다양한 컨텐츠와 우수한 제품 공급에 앞장서는 게임토피아 입니다. 20년간의 창업 노하우와 기술력을 바탕으로 성공적인 창업이 될 수 있도록 고객님의 눈높이에서 항상 최선을 다하겠습니다.
                            <br />
                            <br />
                            감사합니다.
                        </ContentTextEl>
                    </ContentTextWrapper>

                </IntroduceBodyContentWrapper> */}
                <IntroduceBodyContentWrapper2>
                    <ContentImageWrapper>
                        <ContentImageEl2 src='/images/funnyland/introduce/funnyland_introduce1.jpeg'></ContentImageEl2>
                    </ContentImageWrapper>
                </IntroduceBodyContentWrapper2>
                
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

export default IntroduceIntro1Main;