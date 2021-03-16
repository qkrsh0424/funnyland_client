import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

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
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto auto;
    grid-gap:15px;
    @media only screen and (max-width:992px){
        grid-template-columns: repeat(2,1fr);
    }
    @media only screen and (max-width:768px){
        grid-template-columns: repeat(1,1fr);
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

const ImageWrapper = styled.div`
    width:100%;
    height:auto;
    cursor:pointer;
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

const ContentBox = styled.div`
    padding:8px;
`;

const ContentTitle = styled.div`
/* padding:2px 0; */
    font-size:22px;
    font-weight:600;
    @media only screen and (max-width:768px){
        font-size:15px;
    }
`;

const ContentAddress = styled.div`
    height:80px;
    font-size:18px;
    @media only screen and (max-width:768px){
        font-size:12px;
    }
    @media only screen and (max-width:320px){
        height:100px;
        font-size:12px;
    }
`;

const ContentIconEl = styled.div`
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
const ContentWrapper = styled(Link)`
    border: 2px solid #00000000;
    border-radius:2px;
    box-shadow: rgb(0 0 0 / 25%) 0px 5px 15px;
    overflow:hidden;
    color:#333;
    transition: .5s;
    &:hover{
        /* background:#ee5470; */
        border: 2px solid #ee5470;
        text-decoration:none;
        color:#333;
        transform:scale(1.03);
        /* background: linear-gradient(
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
        animation: moveGradient 4s alternate infinite; */
        
        & ${ImageEl}{
            
            transform:scale(1.03);
        }
        & ${ContentTitle}{
            /* font-weight:800; */
            color:#ee5470
        }

        & ${ContentIconEl}{
            color:#ee5470
        }
    }

    @keyframes moveGradient {
        50% {
            background-position: 100% 50%;
        }
    }
`;
const StoreComponent = (props) => {
    let query = queryString.parse(window.location.search);

    return (
        <>
            <Container>
                <MainTitleBox>
                    <MainTitle>
                        OPEN STORE
                    </MainTitle>
                    <MainTitleSub>오픈매장안내</MainTitleSub>
                    <LineBreaker1></LineBreaker1>
                    {/* <ExplainEl>
                        {query.areaName ? query.areaName : '전체매장'}
                    </ExplainEl> */}
                </MainTitleBox>
                <ProductListWrapper className='container'>
                    {props.storeList && props.storeList.map(r => {
                        return (
                            <ContentWrapper key={r.storeId} to={`/store/detail?storeId=${r.storeId}`}>
                                <ContentBox>
                                    <ContentTitle>{r.storeName}</ContentTitle>
                                </ContentBox>
                                <ImageWrapper>
                                    <ImageBox>
                                        <ImageEl src={r.storeImageUrl}></ImageEl>
                                    </ImageBox>
                                </ImageWrapper>
                                
                                <ContentBox>
                                    <ContentAddress>{r.storeAddress}</ContentAddress>
                                </ContentBox>
                                <ContentBox>
                                    <ContentIconEl>
                                        <span className='icon'><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon></span>
                                        <span className='align-middle detail'>상세보기</span>
                                    </ContentIconEl>
                                </ContentBox>
                                    
                            </ContentWrapper>
                        );
                    })}
                </ProductListWrapper>
                <PageableComponent
                    pageData={props.storePage}
                ></PageableComponent>
            </Container>
        </>
    );
}

export default StoreComponent;