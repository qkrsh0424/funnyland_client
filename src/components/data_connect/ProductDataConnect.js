import axios from 'axios';
import queryString from 'query-string';
import { getCookie } from '../../handler/CookieHandler';
const productDataConnect = () => {
    return {
        searchProductCategoryAll: async function () {
            return await axios.get('/api/search/product_category/all', {})
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
        insertProductCategoryOne: async function (data) {
            return await axios.post('/api/insert/product_category/one', data, {
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
        deleteProductCategoryOne: async function (data) {
            return await axios.post('/api/delete/product_category/one', data, {
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
        // ============upload to s3=================
        // imageUploadToS3: async function (fd) {
        //     return await axios.post('/api/fileupload/image', fd, {
        //         headers: {
        //             'X-XSRF-TOKEN': getCookie('XSTO')
        //         }
        //     })
        //     .then(res=>res.data)
        //     //에러가 날 경우 처리
        //     .catch(error => {
        //         console.log(error.response);
        //     });
        // },
        // ==============upload to local===================
        imageUploadToS3: async function (fd) {
            return await axios.post('/api/fileupload/external/image', fd, {
                headers: {
                    'X-XSRF-TOKEN': getCookie('XSTO')
                }
            })
            .then(res=>res.data)
            //에러가 날 경우 처리
            .catch(error => {
                if(error.response.status==500){
                    alert('server 500 error.');
                }else{
                    alert('server undefined error.');
                }
            });
        },
        searchProductAll: async function () {
            let query = queryString.parse(window.location.search);

            return await axios.get('/api/search/product/all', {
                params: {
                    categoryId: query.categoryId,
                    pageIndex: query.pageIndex ? query.pageIndex - 1 : 0,
                    newChecked:query.newChecked && query.newChecked=='true' ? true : false,
                    hitChecked:query.hitChecked && query.hitChecked=='true'? true : false,
                    eventChecked:query.eventChecked && query.eventChecked=='true' ? true : false,
                }
            })
                .then(res => {
                    if (res && res.data) {
                        // console.log(res.data);
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
        /**
         * 
         * @param {boolean} newChecked 
         * @param {boolean} hitChecked 
         * @param {boolean} eventChecked 
         */
        searchProductAllByCondition: async function (newChecked, hitChecked, eventChecked) {

            return await axios.get('/api/search/product/all', {
                params: {
                    newChecked:newChecked ? true : false,
                    hitChecked:hitChecked ? true : false,
                    eventChecked:eventChecked ? true : false,
                }
            })
                .then(res => {
                    if (res && res.data) {
                        // console.log(res.data);
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
        insertProductOne: async function (data) {
            return await axios.post('/api/insert/product/one', data, {
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
        updateProductOne: async function (data) {
            return await axios.post('/api/update/product/one', data, {
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
        deleteProductOne: async function (data) {
            return await axios.post('/api/delete/product/one', data, {
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
        updateCategoryOne: async function (data) {
            return await axios.post('/api/update/category/one', data, {
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
        searchProductOne: async function (productId) {
            return await axios.get('/api/search/product/one', {
                params: {
                    productId:productId
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
                        if (res.status == 405) {
                            alert('Errer code : 405, not allowed');
                        } else if (res.status == 500) {
                            alert('Errer code : 500, Internal Server Error');
                        } else {
                            alert('undefined error');
                        }
                    }
                })
        }
    }
}

export {
    productDataConnect
}