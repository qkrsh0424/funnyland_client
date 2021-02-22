import {getCookie} from '../../handler/CookieHandler';
import axios from 'axios';

const bannerDataConnect = () => {
    return {
        searchBanners: async function(){
            return await axios.get('/api/search/banner/all/byorder')
            .then(res=>res.data)
            .catch(err=>console.log(err));
        },
        imageUploadToS3: async function (fd) {
            return await axios.post('/api/fileupload/image', fd, {
                headers: {
                    'X-XSRF-TOKEN': getCookie('XSTO')
                }
            })
            .then(res=>res.data)
            //에러가 날 경우 처리
            .catch(error => {
                console.log(error.response);
            });
        },
        insertBanners: async function(files){
            return await axios.post('/api/insert/banner/multiple',files,{
                headers:{
                    'X-XSRF-TOKEN': getCookie('XSTO')
                }
            })
            .then(res=>res.data)
            .catch(error=>{
                console.log(error);
            })
        },
        updateBanners: async function(banners){
            return await axios.post('/api/update/banner/all', banners,{
                headers:{
                    'X-XSRF-TOKEN': getCookie('XSTO')
                }   
            })
            .then(res=>res.data)
            .catch(error=>{
                console.log(error);
            })
        },
        deleteBanner: async function(banner){
            return await axios.post('/api/delete/banner/one',banner,{
                headers:{
                    'X-XSRF-TOKEN': getCookie('XSTO')
                }
            })
            .then(res=>res.data)
            .catch(err=>console.log(err));
        }
    }
}

export {
    bannerDataConnect
}