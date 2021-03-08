import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

// handler
import { dateToYYYYMMDD } from '../../../../handler/MyHandlers';
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

const BodyWrapper = styled.div`
    padding:50px 15px;
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

const TableBox = styled.div`
    font-size:16px;
    @media only screen and (max-width:768px){
        font-size:13px;
    }
`;

const TableTh = styled.th`
    vertical-align: middle!important;
`;
const TableTd = styled.td`
    vertical-align: middle!important;
`;
const ListContainer = styled.div`
    margin-bottom:15px;
`;
const ListWrapper = styled.div`
    border-top:1px solid #ee5470;
`;

const ListBox = styled.div`
    border-bottom:1px solid #f1f1f1;
    padding:8px;
    
`;

const ListLink = styled(Link)`
    color:#333;
    &:hover{
        color:#333;
    }
`;
const ListTitle = styled.div`
    font-size:18px;
    font-weight:600;
    padding:2px;
`;

const ListSubText = styled.div`
    font-size:14px;
    padding:2px;
    color:#808080;
`;
const NoticeComponent = (props) => {
    let query = queryString.parse(window.location.search);
    let browserWidth = window.innerWidth;
    return (
        <>
            <Container>
                <MainTitleBox>
                    <MainTitle>
                        CUSTOMER SERVICE
                    </MainTitle>
                    <MainTitleSub>고객센터</MainTitleSub>
                    <LineBreaker1></LineBreaker1>
                    <ExplainEl>
                        공지사항
                    </ExplainEl>
                </MainTitleBox>
                <BodyWrapper className='container'>
                    {/* {browserWidth >= 992 ?
                        <TableBox className=''>
                            <table className={`table text-center`}>
                                <thead>
                                    <tr>
                                        <th scope="col" width='50'>#</th>
                                        <th scope="col" width='500'>제목</th>
                                        <th scope="col" width='150'>작성자</th>
                                        <th scope="col" width='150'>작성날짜</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.csList.map((r, index) => {
                                        let itemIndex = props.csPage.displaySize * (props.csPage.curr - 1) + index + 1;
                                        return (
                                            <tr key={r.csId}>
                                                <TableTh scope="row">{itemIndex}</TableTh>
                                                <TableTd>{r.csTitle}</TableTd>
                                                <TableTd>{r.csAuthor}</TableTd>
                                                <TableTd>{dateToYYYYMMDD(r.csCreated)}</TableTd>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </TableBox>
                        : */}
                        <ListContainer>
                            <ListWrapper>
                                {props.csList.map((r, index) => {
                                    let itemIndex = props.csPage.displaySize * (props.csPage.curr - 1) + index + 1;
                                    if (r.csImportantChecked) {
                                        return (
                                            <ListBox key={r.csId}>
                                                <ListLink to={`/cs/detail?csId=${r.csId}`}>
                                                    <ListTitle>
                                                        <FontAwesomeIcon icon={faExclamation} className='mr-2' color={'#ee5470'}></FontAwesomeIcon>{r.csTitle}
                                                    </ListTitle>
                                                    <ListSubText>
                                                        <span>{r.csAuthor} | {dateToYYYYMMDD(r.csCreated)}</span>
                                                    </ListSubText>
                                                </ListLink>
                                            </ListBox>
                                        );
                                    } else {
                                        return (
                                            <ListBox key={r.csId}>
                                                <ListLink to={`/cs/detail?csId=${r.csId}`}>
                                                    <ListTitle>
                                                        {itemIndex}. {r.csTitle}
                                                    </ListTitle>
                                                    <ListSubText>
                                                        <span>{r.csAuthor} | {dateToYYYYMMDD(r.csCreated)}</span>
                                                    </ListSubText>
                                                </ListLink>
                                            </ListBox>
                                        );
                                    }
                                })}
                            </ListWrapper>
                        </ListContainer>
                    {/* } */}
                    <PageableComponent
                        pageData={props.csPage}
                    ></PageableComponent>
                </BodyWrapper>
            </Container>
        </>
    );
}

export default NoticeComponent;