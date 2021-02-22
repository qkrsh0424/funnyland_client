import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTimes,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
const Container = styled.div`

    width:80%;
    margin: 0 10%;
    padding:40px 0;
`;

const ImageButton = styled.button`
    background:white;
    padding:20px;
    border:1px solid #333;
    border-radius:15px;
    white-space:normal;
    &:hover{
        background:#80808030;
    }
`;

const ImageListWrapper = styled.div`
    margin:15px 0;
    height:220px;
    padding:10px;
    border:1px solid #f1f1f1;
    overflow-x:scroll;
    white-space: nowrap;
`;


const ImageEl = styled.img`
    width:384px;
    height:170px;
    margin:0 5px;
    object-fit:cover;
`;

const ImageDeleteBtn = styled.button`
    display:none;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:none;
    border-radius:50%;
    border:1px solid black;
    width:60px;
    height:60px;
`;

const ImageLeftBtn = styled.button`
    display:none;
    position:absolute;
    top:50%;
    left:10%;
    transform:translate(-50%,-50%);
    background:none;
    border-radius:50%;
    border:1px solid black;
    width:50px;
    height:50px;
    &:hover{
        background:#80808030;
    }
`;

const ImageRightBtn = styled.button`
    display:none;
    position:absolute;
    top:50%;
    left:90%;
    transform:translate(-50%,-50%);
    background:none;
    border-radius:50%;
    border:1px solid black;
    width:50px;
    height:50px;
    &:hover{
        background:#80808030;
    }
`;

const ImageBox = styled.div`
    position:relative;
    display:inline;
    &:hover{
        ${ImageEl}{
            opacity:0.3;
        }
        ${ImageDeleteBtn}{
            display:block;
            color:black;
        }
        ${ImageDeleteBtn}:hover{
            background-color:#ff0000a1;
        }
        ${ImageRightBtn}, ${ImageLeftBtn}{
            display:block;
            color:black;
        }
    }
`;

const CurrentBannerListLoaderWrapper = styled.div`
    text-align:center;
    
`;
const AdminBannerManage = (props) =>{
    const {
        uploadFile,
        bannerListLoading,
        bannerList
    } = props;

    const {
        handleBannerImage
    } = props;
    return(
        <Container>
            <div>
                <h4>배너 등록</h4>
                <input type='file' id='i_banner_uploadfile' accept="image/*" onChange={(e)=>handleBannerImage().upToServer(e)} hidden/>
                <ImageButton type="button" onClick={()=>handleBannerImage().uploaderOpen()}>이미지 업로드<br/>1920x850 권장</ImageButton>
                <ImageListWrapper>
                    {uploadFile.map(data=>{
                        return(
                            <ImageBox key={data.uuid}>
                                <ImageEl src={data.imageUrl}></ImageEl>
                                <ImageDeleteBtn type="button" onClick={()=>handleBannerImage().deleteImage(data.uuid)}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></ImageDeleteBtn>
                            </ImageBox>
                        )
                    })}
                    
                </ImageListWrapper>
                <button className='btn btn-primary' onClick={()=>handleBannerImage().submitBanner()}>배너로 등록하기</button>
            </div>
            <hr/>
            <div>
                <h4>현재 배너 리스트</h4>
                <ImageListWrapper>
                    {bannerListLoading ==false && bannerList!=[]? 
                        bannerList.map((data,index)=>{
                            return(
                                <ImageBox key={data.id}>
                                    <ImageEl src={data.imageUrl}></ImageEl>
                                    <ImageDeleteBtn type="button" onClick={()=>handleBannerImage().deleteBanner(data.id)}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></ImageDeleteBtn>
                                    {index==0?'':<ImageLeftBtn onClick={()=>handleBannerImage().moveLeft(index)}><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon></ImageLeftBtn>}
                                    {index==bannerList.length-1?'':<ImageRightBtn onClick={()=>handleBannerImage().moveRight(index)}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></ImageRightBtn>}
                                </ImageBox>
                            );
                        })
                        :
                        <CurrentBannerListLoaderWrapper>
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </CurrentBannerListLoaderWrapper>
                    }
                </ImageListWrapper>
            </div>
        </Container>
    );
}

export default AdminBannerManage;