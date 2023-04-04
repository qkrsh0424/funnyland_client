import axios from 'axios';
import queryString from 'query-string';
import { getCookie } from '../../handler/CookieHandler';
import { axiosAuthInterceptor } from './axiosInterceptors';
import { csrfDataConnect } from './CsrfDataConnect';

const API_ADDRESS = process.env.REACT_APP_MAIN_API_ADDRESS;

const storeDataConnect = () => {
    return {
        searchStoreAreaAll: async function () {
            return await axios.get(`${API_ADDRESS}/api/search/store_area/all`, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
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
        },
        insertStoreAreaOne: async function (data) {
            await csrfDataConnect().getApiCsrf();
            return await axiosAuthInterceptor.post(`${API_ADDRESS}/api/insert/store_area/one`, data, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
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
        deleteStoreAreaOne: async function (data) {
            await csrfDataConnect().getApiCsrf();
            return await axiosAuthInterceptor.post(`${API_ADDRESS}/api/delete/store_area/one`, data, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
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
        updateStoreAreaOne: async function (data) {
            await csrfDataConnect().getApiCsrf();
            return await axiosAuthInterceptor.post(`${API_ADDRESS}/api/update/store_area/one`, data, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
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
        searchStoreAll: async function (areaName, pageIndex) {
            return await axios.get(`${API_ADDRESS}/api/search/store/all`, {
                params: {
                    areaName: areaName ? areaName : '',
                    pageIndex: pageIndex ? pageIndex : 0
                },
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
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
        },
        insertStoreOne: async function (data) {
            await csrfDataConnect().getApiCsrf();
            return await axiosAuthInterceptor.post(`${API_ADDRESS}/api/insert/store/one`, data, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
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
        updateStoreOne: async function (data) {
            await csrfDataConnect().getApiCsrf();
            return await axiosAuthInterceptor.post(`${API_ADDRESS}/api/update/store/one`, data, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
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
        deleteStoreOne: async function (data) {
            await csrfDataConnect().getApiCsrf();
            return await axiosAuthInterceptor.post(`${API_ADDRESS}/api/delete/store/one`, data, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
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
        imageUploadToS3: async function (fd) {
            await csrfDataConnect().getApiCsrf();
            return await axiosAuthInterceptor.post(`${API_ADDRESS}/api/fileupload/image`, fd, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
            })
                .then(res => res.data)
                //에러가 날 경우 처리
                .catch(error => {
                    console.log(error.response);
                });
        },
        searchStoreOne: async function (storeId) {
            return await axios.get(`${API_ADDRESS}/api/search/store/one`, {
                params: {
                    storeId: storeId
                },
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
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

export { storeDataConnect }