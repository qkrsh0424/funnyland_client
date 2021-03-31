import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Container = styled.div`
    .thumbs { 
        text-align: center;
    }
    .slide .pcy-banner-image{
        max-height:900px;
        object-fit: cover;
    }
    // 이미지 크기 최적화 사이즈 1920x850
    @media only screen and (max-width: 768px){
        .slide .pcy-banner-image{
            height:45vh;
            object-fit: cover;
        }
    }
`;

const SlickContainer = styled.div`
    & .pcy-banner-image{
        width:100%;
        max-height:900px;
        object-fit: cover;
        /* transform:scale(1.02); */
    }
    
    & .slick-slider{
        line-height:0;
    }
    & .slick-dots{
        bottom:10px;
        color:white;
    }
    & .slick-dots li button:before{
        color:white;
    }
    & .slick-dots li.slick-active button:before{
        color:#ee5470;
    }

    & .slick-prev:before, .slick-next:before{
        font-size:25px;
        color:gray;
    }

    // 이미지 크기 최적화 사이즈 1920x850
    @media only screen and (max-width: 768px){
        & .pcy-banner-image{
            height:45vh;
            object-fit: cover;
        }
        & .slick-prev:before, .slick-next:before{
            font-size:20px;
        }
    }
`;

const SlickSliderWrapper = styled.div`
    overflow:hidden;
    position:relative;
    & .slick-arrow{
        z-index:1;
        
    }
    & .slick-prev{
        left:20px;
    }
    & .slick-next{
        right:20px;
    }
`;

const SlickSliderOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #008CBA00;
    overflow: hidden;
    width: 100%;
    height: 0;
    /* transition: 2s ease; */
    transition-delay: 1s;
    transition-duration: 2s;
    .slick-active &{
        height:100%;
    }
`;

const SlickSliderText = styled.div`
    /* .slick-active &{ */
        position:absolute;
        top:50%;
        left:50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform:translate(-50%,-50%);
        color:white;
    /* } */
`;
const BannerCarouselFullSize = (props) => {
    var SlickSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        pauseOnHover: false,
        fade: true
        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             arrows: false,
        //             centerMode: false,
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: false,
        //         }
        //     }
        // ]
    };

    const {
        banners
    } = props;
    return (
        <SlickContainer>
            {/* <Carousel
                autoPlay={true}
                interval={6000}
                infiniteLoop={true}
                dynamicHeight={true}
                showIndicators={true}
                showThumbs={false}
                showStatus={true}
                stopOnHover={false}
                transitionTime={2500}
            >
                {
                    banners.length>0 && banners.map((r)=>{
                        return(
                            <div key={r.id}>
                                <img className="pcy-banner-image" src={r.imageUrl} />
                            </div>        
                        )
                    })
                }
                
            </Carousel> */}
            <SlickSliderWrapper>
                <SlickSlider
                    {...SlickSliderSettings}
                >
                    {
                        banners.length > 0 && banners.map((r) => {
                            return (
                                <div key={r.id} style={{ position: 'relative' }}>
                                    <img className="pcy-banner-image" src={r.imageUrl} />
                                    {/* <SlickSliderOverlay>
                                        <img className="pcy-banner-image" src={'/images/sample/test.png'}></img>
                                    </SlickSliderOverlay> */}
                                </div>
                            )
                        })
                    }
                </SlickSlider>
            </SlickSliderWrapper>

        </SlickContainer>
    )
}

export default BannerCarouselFullSize;