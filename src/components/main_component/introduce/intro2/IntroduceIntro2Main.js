import { useEffect, useState } from 'react';
import styled from 'styled-components';

// components
import NavbarDynamic from '../../../navbar/NavbarDynamic';
import IntroduceTopLayout from '../layout/IntroduceTopLayout';
import CompanyHistoryPresent from './CompanyHistoryPresent';
import FooterDefault from '../../../footer_offer/FooterDefault';
import NavbarBottomFixed from '../../../navbar/NavbarBottomFixed';
import ApplyFormModal from '../../home/ApplyFormModal';

// handler
import { handleScrollToTop } from '../../../../handler/ScrollHandler';

const Container = styled.div`

`;

const IntroduceBodyWrapper = styled.div`
    margin-bottom:100px;
`;

const IntroduceBodyContentWrapper = styled.div`
    width:80%;
    margin:0 10%;
    border-top: 1px solid #ee5470;
    padding:15px;
`;

const IntroduceBodyTitle = styled.div`
    text-align:center;
    font-size:30px;
    font-weight:500;
    margin: 70px 0 20px 0;
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

const IntroduceIntro2Main = () => {

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
            <NavbarDynamic
            // scrollY={scrollY}
            ></NavbarDynamic>
            <IntroduceTopLayout
                title={'연혁'}
                linkPage={'intro2'}
            ></IntroduceTopLayout>
            <MainTitleBox>
                <MainTitle>
                    HISTORY
                </MainTitle>
                <MainTitleSub>연혁</MainTitleSub>
                <LineBreaker1></LineBreaker1>
            </MainTitleBox>
            <IntroduceBodyWrapper>
                <IntroduceBodyTitle>
                    <div>
                        SINCE <span className='funnyland-color1'>2001</span>
                    </div>
                </IntroduceBodyTitle>
                <IntroduceBodyContentWrapper>
                    <CompanyHistoryPresent
                        historyYear={'2020'}
                        historys={[
                            '부산 센텀시티 영화관 게임장 개설.',
                            '수원광교, 일산고양, 인천학익 영화관 게임장 개설.'
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2019'}
                        historys={[
                            '홍대 퍼니랜드 직영 게임장으로 재오픈 및 운영.',
                            '등촌, 광주금남로 영화관 게임장 개설.',
                            '몽골 올란바토르 게임장 개설.',
                            '부산동래, 계양, 연수, 부천 영화관 게임장 개설.',
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2018'}
                        historys={[
                            '구리,울산,평촌 영화관 게임장 개설.',
                            '의정부 영화관 게임장 개설.',
                            '대전, 수유리 영화관 게임장 개설.',
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2017'}
                        historys={[
                            '신촌 지플렉스 게임장 개설 및 유지보수 업무 제휴.',
                            '범계 100평 규모 퍼니랜드 게임장 개설 및 운영.',
                            '대명 양양 솔비치&리조트 게임장 확장 이전 오픈.',
                            '부평 120평 규모 퍼니랜드 게임장 개설 및 운영.',
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2016'}
                        historys={[
                            '대명 솔비치&리조트 게임장 개설.',
                            '홍대 퍼니랜드 게임장 개설 및 운영.',
                            '대명리조트 삼척 게임장 개설.',
                            // '화정 100평 규모 퍼니랜드 게임장 개설.',
                            '강남 퍼니랜드 게임장 개설 및 운영.',
                            '강남 원플레이 게임장 개설 및 운영.',
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2015'}
                        historys={[
                            '용인 롯데시네마 게임장 개설 및 운영.',
                            '화정 80평 규모 게임장 리모델링 및 게임기기 임대.',
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2014'}
                        historys={[
                            '당진CGV 80평 규모 게임장 개설 및 게임기 임대.',
                            '서산 롯데시네마 60평 규모 게임장 개설 및 게임기 임대.',
                            '안양 노리존 230평 규모 게임장 개설 및 게임기 임대.',
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2013'}
                        historys={[
                            '대명리조트 거제지점 게임장 개설.',
                            '대명리조트 변산, 대명리조트 경주 게임기 판매 및 유지보수 업무 제휴.',
                            '몰디브 100평 규모 게임장 수출 및 개설.',
                            '강남 롯데시네마 게임장 개설 및 운영.',
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2012'}
                        historys={[
                            '장원레져스포츠 야구 연습장 서울, 경기 총판 계약.',
                            '펏스원 제품 해외수출.',
                            // '광주 운암동 게임장 개설.',
                            '의정부 게임클럽 내 야구장 개설.',
                            // '김포공항 롯데시네마점 내 게임기 설치.',
                            '몽골 올란바토르 4D 맥스 라이더 수출.',
                            // '영등포 롯데시네마 내 게임장 유지 보수.'
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2011'}
                        historys={[
                            '대전둔산CGV 내 게임장 개설.',
                            // '성남 노리존 내 게임기기 임대 관리.',
                            // '광주 시너스 내 게임장 개설.',
                            '속초한화콘도 내 게임장 리모델링.',
                            // '노원 노리존 내 게임기기 임대 관리.',
                            // '노원 롯데시네마 내 게임기 설치.',
                            // '일산 이스턴 시티 락앤롤 게임기 설치.',
                            // '동수원 오션게임장 개설.'
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2010'}
                        historys={[
                            '몽골팅기스 극장 4D 맥스 라이더 수출.',
                            '동수원CGV 내 게임장 개설.',
                            '롯데시네마 내 게임장 개설.',
                            '(주)펏스원 서울.경기 총판 계약.',
                            '한국 민속촌 내 게임장 리모델링 개설.',
                            '제주도 롯데시네마 내 게임장 개설.',
                            '하이원 리조트 내 게임장 개설.',
                            '역곡CGV 내 게임장 개설.',
                            // '안산 메가 넥스 내 게임장 개설.',
                            // '제주도 4D 게임장 개설.',
                            // '지행역 게임천국 게임장 개설.',
                            // '제주도 4D 게임장 2호점 개설.',
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2009'}
                        historys={[
                            '제주도 CGV 내 게임장 개설, 동대문 메가박스 게임장 개설.',
                            '엣지 노래방 제작 판매.'
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2008'}
                        historys={[
                            '몽골 올란바토르 게임장 개설.'
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2007'}
                        historys={[
                            '통신판매업신고(중구06547호)',
                            '게임배급업자등록증(재교부)(게제 제2006-08호)',
                            '게임제작업자등록증(재교부)(게제 제2006-26호)',
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2006'}
                        historys={[
                            '통신판매를 위해 사업자등록증 재교부(104-06-23141)'
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2005'}
                        historys={[
                            '(재)서울산업통상진흥원 애니메이션 센터와 물품 공급.',
                            '한화리조트(주) 용인, 한화리조트(주) 수안보 게임장개설.',
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2004'}
                        historys={[
                            '양지 리조트 게임장 개설.',

                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    {/* <CompanyHistoryPresent
                        historyYear={'2003'}
                        historys={[
                            '오사모(오락실을 사랑하는 모임) www.osamo.co.kr 사이트 운영.',
                            '둔촌동 100평 게임장 개설 및 수지, 용인, 목동 등 개설.',
                            '수원 베레슈트 게임장 임대 운영.',
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent> */}
                    <CompanyHistoryPresent
                        historyYear={'2002'}
                        historys={[
                            '게임물 제작업자,배급업자 등록.',
                            '대명콘도(단양) 150평 게임장 개설 및 다수 개설.',
                            '대명콘도(홍천) 리모델링 물품 공급.',
                        ]}
                        lineBreak={true}
                    ></CompanyHistoryPresent>
                    <CompanyHistoryPresent
                        historyYear={'2001'}
                        historys={[
                            '게임토피아 설립',
                            '대명콘도(홍천, 양평)와 업무 제휴.',
                            '유통업자 등록.',
                        ]}
                        lineBreak={false}
                    ></CompanyHistoryPresent>
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

export default IntroduceIntro2Main;