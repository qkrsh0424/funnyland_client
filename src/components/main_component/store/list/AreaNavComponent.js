import { Link } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';

const Container = styled.div`

`;

const Wrapper = styled.div`
    border-bottom:1px solid #f1f1f1;
`;

const GridGroup = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(10%, auto));
    grid-auto-rows: minmax(auto, auto);
    @media only screen and (max-width:1200px){
        grid-template-columns:repeat(auto-fit,minmax(11%, auto));
    }
    @media only screen and (max-width:768px){
        grid-template-columns:repeat(auto-fit,minmax(25%, auto));
    }

    @media only screen and (max-width:320px){
        grid-template-columns:repeat(auto-fit,minmax(30%, auto));
    }
`;

const GridEl = styled(Link)`
    text-align:center;
    background:white;
    padding:10px 0;
    color:#333;
    font-size:15px;
    font-weight:600;
    border:1px solid #00000000;
    &:hover{
        color:#33333380;
        text-decoration:none;
    }
    @media only screen and (max-width:992px){
        font-size:13px;
    }
    @media only screen and (max-width:768px){
        font-size:11px;
    }

`;

let areaList = [
    {
        areaName:'서울특별시',
        url:`/store/list?areaName=서울특별시`
    },
    {
        areaName:'부산광역시',
        url:`/store/list?areaName=부산광역시`
    },
    {
        areaName:'대구광역시',
        url:`/store/list?areaName=대구광역시`
    },
    {
        areaName:'인천광역시',
        url:`/store/list?areaName=인천광역시`
    },
    {
        areaName:'대전광역시',
        url:`/store/list?areaName=대전광역시`
    },
    {
        areaName:'광주광역시',
        url:`/store/list?areaName=광주광역시`
    },
    {
        areaName:'울산광역시',
        url:`/store/list?areaName=울산광역시`
    },
    {
        areaName:'세종특별자치시',
        url:`/store/list?areaName=세종특별자치시`
    },
    {
        areaName:'경기도',
        url:`/store/list?areaName=경기도`
    },
    {
        areaName:'강원도',
        url:`/store/list?areaName=강원도`
    },
    {
        areaName:'충청북도',
        url:`/store/list?areaName=충청북도`
    },
    {
        areaName:'충청남도',
        url:`/store/list?areaName=충청남도`
    },
    {
        areaName:'전라북도',
        url:`/store/list?areaName=전라북도`
    },
    {
        areaName:'전라남도',
        url:`/store/list?areaName=전라남도`
    },
    {
        areaName:'경상북도',
        url:`/store/list?areaName=경상북도`
    },
    {
        areaName:'경상남도',
        url:`/store/list?areaName=경상남도`
    },
    {
        areaName:'제주특별자치도',
        url:`/store/list?areaName=제주특별자치도`
    },
    
]
const AreaNavComponent = (props) => {
    const query = queryString.parse(window.location.search);
    return (
        <>
            <Container>
                <Wrapper className='container-fluid'>
                    <GridGroup>
                        {query.areaName ? <GridEl to='/store/list'>전체매장</GridEl> : <GridEl to='/store/list' style={{ color: '#ee5470' }}>전체매장</GridEl>}
                        {areaList.map(r=>{
                            if(query.areaName && query.areaName==r.areaName){
                                return(
                                    <GridEl key={r.areaName} to={r.url} style={{ color: '#ee5470' }}>{r.areaName}</GridEl>
                                )
                            }else{
                                return(
                                    <GridEl key={r.areaName} to={r.url}>{r.areaName}</GridEl>
                                )
                            }
                        })}
                    </GridGroup>


                </Wrapper>
            </Container>
        </>
    )
}

export default AreaNavComponent;