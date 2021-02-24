import styled from 'styled-components';
import {Link} from 'react-router-dom';
import queryString from 'query-string';

const Container = styled.div`
`;

/**
 * 
 * @param url * url은 default url 로 window.location.pathname으로 얻는다
 * @param params * params는 {pageIndex, categoryId, searchName으로 구성된다}
 * @example getQueryStringUrl('/foo', {pageIndex:1, categoryId:1, searchName:'bar'})
 * => '/foo?pageIndex=1&categoryId=1&searchName=bar'
 */
const getQueryStringUrl = (url, params) =>{
    let query = queryString.parse(window.location.search);
    if(params.pageIndex){
        query.pageIndex = params.pageIndex;
    }
    if(params.categoryId){
        query.categoryId=params.categoryId;
    }
    if(params.searchName){
        query.searchName=params.searchName;
    }
    return queryString.stringifyUrl({url:url,query});
}

const defaultUrl = window.location.pathname;

const ProductPageableComponent = (props) =>{
    const items = [];
    for(let i = 0 ; i < props.pageData.pageSize; i++){
        items.push({
            defaultUrl:defaultUrl,
            pageNum:i+1
        })
    }
    return(
        <>
            <Container>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <Link className="page-link" to={`${getQueryStringUrl(defaultUrl,{pageIndex:props.pageData.prev})}`} aria-label="Previous"><span aria-hidden="true">&laquo;</span></Link>
                        </li>
                        {items.map(r=>{
                            if(r.pageNum==props.pageData.curr){
                                return(
                                    <li className="page-item active" key={`pagination-${r.pageNum}`}>
                                        <Link className="page-link" to={`${getQueryStringUrl(defaultUrl,{pageIndex:r.pageNum})}`}>{r.pageNum}</Link>
                                    </li>           
                                )
                            }else{
                                return(
                                    <li className="page-item" key={`pagination-${r.pageNum}`}>
                                        <Link className="page-link" to={`${getQueryStringUrl(defaultUrl,{pageIndex:r.pageNum})}`}>{r.pageNum}</Link>
                                    </li>           
                                )
                            }
                        })}
                        <li className="page-item">
                            <Link className="page-link" to={`${getQueryStringUrl(defaultUrl,{pageIndex:props.pageData.next})}`} aria-label="Previous"><span aria-hidden="true">&raquo;</span></Link>
                        </li>
                    </ul>
                </nav>
                
            </Container>
        </>
    );
}

export default ProductPageableComponent;