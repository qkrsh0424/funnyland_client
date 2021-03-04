import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
const Container = styled.div`

    background-image: 
        linear-gradient(#eeeeeef0, #eeeeeef0),
        url(/images/funnyland/bg/funnyland-bg6.jpeg);
    /* background:#f1f1f1; */
    background-size:cover;
    padding:50px 0;
    /* border-top:1px dashed #ee5470; */
    
`;

const ContainerTitle = styled.div`
    /* color: white; */
    text-align:center;
    /* font-size: 40px; */
    font-size: 50px;
    font-weight:600;
    padding:15px;

    @media only screen and (max-width:768px){
        padding:0;
        /* font-size: 26px; */
        font-size: 32px;
    }
`;

const ContainerSubTitle = styled.div`
    color: white;
    text-align:center;
    font-size: 20px;
    font-weight:600;
    @media only screen and (max-width:768px){
        font-size: 15px;
    }
`;

const SliderContainer = styled.div`
    margin:15px 0;
    overflow:hidden;
    min-height:50vh;
    @media only screen and (max-width:1024px){
        min-height:30vh;
    }
    @media only screen and (max-width:768px){
        min-height:30vh;
    }
    & .slick-list{
        padding-top: 15px !important;
    }

    & .slick-dots li button:before{
        color: #333;
    }

    & .slick-slide {
        padding:15px;
    }
`;

const CardBox = styled.div`
    /* padding:15px; */
`;



const CardImg = styled.img`
    height:50%;
    width:100%;
    object-fit: cover;
`;

const ButtonEl = styled(Link)`
    font-weight:600;
    color:white;
    background-color:#f7734a;
    border:1px solid white;
    box-shadow: 0 0 11px rgba(255,255,255,.4);
    &:hover{
        border:1px solid white;
        background-color:#ee5470;
        color:white;
        box-shadow: 0 0 31px rgba(255,255,255,.4);
    }
`;

const ImageWrapper = styled.div`
    width:100%;
    height:auto;
    /* cursor:pointer; */
    border-bottom:1px solid #f1f1f1;
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

const TitleBox = styled.div`
    padding:5px;
    font-size:21px;
    font-weight:700;
    text-align:center;

    @media only screen and (max-width:768px){
        font-size:15px;
    }
`;

const DescBox = styled.div`
    padding:10px;
    font-size:17px;
    font-weight:700;
    text-align:center;

    @media only screen and (max-width:768px){
        font-size:12px;
    }
`;

const ContentBox = styled.div`
    padding:5px;
`;

const ContentIconEl = styled(Link)`
    /* font-size:21px; */
    color:#a0a0a0;
    & .icon{
        display:inline-block;
        font-size:30px;
        margin:0 5px;
    }
    & .detail{
        display:inline-block;
        margin:0 5px;
    }

    @media only screen and (max-width:768px){
        & .icon{
            font-size:20px;
        }
        & .detail{
            font-size:15px;
        }
    }
`;

const CardEl = styled.div`
    /* display: inline-block; */
    overflow:hidden;
    border-radius:15px;
    border:1px solid #a0a0a0;
    /* height: 400px; */
    background-color:#e0e0e080;
    /* box-shadow: rgb(255 255 255 / 25%) 0px 5px 15px; */
    /* box-shadow: rgb(0 0 0 / 8%) 0px 0.125rem 0.25rem; */
    box-shadow: rgb(0 0 0 / 8%) 0.3rem 0.3rem 0.3rem;
    /* @media only screen and (max-width:768px){
        height:30vh;
    } */

    .slick-center &{
        border: 3px solid #ee5470;
        transform: scale(1.05);
    }

    &:hover{
        & ${TitleBox}{
            color:#ee5470;
        }
        & ${ContentBox} .icon, & ${ContentBox} .detail{
            color:#ee5470;
        }
    }
`;


const OpenStore = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        pauseOnHover: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <Container>
            <ContainerTitle><span style={{ color: '#ee5470', fontWeight: '800' }}>OPEN</span> 매장 안내</ContainerTitle>
            {/* <ContainerSubTitle>전국 <span style={{color:'#ee5470', fontWeight:'800'}}>퍼니랜드</span> 가맹점들을 확인해 보세요</ContainerSubTitle> */}
            <SliderContainer>
                <Slider {...settings}>
                    {props.storeList.map((r, index) => {
                        if (index < 10) {
                            return (
                                <CardEl key={r.storeId}>
                                    <ImageWrapper>
                                        <ImageBox>
                                            <ImageEl src={r.storeImageUrl}></ImageEl>
                                        </ImageBox>
                                    </ImageWrapper>
                                    <TitleBox>
                                        {r.storeName}
                                    </TitleBox>
                                    <ContentBox className='clearfix'>
                                        <ContentIconEl className='float-right' to={`/store/detail?storeId=${r.storeId}`}>
                                            <span className='icon'><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon></span>
                                            <span className='align-middle detail'>상세보기</span>
                                        </ContentIconEl>
                                    </ContentBox>
                                </CardEl>
                            );
                        }

                    })}
                    {/* <CardEl>
                            <CardImg src="/images/sample/banner1.png" />
                        </CardEl>
                        <CardEl>
                            <CardImg src="/images/sample/banner1.png" />
                        </CardEl>
                        <CardEl>
                            <CardImg src="/images/sample/banner1.png" />
                        </CardEl>
                        <CardEl>
                            <CardImg src="/images/sample/banner1.png" />
                        </CardEl>
                        <CardEl>
                            <CardImg src="/images/sample/banner1.png" />
                        </CardEl>
                        <CardEl>
                            <CardImg src="/images/sample/banner1.png" />
                        </CardEl>
                        <CardEl>
                            <CardImg src="/images/sample/banner1.png" />
                        </CardEl>
                        <CardEl>
                            <CardImg src="/images/sample/banner1.png" />
                        </CardEl>
                        <CardEl>
                            <CardImg src="/images/sample/banner1.png" />
                        </CardEl>
                        <CardEl>
                            <CardImg src="/images/sample/banner1.png" />
                        </CardEl> */}
                </Slider>
            </SliderContainer>
            <div className="text-center">
                <ButtonEl type="button" className="btn" to={'/store/list'}>오픈매장안내 바로가기</ButtonEl>
            </div>
        </Container>
    );
}

export default OpenStore;