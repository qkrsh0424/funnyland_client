import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// components
import PageableComponent from './PageableComponent';

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
const LineBreaker1 = styled.div`
    width: 55px;
    height: 5px;
    margin: 30px auto 45px;
    background-color: #ee5470;
`;

const ProductListWrapper = styled.div`
    padding:50px 15px;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: auto auto;
    grid-gap:15px;
    @media only screen and (max-width:992px){
        grid-template-columns: repeat(3,1fr);
    }
    @media only screen and (max-width:768px){
        grid-template-columns: repeat(2,1fr);
    }
`;

const ProductImageBox = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-bottom:1px solid #f1f1f1;
    
`;

const ProductImageEl = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background: linear-gradient(to bottom right, #ee5470, #f8bac9); */
    
    border-radius:15px;
`;

const ProductImage = styled.img`
    width:100%;
    height:100%;
    /* border: 1px solid black; */
    /* border-radius:15px; */
    object-fit: cover;
`;

const ProductContentBox = styled.div`
    /* padding:2px 0; */
`;

const ProductContentTitle = styled.div`
/* padding:2px 0; */
    font-size:18px;
    font-weight:700;
    @media only screen and (max-width:768px){
        font-size:13px;
    }
`;

const ProductWrapper = styled(Link)`
    text-align:center;
    border: 2px solid #00000000;
    border-radius:10px;
    box-shadow: rgb(0 0 0 / 25%) 0px 5px 15px;
    overflow:hidden;
    color:#333;
    transition: .5s;
    &:hover{
        /* background:#ee5470; */
        /* border: 2px solid white; */
        text-decoration:none;
        color:white;
        transform:scale(1.03);
        background: linear-gradient(
            60deg,
            hsl(224, 85%, 66%),
            hsl(269, 85%, 66%),
            hsl(314, 85%, 66%),
            hsl(359, 85%, 66%),
            hsl(44, 85%, 66%),
            hsl(89, 85%, 66%),
            hsl(134, 85%, 66%),
            hsl(179, 85%, 66%)
        );
        background-size: 300% 300%;
        background-position: 0 50%;
        animation: moveGradient 4s alternate infinite;
        
        & ${ProductImage}{
            opacity:0.7;
        }
        & ${ProductContentTitle}{
            font-weight:800;
        }
    }

    @keyframes moveGradient {
        50% {
            background-position: 100% 50%;
        }
    }
`;
const ProductComponent = (props) => {
    return (
        <>
            <Container>
                <MainTitleBox>
                    <MainTitle>
                        PRODUCT
                        </MainTitle>
                    <MainTitleSub>제품 안내</MainTitleSub>
                    <LineBreaker1></LineBreaker1>
                    <ExplainEl>{props.selectedCategory.categoryName}</ExplainEl>
                </MainTitleBox>
                <ProductListWrapper className='container'>
                    {props.productList && props.productList.map(r => {
                        return (
                            <ProductWrapper key={r.product.id} to={`/product/detail?productId=${r.product.id}`}>
                                <ProductImageBox>
                                    <ProductImageEl>
                                        <ProductImage src={r.product.imageUrl}></ProductImage>
                                    </ProductImageEl>
                                </ProductImageBox>
                                <ProductContentBox>
                                    <ProductContentTitle>
                                        {r.product.newChecked ? <span className="badge badge-primary" style={{ marginRight: '5px' }}>NEW</span> : <></>}
                                        {r.product.hitChecked ? <span className="badge badge-danger" style={{ marginRight: '5px' }}>HIT</span> : <></>}
                                        {r.product.eventChecked ? <span className="badge badge-info" style={{ marginRight: '5px' }}>EVENT</span> : <></>}
                                    </ProductContentTitle>
                                </ProductContentBox>
                                <ProductContentBox>
                                    <ProductContentTitle>{r.product.name}</ProductContentTitle>
                                </ProductContentBox>
                            </ProductWrapper>
                        );
                    })}
                </ProductListWrapper>
                <PageableComponent
                    pageData={props.productPage}
                ></PageableComponent>
            </Container>
        </>
    );
}

export default ProductComponent;