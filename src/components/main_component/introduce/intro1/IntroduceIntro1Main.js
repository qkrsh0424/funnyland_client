
import { useEffect,useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// components
import NavbarDynamic from '../../../navbar/NavbarDynamic';
import IntroduceTopLayout from '../layout/IntroduceTopLayout';
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
    padding:15px;
`;

const ContentImageWrapper = styled.div`
    text-align:center;
`;

const ContentImageEl = styled.img`
    width:50%;
    border-right:4px solid #ee547060;
    border-bottom:4px solid #ee547060;
    border-radius:10px;
    filter: drop-shadow(5px 5px 5px #000);
    -webkit-filter: drop-shadow(5px 5px 5px #000);

    @media only screen and (max-width:768px){
        width:100%;
    }
`;

const ContentTextWrapper  =styled.div`

`;

const ContentTextEl = styled.div`

`;
const LineBreaker1 = styled.div`
    width: 55px;
    height: 5px;
    margin: 30px auto 45px;
    background-color: #ee5470;
`;
const IntroduceIntro1Main = () => {
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
                <ExplainEl>퍼니랜드는 대한민국의 건전한 <br/>게임문화를 선도하는 기업입니다.</ExplainEl>
            </MainTitleBox>
            <IntroduceBodyWrapper>
                <IntroduceBodyContentWrapper>
                    <ContentImageWrapper>
                        <ContentImageEl src='/images/funnyland/bg/funnyland-bg3.jpg'></ContentImageEl>
                    </ContentImageWrapper>
                    <LineBreaker1></LineBreaker1>
                    <ContentTextWrapper>
                        <ContentTextEl>
                            긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지

                            긴글이 얼마나 길어질지긴글이 얼마나 길어질지긴글이 얼마나 길어질
                        </ContentTextEl>
                    </ContentTextWrapper>
                    
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

export default IntroduceIntro1Main;