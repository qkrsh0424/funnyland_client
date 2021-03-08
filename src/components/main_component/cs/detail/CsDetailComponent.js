import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import CkeditorModules from '../../../modules/CkeditorModules';

// handler
import { dateToYYYYMMDD } from '../../../../handler/MyHandlers';

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

const ProductDescContainer = styled.div`
    border-top:1px solid #f1f1f1;
`;

const ProductDescBox = styled.div`
    margin:20px auto;
    /* padding:10px; */
    /* border: 1px solid #f1f1f1; */
`;

const CsDetailComponent = (props) => {

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
                        {props.csData.csTitle}
                    </ExplainEl>
                </MainTitleBox>
                <ProductDescContainer className='container mt-3 mb-3'>
                    <div className='mb-3 clearfix'>
                        <div className='float-right p-3' style={{ color: '#808080', fontSize: '14px' }}>
                            {props.csData.csAuthor} | {dateToYYYYMMDD(props.csData.csCreated)}
                        </div>
                    </div>

                    <ProductDescBox>
                        <div className='ck-content clearfix' dangerouslySetInnerHTML={{ __html: props.csData.csDesc }}>
                        </div>
                    </ProductDescBox>

                </ProductDescContainer>
            </Container>

        </>
    );
}

export default CsDetailComponent;