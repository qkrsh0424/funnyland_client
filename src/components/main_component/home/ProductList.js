import { useEffect, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
    /* overflow:hidden; */
    /* margin:8px; */
    background-image: 
        linear-gradient(#202020f0, #202020f0),
        url(/images/funnyland/bg/funnyland-bg5.jpeg);
    background-size:cover;
    /* background: 
        white; */
        /* linear-gradient(336deg, #a0a0a0, #101010a0 70.71%); */
        /* linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%); */
        /* linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), */
        /* linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%); */
    padding:40px 0;
`;

const ProductListContainer = styled.div`
    padding:20px 0;
`;

const ProductListTitle = styled.div`
    color: white;
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

const ProductBox = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;
`;

const ProductImage = styled.img`
    width:100%;
    height:100%;
    border: 1px solid black;
    border-radius:15px;
    object-fit: cover;
`;

const ProductDescBox = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    width:100%;
    padding:0 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
`;

const ProductDescTitle = styled.div`
    color:#f1f1f1;
    /* text-shadow: -1px 0 #666, 0 1px #666, 1px 0 #666, 0 -1px #666;
    -moz-text-shadow: -1px 0 #666, 0 1px #666, 1px 0 #666, 0 -1px #666;
    -webkit-text-shadow: -1px 0 #666, 0 1px #666, 1px 0 #666, 0 -1px #666; */
    font-size:15px;
    font-weight:700;
    @media only screen and (max-width:768px){
        font-size: 11px;
    }
`;
const ProductUrlBtn = styled(Link)`
    transition: transform .5s;
    margin:8px;
    /* border:2px solid white;
    color:white; */
    border:2px solid white;
    background-color:white;
    color:#ee5470;
    font-weight:600;
    border-radius:10px;

    &:hover{
        font-weight:600;
        transform:scale(1.1);
        /* color:white;
        background-color:#ee5470; */
        color:#ee5470;
        background-color:white;
    }
    @media only screen and (max-width:768px){
        font-size: 11px;
    }
`;

const ProductEl = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background: linear-gradient(to bottom right, #ee5470, #f8bac9); */
    box-shadow: rgb(255 255 255 / 25%) 0px 5px 15px;
    /* box-shadow: rgb(0 0 0 / 25%) 0px 5px 15px; */
    border-radius:15px;
    transition: .5s;
    &:hover {
        background:#ee5470;
        transform:scale(1.1);
        border: 1px solid white;
        ${ProductImage}{
            transition: opacity 1s;
            /* border: 1px solid #ee5470; */
            border: 1px solid white;
            opacity:0.1;
        }
        ${ProductDescBox}{
            opacity:1;
        }
    }
`;

const ProductWrapper = styled.div`
    text-align:center;
    padding-top:8px;
    padding-bottom:8px;
`;

const ButtonEl = styled(Link)`
    font-weight:600;
    color:white;
    background-color:#f7734a;
    border:1px solid white;
    box-shadow: 0 0 11px rgba(33,33,33,.4);
    &:hover{
        border:1px solid white;
        background-color:#ee5470;
        color:white;
        box-shadow: 0 0 31px rgba(33,33,33,.4);
    }
`;
const ProductList = (props) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            image: '/images/funnyland/product/cart_product.png',
            title: '마리오카트2 DX'
        },
        {
            id: 2,
            image: '/images/funnyland/product/initialDZORO.png',
            title: '이니셜D ZORO'
        },
        {
            id: 3,
            image: '/images/funnyland/product/overtakeDX.png',
            title: '오버테이크 DX'
        },
        {
            id: 4,
            image: '/images/funnyland/product/prod1.png',
            title: '게임기 이름 게임기 이름'
        },
        {
            id: 5,
            image: '/images/funnyland/product/prod2.png',
            title: '게임기 이름 게임기 이름'
        },
        {
            id: 6,
            image: '/images/funnyland/product/prod3.png',
            title: '게임기 이름 게임기 이름'
        },
        {
            id: 7,
            image: '/images/funnyland/product/prod4.png',
            title: '게임기 이름 게임기 이름'
        },
        {
            id: 8,
            image: '/images/funnyland/product/prod5.png',
            title: '게임기 이름 게임기 이름'
        },
        {
            id: 9,
            image: '/images/funnyland/product/prod6.png',
            title: '게임기 이름 게임기 이름'
        },
        {
            id: 10,
            image: '/images/funnyland/product/prod7.png',
            title: '게임기 이름 게임기 이름'
        },
        {
            id: 11,
            image: '/images/funnyland/product/prod8.png',
            title: '게임기 이름 게임기 이름'
        },
        {
            id: 12,
            image: '/images/funnyland/product/prod9.png',
            title: '게임기 이름 게임기 이름'
        },
        {
            id: 13,
            image: '/images/funnyland/product/initialDZORO.png',
            title: '게임기 이름 게임기 이름'
        },

    ]);
    return (
        <Container>
            <ProductListTitle><span style={{ borderLeft: '5px solid #ee5470', paddingLeft: '20px' }}>제품 안내</span></ProductListTitle>
            <ContainerSubTitle>퍼니랜드x게임토피아가 공급하는 훌륭한 제품들을</ContainerSubTitle>
            <ContainerSubTitle>지금 바로 확인해보세요</ContainerSubTitle>
            <div style={{ padding: '15px' }}>
                {/* <ProductListContainer className='row'>
                    {products && products.map((product,index) => {
                        if(index<12){
                            return (
                                <ProductWrapper className='col-6 col-sm-4 col-lg-2' key={product.id}>
                                    <ProductBox>
                                        <ProductEl>
                                            <ProductImage src={product.image} />
                                            <ProductDescBox>
                                                <ProductDescTitle>{product.title}</ProductDescTitle>
                                                <div>
                                                    <ProductUrlBtn className="btn btn-sm">자세히</ProductUrlBtn>
                                                </div>
                                            </ProductDescBox>
                                        </ProductEl>
                                    </ProductBox>
                                </ProductWrapper>
                            )
                        }
                        
                    })}
                </ProductListContainer> */}
                <div>
                    <ProductListContainer className='row'>
                        <h3 className='col-12 text-center'>
                            <p style={{ color: 'white', fontSize: '18px' }}><span style={{ color: '#ee5470' }}>NEW</span> PRODUCT</p>
                            <p style={{ color: 'white',fontWeight:'800'}}>퍼니랜드 신상품</p>
                        </h3>
                        {props.productNewList && props.productNewList.map((r, index) => {
                            if (index < 6) {
                                return (
                                    <ProductWrapper className='col-6 col-sm-4 col-lg-2' key={r.product.id}>
                                        <ProductBox>
                                            <ProductEl>
                                                <ProductImage src={r.product.imageUrl} />
                                                <ProductDescBox>
                                                    <ProductDescTitle>{r.product.name}</ProductDescTitle>
                                                    <div>
                                                        <ProductUrlBtn className="btn btn-sm" to={`/product/detail?productId=${r.product.id}`}>자세히</ProductUrlBtn>
                                                    </div>
                                                </ProductDescBox>
                                            </ProductEl>
                                        </ProductBox>
                                    </ProductWrapper>
                                )
                            }

                        })}
                    </ProductListContainer>
                </div>
                <div>
                    <ProductListContainer className='row'>
                        <h3 className='col-12 text-center'>
                            <p style={{ color: 'white', fontSize: '18px' }}><span style={{ color: '#ee5470' }}>HIT</span> PRODUCT</p>
                            <p style={{ color: 'white',fontWeight:'800'}}>퍼니랜드 히트상품</p>
                        </h3>
                        {props.productHitList && props.productHitList.map((r, index) => {
                            if (index < 6) {
                                return (
                                    <ProductWrapper className='col-6 col-sm-4 col-lg-2' key={r.product.id}>
                                        <ProductBox>
                                            <ProductEl>
                                                <ProductImage src={r.product.imageUrl} />
                                                <ProductDescBox>
                                                    <ProductDescTitle>{r.product.name}</ProductDescTitle>
                                                    <div>
                                                        <ProductUrlBtn className="btn btn-sm" to={`/product/detail?productId=${r.product.id}`}>자세히</ProductUrlBtn>
                                                    </div>
                                                </ProductDescBox>
                                            </ProductEl>
                                        </ProductBox>
                                    </ProductWrapper>
                                )
                            }

                        })}
                    </ProductListContainer>
                </div>
                <div>
                    <ProductListContainer className='row'>
                        <h3 className='col-12 text-center'>
                            <p style={{ color: 'white', fontSize: '18px' }}><span style={{ color: '#ee5470' }}>EVENT</span> PRODUCT</p>
                            <p style={{ color: 'white',fontWeight:'800'}}>퍼니랜드 이벤트렌탈</p>
                        </h3>
                        {props.productEventList && props.productEventList.map((r, index) => {
                            if (index < 6) {
                                return (
                                    <ProductWrapper className='col-6 col-sm-4 col-lg-2' key={r.product.id}>
                                        <ProductBox>
                                            <ProductEl>
                                                <ProductImage src={r.product.imageUrl} />
                                                <ProductDescBox>
                                                    <ProductDescTitle>{r.product.name}</ProductDescTitle>
                                                    <div>
                                                        <ProductUrlBtn className="btn btn-sm" to={`/product/detail?productId=${r.product.id}`}>자세히</ProductUrlBtn>
                                                    </div>
                                                </ProductDescBox>
                                            </ProductEl>
                                        </ProductBox>
                                    </ProductWrapper>
                                )
                            }

                        })}
                    </ProductListContainer>
                </div>
                <div className="text-center">
                    <ButtonEl className="btn" to={'/product/list'}>제품 더보기</ButtonEl>
                </div>
            </div>
        </Container>
    );
}

export default ProductList;