import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`

`;

const Wrapper = styled.div`
    border-bottom:1px solid #f1f1f1;
`;

const GridGroup = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(10%, auto));
    grid-auto-rows: minmax(auto, auto);
    @media only screen and (max-width:992px){
        grid-template-columns:repeat(auto-fit,minmax(20%, auto));
    }
    @media only screen and (max-width:768px){
        grid-template-columns:repeat(auto-fit,minmax(30%, auto));
    }
`;

const GridEl = styled(Link)`
    text-align:center;
    background:white;
    padding:20px 0;
    color:#333;
    font-size:24px;
    font-weight:600;
    border:1px solid #00000000;
    &:hover{
        color:#33333380;
        text-decoration:none;
    }
    @media only screen and (max-width:992px){
        font-size:18px;
    }
    @media only screen and (max-width:768px){
        font-size:15px;
    }

`;
const CategoryNavComponent = (props) => {
    return (
        <>
            <Container>
                <Wrapper className='container-fluid'>
                    {props.categoryList && props.selectedCategory ?
                        <GridGroup>
                            {props.selectedCategory.id==0 ? <GridEl to='/product/list' style={{color:'#ee5470'}}>전체상품</GridEl> : <GridEl to='/product/list'>전체상품</GridEl>}
                            
                            {props.categoryList.map(r => {
                                if(r.id == props.selectedCategory.id){
                                    return(
                                        <GridEl key={r.id} to={`/product/list?categoryId=${r.id}`} style={{color:'#ee5470'}}>{r.categoryName}</GridEl>
                                    );    
                                }
                                return (
                                    <GridEl key={r.id} to={`/product/list?categoryId=${r.id}`}>{r.categoryName}</GridEl>
                                );
                            })}
                        </GridGroup>
                        :
                        <></>
                    }


                </Wrapper>
            </Container>
        </>
    )
}

export default CategoryNavComponent;