import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faHammer} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`

`;

const CategoryListContainer = styled.div`
    
`;

const CategoryListWrapper = styled.div`
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

const CategoryListTitle = styled.div`
    font-size:21px;
    font-weight:600;
`;

const CategoryAddBtnEl = styled.button`
    
`;

const BodyPart = styled.div`
    padding:8px;
`;

const ItemEl = styled.span`
    display: inline-block;
    padding: 8px;
    border: 1px #f1f1f1 solid;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 8%) 0px 0.125rem 0.25rem;
    margin: 5px;
`;

const ItemDeleteBtn = styled.button`
    background: none;
    border: none;
`;
const AreaComponent = (props) => {
    return (
        <>
            <Container>
                <CategoryListContainer className='container-fluid'>
                    <CategoryListWrapper>
                        <TopPart className='clearfix'>
                            <CategoryListTitle className='float-left'>오픈매장지역</CategoryListTitle>
                            <CategoryAddBtnEl type='button' className='float-right btn btn-outline-primary' onClick={()=>props.handleAreaEventControl().addModalOpen()}>지역 추가</CategoryAddBtnEl>
                        </TopPart>
                        <BodyPart>
                            {props.areaList ?
                                props.areaList.map(r => {
                                    return (
                                        <ItemEl key={r.areaId}>
                                            {r.areaName}
                                            <ItemDeleteBtn type='button' onClick={()=>props.handleAreaEventControl().fixModalOpen(r.areaId)}><FontAwesomeIcon icon={faHammer}></FontAwesomeIcon></ItemDeleteBtn>
                                            <ItemDeleteBtn type='button' onClick={()=>props.handleAreaEventControl().delete(r.areaId)}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></ItemDeleteBtn>
                                        </ItemEl>
                                    );

                                })
                                :
                                <></>
                            }
                        </BodyPart>
                    </CategoryListWrapper>
                </CategoryListContainer>
            </Container>
        </>
    );
}

export default AreaComponent;