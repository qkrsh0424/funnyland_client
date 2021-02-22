import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
                            {props.productList ?
                                <TableBox className='table-responsive'>
                                    <table className="table table-sm text-center" style={{ tableLayout: 'fixed' }}>
                                        <thead>
                                            <tr>
                                                <th scope="col" width='50'>#</th>
                                                <th scope="col" width='200'>상품명</th>
                                                <th scope="col" width='150'>이미지</th>
                                                <th scope="col" width='150'>카테고리</th>
                                                <th scope="col" width='100'>우선순위</th>
                                                <th scope="col" width='200'>컨트롤</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.productList.map((r, index) => {
                                                return (
                                                    <tr key={r.product.id}>
                                                        <TableTh scope="row">{index + 1}</TableTh>
                                                        <TableTd>{r.product.name}</TableTd>
                                                        <TableTd><ImageEl src={r.product.imageUrl}></ImageEl></TableTd>
                                                        <TableTd>{r.category.categoryName}</TableTd>
                                                        <TableTd>{r.product.priority}</TableTd>
                                                        <TableTd>
                                                            <ControlLink
                                                                href={'/'}
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
                                                                    onClick={()=>props.handleProductControl().deleteOne(r.product.id)}
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
            </Container>
        </>
    );
}

export default ProductComponent;