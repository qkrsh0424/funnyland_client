import axios from 'axios';
import { axiosAuthInterceptor } from './axiosInterceptors';
import { csrfDataConnect } from './CsrfDataConnect';

const API_ADDRESS = process.env.REACT_APP_MAIN_API_ADDRESS;

const bannerDataConnect = () => {
    return {
        searchBanners: async function () {
            return await axios.get(`${API_ADDRESS}/api/search/banner/all/byorder`, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
            })
                .then(res => res.data)
                .catch(err => console.log(err));
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
        insertBanners: async function (files) {
            await csrfDataConnect().getApiCsrf();
            return await axiosAuthInterceptor.post(`${API_ADDRESS}/api/insert/banner/multiple`, files, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
            })
                .then(res => res.data)
                .catch(error => {
                    console.log(error);
                })
        },
        updateBanners: async function (banners) {
            await csrfDataConnect().getApiCsrf();
            return await axiosAuthInterceptor.post(`${API_ADDRESS}/api/update/banner/all`, banners, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
            })
                .then(res => res.data)
                .catch(error => {
                    console.log(error);
                })
        },
        deleteBanner: async function (banner) {
            await csrfDataConnect().getApiCsrf();
            return await axiosAuthInterceptor.post(`${API_ADDRESS}/api/delete/banner/one`, banner, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
            })
                .then(res => res.data)
                .catch(err => console.log(err));
        }
    }
}

export {
    bannerDataConnect
}