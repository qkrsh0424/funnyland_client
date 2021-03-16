import styled from 'styled-components';
// components
import NavbarDynamic from '../../navbar/NavbarDynamic';
import FooterDefault from '../../footer_offer/FooterDefault';

const Container = styled.div`
    padding-top:100px;
`;

const TitleWrapper = styled.div`
    text-align:center;

`;

const TitleEl = styled.div`
    font-size:40px;
    font-weight:700;
`;

const BodyWrapper = styled.div`
    line-height:2.0em;
`;
const ContentBox = styled.div`
    padding:8px;
`;
const BodyTitleEl = styled.div`
    font-weight:700;
`;
const PrivacyAgreement = () => {
    return (
        <>
            <NavbarDynamic></NavbarDynamic>
            <Container className='container'>
                <TitleWrapper>
                    <TitleEl>개인정보 처리방침</TitleEl>
                </TitleWrapper>

                <BodyWrapper>
                    <ContentBox>
                        <BodyTitleEl>게임토피아 개인정보 취급방침</BodyTitleEl>
                        게임토피아(이하 “회사”)은 이용자들의 개인정보를 소중히 다루고 있습니다.
                    </ContentBox>

                    <ContentBox>
                        <BodyTitleEl>수집하는 개인정보 항목</BodyTitleEl>
                        회사는 SMS상담, 브로슈어신청, 온라인창업문의, 상품상담문의, 폐업상담문의, 리뉴얼상담문의, 기타문의 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
                        <ul>
                            <li>수집항목 : 이름 , 연락처 , 휴대전화번호, 희망지역, 층수, 희망오픈일, 기타전하실내용, 쿠키</li>
                            <li>개인정보 수집방법 : 홈페이지(상담신청란)</li>
                        </ul>
                    </ContentBox>

                    <ContentBox>
                        <BodyTitleEl>개인정보의 수집 및 이용목적</BodyTitleEl>
                        회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 정보제공, 콘텐츠 제공 , 불만처리 등 민원처리 , 고지사항 전달 마케팅 및 광고에 활용, 이벤트 등 광고성 정보 전달 , 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
                    </ContentBox>

                    <ContentBox>
                        <BodyTitleEl>개인정보의 보유 및 이용기간</BodyTitleEl>
                        원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
                    
                        <ul>
                            <li>보존 항목 : 결제기록</li>
                            <li>보존 근거 : 계약 또는 청약철회 등에 관한 기록</li>
                            <li>보존 기간 : 3년</li>
                            <li>계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                            <li>대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                            <li>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                        </ul>
                    </ContentBox>

                    <ContentBox>
                        <BodyTitleEl>개인정보의 파기절차 및 방법</BodyTitleEl>
                        회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
                        <ul>
                            <li>
                                파기절차
                                <p>
                                    회원님이 상담등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함)
                                    내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.
                                    별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
                                </p>
                            </li>

                            <li>
                                파기방법
                                <p>
                                    전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                                </p>
                            </li>

                        </ul>
                    </ContentBox>

                    <ContentBox>
                        <BodyTitleEl>개인정보 제공</BodyTitleEl>
                        회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
                        <ul>
                            <li>
                                이용자들이 사전에 동의한 경우
                                <p>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
                            </li>
                        </ul>
                    </ContentBox>


                    <ContentBox>
                        <BodyTitleEl>이용자 및 법정대리인의 권리와 그 행사방법</BodyTitleEl>
                        이용자들의 개인정보 조회, 수정을 위해서는 본인 확인 절차를 거치신 후 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.

                        귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다. 회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
                    </ContentBox>

                    <ContentBox>
                        <BodyTitleEl>개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</BodyTitleEl>
                        회사는 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사는 다음과 같은 목적을 위해 쿠키를 사용합니다.

                        <ul>
                            <li>쿠키 등 사용 목적
                                <p>
                                    회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
                                </p>
                            </li>

                            <li>쿠키 설정 거부 방법
                                <p>
                                    {`쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보 단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.`}
                                </p>
                            </li>
                        </ul>
                    </ContentBox>

                    <ContentBox>
                        <BodyTitleEl>개인정보에 관한 민원서비스</BodyTitleEl>
                        회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.
                        <ul>
                            <li>고객서비스담당자 : 조정준</li>
                            <li>전화번호 : 010-5381-9104</li>
                            <li>이메일 : game1244@hanmail.net</li>
                            <li>개인정보관리책임자 성명 : 조정준</li>
                            <li>전화번호 : 010-5381-9104</li>
                            <li>이메일 : game1244@hanmail.net</li>
                        </ul>
                        귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다.
                        회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다. 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
                        <ul>
                            <li>개인분쟁조정위원회 (www.1336.or.kr/1336)</li>
                            <li>정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)</li>
                            <li>대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)</li>
                            <li>경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)</li>
                        </ul>
                    </ContentBox>
                </BodyWrapper>
            </Container>
            <FooterDefault></FooterDefault>
        </>
    );
}

export default PrivacyAgreement;