import styled from 'styled-components';
import queryString from 'query-string';
// handler
import { dateToYYYYMMDD } from '../../../../handler/MyHandlers';

// Components
import PageableComponent from './PageableComponent';

const Container = styled.div`

`;

const ListContainer = styled.div`
    
`;

const ListWrapper = styled.div`
    margin:8px 0;
    padding:8px;
    border: 1px #f1f1f1 solid;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 8%) 0px 0.125rem 0.25rem;

`;

const TopPart = styled.div`
    padding:8px;
    border-bottom:1px solid #f1f1f1;
`;

const TopPartTitle = styled.div`
    font-size:21px;
    font-weight:600;
`;

const TopPartAddBtn = styled.button`
    
`;

const BodyPart = styled.div`
    padding:8px;
`;

const TableBox = styled.div`

`;

const TableTh = styled.th`
    vertical-align: middle!important;
`;
const TableTd = styled.td`
    vertical-align: middle!important;
`;

const ControlBtn = styled.button`
    margin:0 5px;
    padding:8px;
    border:1px solid #b1b1b1;
    background:none;
    color:${(props) => props.color_prop ? props.color_prop : 'black'};
    font-weight:600;
    &:hover{
        background:${(props) => props.color_prop ? props.color_prop : 'black'};
        color:white;
    }
`;

const ControlLink = styled.a`
    margin:0 5px;
    padding:8px;
    border:1px solid #b1b1b1;
    background:none;
    color:${(props) => props.color_prop ? props.color_prop : 'black'};
    font-weight:600;
    &:hover{
        background:${(props) => props.color_prop ? props.color_prop : 'black'};
        color:white;
    }
`;

const CsComponent = (props) => {
    let query = queryString.parse(window.location.search);
    return (
        <>
            <Container>
                <ListContainer className='container-fluid'>
                    <ListWrapper>
                        <TopPart className='clearfix'>
                            <TopPartTitle className='float-left'>게시물</TopPartTitle>
                            <TopPartAddBtn type='button' className='float-right btn btn-outline-primary' onClick={() => props.handleCsEventControl().addCsModalOpen()}>게시물 추가</TopPartAddBtn>
                        </TopPart>
                        <BodyPart>
                            <TableBox className='table-responsive'>
                                <table className="table table-sm text-center" style={{ tableLayout: 'fixed' }}>
                                    <thead>
                                        <tr>
                                            <th scope="col" width='50'>#</th>
                                            <th scope="col" width='200'>제목</th>
                                            <th scope="col" width='150'>게시물 타입</th>
                                            <th scope="col" width='150'>작성날짜</th>
                                            <th scope="col" width='100'>중요글설정</th>
                                            <th scope="col" width='200'>컨트롤</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.csList.map((r, index) => {
                                            let itemIndex = props.csPage.displaySize * (props.csPage.curr - 1) + index + 1;
                                            return (
                                                <tr key={r.csId}>
                                                    <TableTh scope="row">{itemIndex}</TableTh>
                                                    <TableTd>{r.csTitle}</TableTd>
                                                    <TableTd>{r.csType == 'TYPE_NOTICE' ? '공지사항' : ''}</TableTd>
                                                    <TableTd>{dateToYYYYMMDD(r.csCreated)}</TableTd>
                                                    <TableTd>
                                                        {r.csImportantChecked ? <span className='text-success'>ON</span> : <span className='text-danger'>OFF</span>}
                                                    </TableTd>
                                                    <TableTd>
                                                        <ControlLink
                                                            // href={`/product/detail?productId=${r.product.id}`}
                                                            color_prop={'#80dd80'}
                                                            className='btn btn-sm'
                                                            target='_blank'
                                                        >바로가기</ControlLink>
                                                        {/* {props.fixCsModalOpen ?
                                                            ''
                                                            : */}
                                                            <>
                                                                <ControlBtn
                                                                    type='button'
                                                                    className='btn btn-sm'
                                                                    color_prop={'#8080dd'}
                                                                    onClick={() => props.handleCsEventControl().fixCsModalOpen(r.csId)}
                                                                >수정</ControlBtn>
                                                                <ControlBtn
                                                                    type='button'
                                                                    className='btn btn-sm'
                                                                    color_prop={'#dd8080'}
                                                                    onClick={() => props.handleCsEventControl().deleteOne(r.csId)}
                                                                >삭제</ControlBtn>
                                                            </>
                                                        {/* } */}
                                                    </TableTd>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </TableBox>
                        </BodyPart>
                    </ListWrapper>
                    <PageableComponent
                        pageData={props.csPage}
                    ></PageableComponent>
                </ListContainer>
            </Container>
        </>
    );
}

export default CsComponent;