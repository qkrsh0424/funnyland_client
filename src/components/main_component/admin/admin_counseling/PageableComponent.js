import styled from 'styled-components';
import {Link} from 'react-router-dom';
const Container = styled.div`
`;
const PageableComponent = (props) =>{
    const items = [];
    for(let i = 0 ; i < props.pageData.pageSize; i++){
        items.push({
            defaultUrl:props.defaultUrl,
            pageNum:i+1
        })
    }
    return(
        <>
            <Container>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <Link className="page-link" to={`${props.defaultUrl}?pageIndex=${props.pageData.prev}`} aria-label="Previous"><span aria-hidden="true">&laquo;</span></Link>
                        </li>
                        {items.map(r=>{
                            if(r.pageNum==props.pageData.curr){
                                return(
                                    <li className="page-item active" key={`pagination-${r.pageNum}`}>
                                        <Link className="page-link" to={`${r.defaultUrl}?pageIndex=${r.pageNum}`}>{r.pageNum}</Link>
                                    </li>           
                                )
                            }else{
                                return(
                                    <li className="page-item" key={`pagination-${r.pageNum}`}>
                                        <Link className="page-link" to={`${r.defaultUrl}?pageIndex=${r.pageNum}`}>{r.pageNum}</Link>
                                    </li>           
                                )
                            }
                        })}
                        <li className="page-item">
                            <Link className="page-link" to={`${props.defaultUrl}?pageIndex=${props.pageData.next}`} aria-label="Previous"><span aria-hidden="true">&raquo;</span></Link>
                        </li>
                    </ul>
                </nav>
                
            </Container>
        </>
    );
}

export default PageableComponent;