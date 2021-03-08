import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
`;

const NoticeContainer = styled.div`
    margin:30px 0;
`;
const NoticeWrapper = styled.div`
    padding-top:5px;
    padding-bottom:5px;
`;
const NoticeBox = styled.div`
    border-bottom:1px solid #f1f1f1;
    padding:10px 8px;
    font-size:18px;
`;

const NoticeLink = styled(Link)`
    
    color:#333;
    &:hover{
        color:#333;
    }
`;

const NoticeTitle = styled.div`
    
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;
const NoticeComponent = (props) => {
    let [csImportantList, setCsImportantList] = useState(props.csList.filter(r => r.csImportantChecked == true));
    let [csCommonList, setCsCommonList] = useState(props.csList.filter(r => r.csImportantChecked == false));
    return (
        <>
            <Container className='container-fluid'>
                <NoticeContainer className='row'>
                    <NoticeWrapper className='col-md-6'>
                        <div style={{ borderBottom: '1px solid #ee5470', padding: '5px' }}>
                            <div style={{ color: '#ee5470', fontSize:'21px' }}>Important Notice</div>
                            <div className='clearfix' style={{ fontSize: '24px', fontWeight: '600' }}>
                                중요 공지사항
                                <Link className='btn btn-outline-info float-right' to='/cs/notice'>더보기</Link>
                            </div>
                            
                        </div>
                        {csImportantList.map((r, index) => {
                            if (index < 6) {
                                return (
                                    <NoticeBox key={r.csId}>
                                        <NoticeLink to={`/cs/detail?csId=${r.csId}`}>
                                            <NoticeTitle>
                                                {r.csTitle}
                                            </NoticeTitle>
                                        </NoticeLink>
                                    </NoticeBox>
                                )
                            }
                        })}
                    </NoticeWrapper>
                    <NoticeWrapper className='col-md-6'>
                        <div style={{ borderBottom: '1px solid #ee5470', padding: '5px' }}>
                            <div style={{ color: '#ee5470', fontSize:'21px' }}>Notice</div>
                            <div className='clearfix' style={{ fontSize: '24px', fontWeight: '600' }}>
                                공지사항
                                <Link className='btn btn-outline-info float-right' to='/cs/notice'>더보기</Link>
                            </div>
                        </div>
                        {csCommonList.map((r, index) => {
                            if (index < 6) {
                                return (
                                    <NoticeBox key={r.csId}>
                                        <NoticeLink to={`/cs/detail?csId=${r.csId}`}>
                                            <NoticeTitle>
                                                {r.csTitle}
                                            </NoticeTitle>
                                        </NoticeLink>
                                    </NoticeBox>
                                )
                            }
                        })}
                    </NoticeWrapper>
                </NoticeContainer>
            </Container>
        </>
    );
}

export default NoticeComponent;