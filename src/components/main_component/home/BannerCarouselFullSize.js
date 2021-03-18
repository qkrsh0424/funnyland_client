import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
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

const BannerCarouselFullSize = (props) => {
    const {
        banners
    } = props;
    return (
        <Container>
            <Carousel
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
                
            </Carousel>
        </Container>
    )
}

export default BannerCarouselFullSize;