import styled from 'styled-components';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

// components
import ProductPageableComponent from './ProductPageableComponent';

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

const TopPartAddProduct = styled.button`
    
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
const ImageEl = styled.img`
    width:80px;
    height:80px;
    object-fit:cover;
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
const ProductComponent = (props) => {
    // console.log(queryString.parse(window.location.search).categoryId?queryString.parse(window.location.search).categoryId:'')
    const query = queryString.parse(window.location.search);
    return (
        <>
            <Container>
                <ListContainer className='container-fluid'>
                    <ListWrapper>
                        <TopPart className='clearfix'>
                            <TopPartTitle className='float-left'>상품 목록</TopPartTitle>
                            <TopPartAddProduct type='button' className='float-right btn btn-outline-primary' onClick={() => props.handleAddProductModalControl().open()}>상품 추가</TopPartAddProduct>
                        </TopPart>

                        <BodyPart>
                            <div className='pt-3 pb-3'>
                                <p>카테고리별 조회</p>
                                <div className='form-row'>
                                    <div className="col">
                                        <select className="form-control" name='categoryId' value={query.categoryId ? query.categoryId : ''} onChange={(e) => props.handleProductControl().categoryOnChange(e)} required>
                                            <option value='' hidden>--카테고리 선택--</option>
                                            {props.categoryList ? props.categoryList.data.map(r => {
                                                return (
                                                    <option value={r.id} key={r.id}>{r.categoryName}</option>
                                                );
                                            })
                                                :
                                                <></>
                                            }
                                        </select>
                                    </div>
                                    <div className="col">
                                        <button type='button' className='btn btn-outline-success' onClick={() => props.handleProductControl().searchAll()}>전체조회</button>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name='newChecked' checked={query.newChecked && query.newChecked=='true' ? true : false} onChange={(e)=>props.handleProductControl().newCheckedOnChange(e)}/>
                                        <label className="form-check-label">신상품</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name='hitChecked' checked={query.hitChecked && query.hitChecked=='true' ? true : false} onChange={(e)=>props.handleProductControl().hitCheckedOnChange(e)}/>
                                        <label className="form-check-label">히트상품</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" name='eventChecked' checked={query.eventChecked && query.eventChecked=='true' ? true : false} onChange={(e)=>props.handleProductControl().eventCheckedOnChange(e)}/>
                                        <label className="form-check-label">이벤트렌탈</label>
                                    </div>
                                </div>
                            </div>
                            {props.productList ?
                                <TableBox className='table-responsive'>
                                    <table className="table table-sm text-center" style={{ tableLayout: 'fixed' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col" width='50'>#</th>
                                                <th scope="col" width='200'>상품명</th>
                                                <th scope="col" width='150'>이미지</th>
                                                <th scope="col" width='150'>카테고리</th>
                                                <th scope="col" width='100'>이벤트 뱃지</th>
                                                <th scope="col" width='200'>컨트롤</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.productList.map((r, index) => {
                                                let itemIndex = props.productPage.displaySize * (props.productPage.curr - 1) + index + 1;
                                                return (
                                                    <tr key={r.product.id}>
                                                        <TableTh scope="row">{itemIndex}</TableTh>
                                                        <TableTd>{r.product.name}</TableTd>
                                                        <TableTd><ImageEl src={r.product.imageUrl}></ImageEl></TableTd>
                                                        <TableTd>{r.category.categoryName}</TableTd>
                                                        <TableTd>
                                                            {r.product.newChecked ? <span className="badge badge-primary" style={{ marginRight: '5px' }}>NEW</span> : <></>}
                                                            {r.product.hitChecked ? <span className="badge badge-danger" style={{ marginRight: '5px' }}>HIT</span> : <></>}
                                                            {r.product.eventChecked ? <span className="badge badge-info" style={{ marginRight: '5px' }}>EVENT</span> : <></>}
                                                        </TableTd>
                                                        <TableTd>
                                                            <ControlLink
                                                                href={`/product/detail?productId=${r.product.id}`}
                                                                color_prop={'#80dd80'}
                                                                className='btn btn-sm'
                                                                target='_blank'
                                                            >바로가기</ControlLink>
                                                            {props.updateProductModalOpen ?
                                                                // <ControlBtn
                                                                //     type='button'
                                                                //     className='btn btn-sm'
                                                                //     color_prop={'#8080dd'}
                                                                //     disabled
                                                                // >수정</ControlBtn>
                                                                ''
                                                                :
                                                                <ControlBtn
                                                                    type='button'
                                                                    className='btn btn-sm'
                                                                    color_prop={'#8080dd'}
                                                                    onClick={() => props.handleUpdateProductModalControl().open(r.product.id)}
                                                                >수정</ControlBtn>
                                                            }

                                                            {props.updateProductModalOpen ?
                                                                // <ControlBtn
                                                                //     type='button'
                                                                //     className='btn btn-sm'
                                                                //     color_prop={'#8080dd'}
                                                                //     disabled
                                                                // >수정</ControlBtn>
                                                                ''
                                                                :
                                                                <ControlBtn
                                                                    type='button'
                                                                    className='btn btn-sm'
                                                                    color_prop={'#dd8080'}
                                                                    onClick={() => props.handleProductControl().deleteOne(r.product.id)}
                                                                >삭제</ControlBtn>
                                                            }

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
                    </ListWrapper>
                </ListContainer>
                {props.productPage &&
                    <ProductPageableComponent
                        pageData={props.productPage}
                    ></ProductPageableComponent>
                }

            </Container>
        </>
    );
}

export default ProductComponent;