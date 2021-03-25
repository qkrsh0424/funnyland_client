import styled from 'styled-components';
const Container = styled.div`
    width:80%;
    margin: 0 10%;
    padding:40px 0;
`;

const Wrapper = styled.div`
    border:1px solid #f1f1f1;
    border-radius:10px;
    padding:8px;

`;

const TopWrapper = styled.div`
    border-bottom:1px solid #f1f1f1;
    padding:8px;
`;

const BodyWrapper = styled.div`
    padding:8px;
`;

const ImageBox = styled.div`
    /* position: relative;
    width: 100%;
    padding-top: 100%;
    border-bottom:1px solid #f1f1f1; */
    width:100%;
    height:auto;
    border:1px solid #f1f1f1;
    cursor:pointer;
    
`;

const ImageEl = styled.div`
    /* position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius:15px; */
    position: relative;
    padding-bottom: 100%;
`;

const Image = styled.img`
    /* width:100%;
    height:100%;
    object-fit: cover; */
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: .5s;
`;

const TableTh = styled.th`
    vertical-align: middle!important;
`;
const TableTd = styled.td`
    vertical-align: middle!important;
`;

const PopupImageRightWrapper = styled.div`
    width:100%;
    height:auto;
    border:1px solid #f1f1f1;
    cursor:pointer;
`;

const PopupImageRightBox = styled.div`
    position: relative;
    padding-bottom: 100%;
`;
const PopupImageRightEl = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: .5s;
`;

const AdminPopupManage = (props) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <TopWrapper className='clearfix'>
                        <button type='button' className='btn btn-outline-primary float-right' onClick={() => props.handlePopupEventControl().addPopupModalOpen()}>팝업 추가</button>
                        <h4>팝업 리스트</h4>
                    </TopWrapper>
                    <BodyWrapper>
                        <div className='table-responsive'>
                            <table className="table" style={{ tableLayout: 'fixed' }}>
                                <thead>
                                    <tr>
                                        <TableTh scope="col" width='50'>#</TableTh>
                                        <TableTh scope="col" width='150'>팝업 이름</TableTh>
                                        <TableTh scope="col" width='100'>팝업 이미지</TableTh>
                                        <TableTh scope="col" width='150'>팝업 URL</TableTh>
                                        <TableTh scope="col" width='150'>컨트롤</TableTh>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.popupList && props.popupList.map((r, index) => {
                                        return (
                                            <tr key={r.popupId}>
                                                <TableTh scope="row">{index + 1}</TableTh>
                                                <TableTd>{r.popupName}</TableTd>
                                                <TableTd>
                                                    {r.popupType && r.popupType == 'TYPE_LEFT' ?
                                                        <ImageBox>
                                                            <ImageEl>
                                                                <Image src={r.popupImageUrl}></Image>
                                                            </ImageEl>
                                                        </ImageBox>
                                                        :
                                                        <PopupImageRightWrapper>
                                                            <PopupImageRightBox>
                                                                <PopupImageRightEl src={r.popupImageUrl}></PopupImageRightEl>
                                                            </PopupImageRightBox>
                                                        </PopupImageRightWrapper>
                                                    }

                                                </TableTd>
                                                <TableTd>{r.popupUrl}</TableTd>
                                                <TableTd><button type='button' className='btn btn-outline-danger' onClick={() => props.handlePopupEventControl().deletePopup(r.popupId)}>삭제</button></TableTd>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                        
                    </BodyWrapper>
                </Wrapper>
            </Container>
        </>
    );
}

export default AdminPopupManage;