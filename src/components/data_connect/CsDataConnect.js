import axios from 'axios';
import queryString from 'query-string';
import { getCookie } from '../../handler/CookieHandler';

const csDataConnect = () => {
    return {
        searchCsAll: async function () {
            let query = queryString.parse(window.location.search);
            return await axios.get('/api/search/cs/all', {
                params: {
                    csType: query.csType,
                    pageIndex: query.pageIndex ? query.pageIndex - 1 : 0,
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
        searchCsOne: async function (csId) {
            return await axios.get('/api/search/cs/one', {
                params: {
                    csId: csId
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
        },
        insertCsOne: async function (data) {
            // console.log(data);
            return await axios.post('/api/insert/cs/one', data, {
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
        deleteCsOne: async function (data) {
            return await axios.post('/api/delete/cs/one', data, {
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
        updateCsOne: async function (data) {
            // console.log(data);
            return await axios.post('/api/update/cs/one', data, {
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
    }
}

export { csDataConnect }