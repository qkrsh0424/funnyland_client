import styled from 'styled-components';
import CkeditorModules from '../../../modules/CkeditorModules';

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

const ExplainEl2 = styled.div`
    text-align:center;
    font-size:32px;
    font-weight:700;
    @media only screen and (max-width:768px){
        &{
            font-size:28px;
        }
    }
    @media only screen and (max-width:320px){
        &{
            font-size:24px;
        }
    }
`;

const LineBreaker1 = styled.div`
    width: 55px;
    height: 5px;
    margin: 30px auto 45px;
    background-color: #ee5470;
`;

const IntroContainer = styled.div`
    margin:40px auto;
    & .border-top-line{
        border-top:2px solid #ee5470
    }
`;

const IntroWrapper = styled.div`
    border-bottom:1px solid #d1d1d1;
    padding:15px;
`;

const IntroContentLeft = styled.div`
    text-align:center;
    font-size:18px;
    font-weight:700;
    @media only screen and (max-width:768px){
        &{
            font-size:13px;
        }
    }
    @media only screen and (max-width:320px){
        &{
            font-size:11px;
        }
    }
`;

const IntroContentRight = styled.div`
    font-size:18px;
    @media only screen and (max-width:768px){
        &{
            font-size:13px;
        }
    }
    @media only screen and (max-width:320px){
        &{
            font-size:11px;
        }
    }

`;
const ImageContainer = styled.div`
    padding:0 10%;
`;
const ImageWrapper = styled.div`
    width:100%;
    height:auto;
    border:4px double #f1f1f1;
    /* cursor:pointer; */
`;

const ImageBox = styled.div`
    position: relative;
    padding-bottom: 56.2%;
`;
const ImageEl = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: .5s;
`;

const DetailContainer = styled.div`
    margin-bottom:50px;
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
const DetailComponent = (props) => {
    return (
        <>
            <Container>
                <MainTitleBox>
                    <MainTitle>
                        STORE DETAILS
                    </MainTitle>
                    <MainTitleSub>매장 상세</MainTitleSub>
                    <LineBreaker1></LineBreaker1>
                    <ExplainEl>{props.storeData.storeName}</ExplainEl>
                </MainTitleBox>
                <IntroContainer className='container'>
                    
                    <IntroWrapper className='row border-top-line'>
                        <IntroContentLeft className='col-3'>
                            매장명
                        </IntroContentLeft>
                        <IntroContentRight className='col-9'>
                            {props.storeData.storeName}
                        </IntroContentRight>
                    </IntroWrapper>
                    <IntroWrapper className='row'>
                        <IntroContentLeft className='col-3'>
                            매장주소
                        </IntroContentLeft>
                        <IntroContentRight className='col-9'>
                            {props.storeData.storeAddress}
                        </IntroContentRight>
                    </IntroWrapper>
                    <IntroWrapper className='row'>
                        <IntroContentLeft className='col-3'>
                            전화번호
                        </IntroContentLeft>
                        <IntroContentRight className='col-9'>
                            {props.storeData.storePhone}
                        </IntroContentRight>
                    </IntroWrapper>
                    <hr/>
                    <KakaoMapContainer>
                        <ExplainEl className='pt-3 pb-3 mt-3 mb-3'>매장위치</ExplainEl>
                        <LineBreaker1></LineBreaker1>
                        <KakaoMapWapper>
                            <KakaoMapEl ref={props.kakaoMapRef}></KakaoMapEl>
                        </KakaoMapWapper>
                        
                    </KakaoMapContainer>
                    <ImageContainer>
                        <ExplainEl className='pt-3 pb-3 mt-3 mb-3'>대표이미지</ExplainEl>
                        <LineBreaker1></LineBreaker1>
                        <ImageWrapper>
                            <ImageBox>
                                <ImageEl src={props.storeData.storeImageUrl}></ImageEl>
                            </ImageBox>
                        </ImageWrapper>
                    </ImageContainer>
                    <hr/>
                    <ExplainEl className='pt-3 pb-3 mt-3 mb-3'>상세정보</ExplainEl>
                    <LineBreaker1></LineBreaker1>
                    <DetailContainer>
                        <div className='ck-content clearfix' dangerouslySetInnerHTML={{ __html: props.storeData.storeDesc }}>
                        </div>
                    </DetailContainer>
                    
                </IntroContainer>
            </Container>
        </>
    )
}

export default DetailComponent;