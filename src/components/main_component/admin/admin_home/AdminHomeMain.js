import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { getCookie } from '../../../../handler/CookieHandler';
import { uuidv4 } from '../../../../handler/MyHandlers';
// components
import AdminNav from '../admin_nav/AdminNav';
import AdminBannerManage from './AdminBannerManage';
// data connector
import { bannerDataConnect } from '../../../data_connect/BannerDataConnect';

const Container = styled.div`
overflow:hidden;
`;

const FullPageLoading = styled.div`
    position:fixed;
    height:100%;
    width:100%;
    z-index:1999;
    background-color:#80808050;
`;

const FullPageLoadingSpinner = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`;

const AdminHomeMain = ({history}) => {
    // Login Check Start
    const [isLoged, setIsLoged] = useState(false);
    useEffect(() => {
        async function effectInit() {
            await handleCheckLoged();
        }
        effectInit();
    }, []);
    
    const handleCheckLoged = async () => {
        await axios.get('/api/auth/check/loged')
            .then(res => {
                if (res.data.message == 'success') {
                    setIsLoged(true);
                    return;
                } else {
                    history.push('/login')
                }
            });
    }
    // Login Check End

    const [bannerListLoading, setBannerListLoading] = useState(true);
    const [bannerList, setBannerList] = useState([]);
    useEffect(()=>{
        
        async function effectInit() {
            if(isLoged==false){
                return;
            }
            await handleGetBanners();
        }
        effectInit();
    },[isLoged])

    const [uploadFile, setUploadFile] = useState([]);
    const [fullPageLoading, setFullPageLoading] = useState(false);

    const handleLogoutSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/auth/logout', {},
            {
                headers: {
                    "X-XSRF-TOKEN": getCookie('XSTO')
                }
            }
        )
            .then(res => {
                if (res.data.message == 'success') {
                    // history.push('/');
                }
            })
    }

    const handleGetBanners = async () =>{
        await bannerDataConnect().searchBanners()
        .then(data=>{
            if(data.message=='success'){
                setBannerList(data.data);
            }
        })
        setBannerListLoading(false);
    }

    const handleBannerImage = () => {
        return {
            uploaderOpen: function(){
                document.getElementById('i_banner_uploadfile').click();
            },
            upToServer: async function (event) {
                //빈파일이 아닌 경우 함수 진행
                if (event.target.files !== null) {
                    setFullPageLoading(true);
                    //FormData 생성
                    const fd = new FormData();
                    //FormData에 key, value 추가하기
                    fd.append('file', event.target.files[0]);
                    // axios 사용해서 백엔드에게 파일 보내기
                    await bannerDataConnect().imageUploadToS3(fd).then(data => {
                        document.getElementById('i_banner_uploadfile').value = '';
                        if (data.message == 'success') {
                            setUploadFile([
                                ...uploadFile,
                                {
                                    uuid: uuidv4(),
                                    imageUrl: data.imageUrl
                                }
                            ])
                        }
                    });
                    setFullPageLoading(false);
                }
            },
            deleteImage: function (uuid) {
                setUploadFile(uploadFile.filter(r => r.uuid != uuid));
            },
            submitBanner: async function () {
                if(uploadFile.length==0){
                    return;
                }
                setFullPageLoading(true);
                await bannerDataConnect().insertBanners(uploadFile)
                .then(data=>{
                    setUploadFile([]);
                });
                await handleGetBanners();
                setFullPageLoading(false);
            },
            moveLeft: async function(index){
                if(index <= 0){
                    return;
                }
                setFullPageLoading(true);
                let newList = bannerList;
                let curr = bannerList[index];
                let prev = bannerList[index-1];
                
                newList[index] = prev;
                newList[index-1] = curr;
                newList.forEach((r,index)=>{
                    r.order = index;
                })
                setBannerList(newList);
                await bannerDataConnect().updateBanners(bannerList)
                .then(data=>{
                    console.log(data);
                    if(data.message=='success'){
                        handleGetBanners();
                        setBannerListLoading(false);
                    }else{
                        alert('undefined error');
                    }
                });
                setFullPageLoading(false);
            },
            moveRight: async function(index){
                if(index >= bannerList.length-1){
                    return;
                }
                setFullPageLoading(true);
                let newList = bannerList;
                let curr = bannerList[index];
                let next = bannerList[index+1];
                
                newList[index] = next;
                newList[index+1] = curr;
                newList.forEach((r,index)=>{
                    r.order = index;
                })
                setBannerList(newList);
                await bannerDataConnect().updateBanners(bannerList)
                .then(data=>{
                    if(data.message=='success'){
                        handleGetBanners();
                        setBannerListLoading(false);
                    }else{
                        alert('undefined error');
                    }
                });
                setFullPageLoading(false);
            },
            deleteBanner: async function(id){
                setFullPageLoading(true);
                let banner = bannerList.filter(r=>r.id==id)[0];
                await bannerDataConnect().deleteBanner(banner)
                .then(data=>{
                    // console.log(data);
                })
                await handleGetBanners();
                setFullPageLoading(false);
            }
        }
    }

    const testConsole = () =>{
        console.log(bannerList);
    }
    return (
        isLoged ?
            (
                <Container>
                    {fullPageLoading ? 
                        <FullPageLoading>
                            <FullPageLoadingSpinner>
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </FullPageLoadingSpinner>
                        </FullPageLoading>
                        :
                        ""
                    }
                    <AdminNav></AdminNav>
                    <button onClick={testConsole}>con</button>
                    <AdminBannerManage
                        uploadFile={uploadFile}
                        bannerListLoading={bannerListLoading}
                        bannerList = {bannerList}

                        handleBannerImage={handleBannerImage}
                    >

                    </AdminBannerManage>
                </Container>
            ) :
            (
                <></>
            )
    );
}

export default AdminHomeMain;