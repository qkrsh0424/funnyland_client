import styled from 'styled-components';
import queryString from 'query-string';

// components
import PageableComponent from './PageableComponent';
const Container = styled.div`
`;

const StoreContainer = styled.div`
    
`;

const StoreWrapper = styled.div`
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

const TopTitle = styled.div`
    font-size:21px;
    font-weight:600;
`;

const StoreAddBtnEl = styled.button`
    
`;

const BodyPart = styled.div`
    padding:8px;
`;

const TableBox = styled.div`
    max-height:400px;
    .fixedHeader {
        position: sticky;
        top: 0px;
    }
    table > thead > tr > th {
        /* color: #fff; */
        background-color: #e0e0e0;
        /* border-bottom: 1px solid red; */
    }
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
const StoreComponent = (props) => {
    let query = queryString.parse(window.location.search);
    return (
        <>
            <Container>
                <StoreContainer className='container-fluid'>
                    <StoreWrapper>
                        <TopPart className='clearfix'>
                            <TopTitle className='float-left'>오픈매장</TopTitle>
                            <StoreAddBtnEl type='button' className='float-right btn btn-outline-primary' onClick={() => props.handleStoreEventControl().addModalOpen()}>매장 추가</StoreAddBtnEl>
                        </TopPart>
                        <BodyPart>
                            <div className='pt-3 pb-3'>
                                <p>지역별 조회</p>
                                <div className='form-row'>
                                    <div className="col">
                                        <select className="form-control" value={query.areaName ? query.areaName : ''} onChange={(e) => props.handleStoreEventControl().conditionSearch().select(e)} required>
                                            <option value='' hidden>--지역 선택--</option>
                                            <option value='서울특별시'>서울특별시</option>
                                            <option value='부산광역시'>부산광역시</option>
                                            <option value='대구광역시'>대구광역시</option>
                                            <option value='인천광역시'>인천광역시</option>
                                            <option value='대전광역시'>대전광역시</option>
                                            <option value='광주광역시'>광주광역시</option>
                                            <option value='울산광역시'>울산광역시</option>
                                            <option value='세종특별자치시'>세종특별자치시</option>
                                            <option value='경기도'>경기도</option>
                                            <option value='강원도'>강원도</option>
                                            <option value='충청북도'>충청북도</option>
                                            <option value='충청남도'>충청남도</option>
                                            <option value='전라북도'>전라북도</option>
                                            <option value='전라남도'>전라남도</option>
                                            <option value='경상북도'>경상북도</option>
                                            <option value='경상남도'>경상남도</option>
                                            <option value='제주특별자치도'>제주특별자치도</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <button type='button' className='btn btn-outline-success' onClick={() => props.handleStoreEventControl().conditionSearch().all()}>전체조회</button>
                                    </div>
                                </div>
                            </div>
                            {props.storeList ?
                                <TableBox className='table-responsive'>
                                    <table className="table table-sm text-center" style={{ tableLayout: 'fixed' }}>
                                        <thead>
                                            <tr>
                                                <th className='fixedHeader' scope="col" width='50'>#</th>
                                                <th className='fixedHeader' scope="col" width='200'>매장명</th>
                                                <th className='fixedHeader' scope="col" width='150'>매장지역</th>
                                                <th className='fixedHeader' scope="col" width='400'>매장주소</th>
                                                <th className='fixedHeader' scope="col" width='200'>매장 전화번호</th>
                                                <th className='fixedHeader' scope="col" width='300'>매장 위치좌표(Lat,Lng)</th>
                                                <th className='fixedHeader' scope="col" width='200'>컨트롤</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.storeList.map((r, index) => {
                                                let itemIndex = props.storePage.displaySize * (props.storePage.curr - 1) + index + 1;
                                                return (
                                                    <tr key={r.storeId}>
                                                        <TableTh scope="row">{itemIndex}</TableTh>
                                                        <TableTd>{r.storeName}</TableTd>
                                                        {/* <TableTd><ImageEl src={r.product.imageUrl}></ImageEl></TableTd> */}
                                                        <TableTd>{r.storeArea}</TableTd>
                                                        <TableTd>{r.storeAddress}</TableTd>
                                                        <TableTd>{r.storePhone}</TableTd>
                                                        <TableTd style={{fontSize:'15px'}}>{r.storeLat},{r.storeLng}</TableTd>
                                                        <TableTd>
                                                            <ControlLink
                                                                href={`/store/detail?storeId=${r.storeId}`}
                                                                color_prop={'#80dd80'}
                                                                className='btn btn-sm'
                                                                target='_blank'
                                                            >바로가기</ControlLink>
                                                            <ControlBtn
                                                                type='button'
                                                                className='btn btn-sm'
                                                                color_prop={'#8080dd'}
                                                                onClick={() => props.handleStoreEventControl().fixModalOpen(r.storeId)}
                                                            >수정</ControlBtn>
                                                            <ControlBtn
                                                                type='button'
                                                                className='btn btn-sm'
                                                                color_prop={'#dd8080'}
                                                                onClick={() => props.handleStoreEventControl().deleteOne(r.storeId)}
                                                            >삭제</ControlBtn>
                                                        </TableTd>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </TableBox>
                                :
                                <></>
                            }

                        </BodyPart>
                        <PageableComponent
                            pageData={props.storePage}
                        ></PageableComponent>
                    </StoreWrapper>
                </StoreContainer>
            </Container>
        </>
    );
}

export default StoreComponent;