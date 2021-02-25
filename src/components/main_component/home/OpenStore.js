import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Container = styled.div`
    /* background-image: url(/images/sample/best_bg.jpg); */
    background:#f1f1f1;
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
    min-height:60vh;
    @media only screen and (max-width:1024px){
        min-height:40vh;
    }
    @media only screen and (max-width:768px){
        min-height:45vh;
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

const CardEl = styled.div`
    display: inline-block;
    overflow:hidden;
    border-radius:15px;
    border:1px solid #a0a0a0;
    height: 400px;
    background-color:#f1f1f1;
    /* box-shadow: rgb(255 255 255 / 25%) 0px 5px 15px; */
    /* box-shadow: rgb(0 0 0 / 8%) 0px 0.125rem 0.25rem; */
    box-shadow: rgb(0 0 0 / 8%) 0.3rem 0.3rem 0.3rem;
    @media only screen and (max-width:768px){
        height:30vh;
    }

    .slick-center &{
        border: 3px solid #ee5470;
        transform: scale(1.05);
    }
`;

const CardImg = styled.img`
    height:50%;
    width:100%;
    object-fit: cover;
`;

const ButtonEl = styled.button`
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
const OpenStore = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode:true,
        pauseOnHover:false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode:false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    };
    return (
        <Container>
            <ContainerTitle><span style={{color:'#ee5470', fontWeight:'800'}}>OPEN</span> 매장 안내</ContainerTitle>
            {/* <ContainerSubTitle>전국 <span style={{color:'#ee5470', fontWeight:'800'}}>퍼니랜드</span> 가맹점들을 확인해 보세요</ContainerSubTitle> */}
            <SliderContainer>
                <Slider {...settings}>
                    {props.banners.map(r=>{
                        return(
                            <CardEl key={r.id}>
                                <CardImg src={r.imageUrl} />
                            </CardEl>
                        );
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
                <ButtonEl type="button" className="btn">오픈매장안내 바로가기</ButtonEl>
            </div>
        </Container>
    );
}

export default OpenStore;