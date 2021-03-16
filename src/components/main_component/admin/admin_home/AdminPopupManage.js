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
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-bottom:1px solid #f1f1f1;
    
`;

const ImageEl = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background: linear-gradient(to bottom right, #ee5470, #f8bac9); */
    
    border-radius:15px;
`;

const Image = styled.img`
    width:100%;
    height:100%;
    /* border: 1px solid black; */
    /* border-radius:15px; */
    object-fit: cover;
`;

const TableTh = styled.th`
    vertical-align: middle!important;
`;
const TableTd = styled.td`
    vertical-align: middle!important;
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
                        <div className='table-responsive text-center'>
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
                                                <ImageBox>
                                                    <ImageEl>
                                                        <Image src={r.popupImageUrl}></Image>
                                                    </ImageEl>
                                                </ImageBox>
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