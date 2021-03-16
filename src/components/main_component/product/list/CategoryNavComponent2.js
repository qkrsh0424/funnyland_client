import { Link } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';
import { useEffect, useRef, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
const Container = styled.div`

`;

const Wrapper = styled.div`
    border-bottom:1px solid #f1f1f1;
    /* background:#f8bac9; */
`;

const GridGroup = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(13%, auto));
    grid-auto-rows: minmax(auto, auto);
    @media only screen and (max-width:1200px){
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
    font-size:20px;
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

const ListGroupWrapper = styled.div`
    position:relative;
    border-bottom:1px solid #f1f1f1;
`;

const ListGroupBox = styled.div`
    width:100%;
    white-space: nowrap;
`;

const ListGroupEl = styled(Link)`
    display:inline-block;
    text-align:center;
    background:white;
    padding:25px;
    color:#333;
    font-size:20px;
    font-weight:600;
    border:1px solid #00000000;
    &:hover{
        color:#33333380;
        text-decoration:none;
    }
    @media only screen and (max-width:992px){
        padding:20px;
        font-size:18px;
    }
    @media only screen and (max-width:768px){
        padding:20px 10px;
        font-size:15px;
    }
`;
const numbers = new Array(50).fill(1).map((_, index) => index + 1);
const CategoryNavComponent2 = (props) => {
    const query = queryString.parse(window.location.search);
    const [scrollVal, setScrollVal] = useState(0);
    const [startScrollVal, setStartScrollVal] = useState(0);
    const [endScrollVal, setEndScrollVal] = useState(0);
    let scrollRef = useRef();
    return (
        <>
            <Container>
                {/* <Wrapper className='container-fluid'>
                    {props.categoryList && props.selectedCategory ?
                        <GridGroup>
                            {props.selectedCategory.id == 0 && !query.newChecked && !query.hitChecked && !query.eventChecked ? <GridEl to='/product/list' style={{ color: '#ee5470' }}>전체상품</GridEl> : <GridEl to='/product/list'>전체상품</GridEl>}
                            {query.newChecked && query.newChecked == 'true' ? <GridEl to='/product/list?newChecked=true' style={{ color: '#ee5470' }}>신상품</GridEl> : <GridEl to='/product/list?newChecked=true'>신상품</GridEl>}
                            {query.hitChecked && query.hitChecked == 'true' ? <GridEl to='/product/list?hitChecked=true' style={{ color: '#ee5470' }}>히트상품</GridEl> : <GridEl to='/product/list?hitChecked=true'>히트상품</GridEl>}
                            {query.eventChecked && query.eventChecked == 'true' ? <GridEl to='/product/list?eventChecked=true' style={{ color: '#ee5470' }}>이벤트 렌탈</GridEl> : <GridEl to='/product/list?eventChecked=true'>이벤트 렌탈</GridEl>}

                            {props.categoryList.map(r => {
                                if (r.id == props.selectedCategory.id) {
                                    return (
                                        <GridEl key={r.id} to={`/product/list?categoryId=${r.id}`} style={{ color: '#ee5470' }}>{r.categoryName}</GridEl>
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


                </Wrapper> */}
                <div style={{padding: '0 20px', textAlign:'center' }}>
                    <ListGroupWrapper className="container-fluid">

                        <ScrollContainer
                            onStartScroll={(e) => setStartScrollVal(e)}
                            onEndScroll={(e) => setEndScrollVal(e)}
                            onScroll={(e) => setScrollVal(e)}
                            innerRef={scrollRef}
                        >
                            <ListGroupBox>
                                {props.selectedCategory.id == 0 && !query.newChecked && !query.hitChecked && !query.eventChecked ? <ListGroupEl to='/product/list' style={{ color: '#ee5470' }}>전체상품</ListGroupEl> : <ListGroupEl to='/product/list'>전체상품</ListGroupEl>}
                                {query.newChecked && query.newChecked == 'true' ? <ListGroupEl to='/product/list?newChecked=true' style={{ color: '#ee5470' }}>신상품</ListGroupEl> : <ListGroupEl to='/product/list?newChecked=true'>신상품</ListGroupEl>}
                                {query.hitChecked && query.hitChecked == 'true' ? <ListGroupEl to='/product/list?hitChecked=true' style={{ color: '#ee5470' }}>히트상품</ListGroupEl> : <ListGroupEl to='/product/list?hitChecked=true'>히트상품</ListGroupEl>}
                                {query.eventChecked && query.eventChecked == 'true' ? <ListGroupEl to='/product/list?eventChecked=true' style={{ color: '#ee5470' }}>이벤트 렌탈</ListGroupEl> : <ListGroupEl to='/product/list?eventChecked=true'>이벤트 렌탈</ListGroupEl>}
                                {props.categoryList.map(r => {
                                    if (r.id == props.selectedCategory.id) {
                                        return (
                                            <ListGroupEl key={r.id} to={`/product/list?categoryId=${r.id}`} style={{ color: '#ee5470' }}>{r.categoryName}</ListGroupEl>
                                        );
                                    }
                                    return (
                                        <ListGroupEl key={r.id} to={`/product/list?categoryId=${r.id}`}>{r.categoryName}</ListGroupEl>
                                    );
                                })}
                            </ListGroupBox>

                        </ScrollContainer>
                    </ListGroupWrapper>
                </div>

            </Container>
        </>
    )
}

export default CategoryNavComponent2;