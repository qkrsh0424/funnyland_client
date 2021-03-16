import axios from 'axios';
import {getCookie} from '../../handler/CookieHandler';

const popupDataConnect = () => {
    return {
        // ============upload to s3=================
        uploadImageToLocal: async function (fd) {
            return await axios.post('/api/fileupload/image', fd, {
                headers: {
                    'X-XSRF-TOKEN': getCookie('XSTO')
                }
            })
                .then(res => {
                    if(res && res.data){
                        return res.data;
                    }else{
                        return null;
                    }
                })
                .catch(err=>{
                    if(err.response.status==500){
                        alert('server 500 error.');
                    }else{
                        alert('undefined error.');
                    }
                })
        },
        // ============upload to local=================
        // uploadImageToLocal: async function (fd) {
        //     return await axios.post('/api/fileupload/external/image', fd, {
        //         headers: {
        //             'X-XSRF-TOKEN': getCookie('XSTO')
        //         }
        //     })
        //         .then(res => {
        //             if(res && res.data){
        //                 return res.data;
        //             }else{
        //                 return null;
        //             }
        //         })
        //         .catch(err=>{
        //             if(err.response.status==500){
        //                 alert('server 500 error.');
        //             }else{
        //                 alert('undefined error.');
        //             }
        //         })
        // },
        searchPopupAll: async function () {
            return await axios.get('/api/search/popup/all', {})
                .then(res => {
                    if (res && res.data) {
                        return res.data
                    } else {
                        return null;
                    }
                })
                .catch(err => {
                    if (err) {
                        let res = err.response;
                        if (res.status == 405) {
                            alert('Errer code : 405, not allowed');
                        } else if (res.status == 500) {
                            alert('Errer code : 500, Internal Server Error');
                        } else {
                            alert('undefined error');
                        }
                    }
                })
        },
        insertPopupOne: async function (data) {
            return await axios.post('/api/insert/popup/one', data, {
                headers: {
                    'X-XSRF-TOKEN': getCookie('XSTO')
                }
            })
                .then(res => {
                    if (res && res.data) {
                        return res.data
                    } else {
                        return null;
                    }
                })
                .catch(err => {
                    if (err) {
                        let res = err.response;
                        if (res.status == 401) {
                            alert('로그인 세션이 만료되었습니다. \nError code : 401, session expired');
                            window.location.href = '/login';
                        } else if (res.status == 403) {
                            alert('접근 권한이 없습니다. \nError code : 403, access denied');
                        } else if (res.status == 405) {
                            alert('Errer code : 405, not allowed');
                        } else if (res.status == 500) {
                            alert('Errer code : 500, Internal Server Error');
                        } else {
                            alert('undefined error');
                        }
                    }
                })
        },
        deletePopupOne: async function (data) {
            // console.log(data);
            return await axios.post('/api/delete/popup/one',data,{
                headers: {
                    'X-XSRF-TOKEN': getCookie('XSTO')
                }
            })
                .then(res => {
                    if (res && res.data) {
                        return res.data
                    } else {
                        return null;
                    }
                })
                .catch(err => {
                    if (err) {
                        let res = err.response;
                        if (res.status == 401) {
                            alert('로그인 세션이 만료되었습니다. \nError code : 401, session expired');
                            window.location.href = '/login';
                        } else if (res.status == 403) {
                            alert('접근 권한이 없습니다. \nError code : 403, access denied');
                        } else if (res.status == 405) {
                            alert('Errer code : 405, not allowed');
                        } else if (res.status == 500) {
                            alert('Errer code : 500, Internal Server Error');
                        } else {
                            alert('undefined error');
                        }
                    }
                });
        },
    }
}

export { popupDataConnect }