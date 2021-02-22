import axios from 'axios';
import {getCookie} from '../../handler/CookieHandler';
import queryString from 'query-string';

const counselingDataConnect = () =>{
    return{
        searchCounselingAll: async function(){
            let query = queryString.parse(window.location.search);
            return await axios.get('/api/search/counseling/all',{
                params:{
                    pageIndex:query.pageIndex ? query.pageIndex-1 : 0
                }
            })
            .then(res=>res.data)
            .catch(err=>{
                if(err){
                    alert('Error code : 405')
                }
            });
        },
        insertCounselingOne: async function(data){
            return await axios.post('/api/insert/counseling/one',data,{
                headers:{
                    'X-XSRF-TOKEN':getCookie('XSTO')
                }
            })
            .then(res=>res.data)
            .catch(err=>{
                if(err){
                    alert('Errer code : 405');
                }
            })
        },
        updateCounselingOne: async function(data){
            return await axios.post('/api/update/counseling/one',data,{
                headers:{
                    'X-XSRF-TOKEN':getCookie('XSTO')
                }
            })
            .then(res=>res.data)
            .catch(err=>{
                if(err){
                    alert('Errer code : 500');
                }
            })
        },
        deleteCounselingOne: async function(data){
            return await axios.post('/api/delete/counseling/one',data,{
                headers:{
                    'X-XSRF-TOKEN':getCookie('XSTO')
                }
            })
            .then(res=>{
                if(res && res.data){
                    return res.data
                }else{
                    return null;
                }
            })
            .catch(err=>{
                if(err){
                    let res = err.response;
                    if(res.status == 401){
                        alert('로그인 세션이 만료되었습니다. \nError code : 401, session expired');
                        window.location.href='/login';
                    }else if(res.status == 403){
                        alert('접근 권한이 없습니다. \nError code : 403, access denied');
                    }else if(res.status == 405){
                        alert('Errer code : 405, not allowed');
                    }else if(res.status == 500){
                        alert('Errer code : 500, Internal Server Error');
                    }else{
                        alert('undefined error');
                    }
                }
            })
        }
    }
}

export {
    counselingDataConnect
}