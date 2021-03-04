import styled from 'styled-components';

const Container = styled.div`
    width:80%;
    margin: 0 10%;
    padding:40px 0;
`;

const VideoWrapper = styled.div`
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
const AdminVideoManage = (props) => {
    return (
        <>
            <Container>
                <VideoWrapper>
                    <TopWrapper className='clearfix'>
                        <button type='button' className='btn btn-outline-primary float-right' onClick={() => props.handleVideoEventControl().addVideoModalOpen()}>동영상 추가</button>
                        <h4>동영상 리스트</h4>
                    </TopWrapper>
                    <BodyWrapper>
                        <div className='table-responsive text-center'>
                            <table className="table" style={{ tableLayout: 'fixed' }}>
                                <thead>
                                    <tr>
                                        <th scope="col" width='50'>#</th>
                                        <th scope="col" width='150'>동영상 이름</th>
                                        <th scope="col" width='150'>유튜브 키</th>
                                        <th scope="col" width='150'>전시상태</th>
                                        <th scope="col" width='150'>컨트롤</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.videoList && props.videoList.map((r, index) => {
                                        return (
                                            <tr key={r.videoId}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{r.videoName}</td>
                                                <td>{r.videoKey}</td>
                                                <td>
                                                    {r.videoDisplay == 1 ?
                                                        <>
                                                            <button type='button' className='btn btn-outline-info' onClick={() => props.handleVideoEventControl().setVideoDisplay().hide(r.videoId)}>ON</button>
                                                        </>
                                                        :
                                                        <>
                                                            <button type='button' className='btn btn-outline-warning' onClick={() => props.handleVideoEventControl().setVideoDisplay().view(r.videoId)}>OFF</button>
                                                        </>
                                                    }
                                                </td>
                                                <td><button type='button' className='btn btn-outline-danger' onClick={() => props.handleVideoEventControl().deleteVideo(r.videoId)}>삭제</button></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                    </BodyWrapper>
                </VideoWrapper>
            </Container>
        </>
    );
}

export default AdminVideoManage;