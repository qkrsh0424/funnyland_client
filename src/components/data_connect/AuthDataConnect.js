import axios from 'axios';
import { axiosAuthInterceptor } from './axiosInterceptors';
import { csrfDataConnect } from './CsrfDataConnect';
const API_ADDRESS = process.env.REACT_APP_MAIN_API_ADDRESS;

const authDataConnect = () => {
    return {
        checkLoged: async function () {
            return await axiosAuthInterceptor.get(`${API_ADDRESS}/api/auth/check/loged`,{
                withCredentials: true,
            })
        },
        /**
         * 
         * @param {object} body 
         * @param {string} body.username
         * @param {string} body.password
         */
        login: async function (body) {
            await csrfDataConnect().getApiCsrf();
            return await axios.post(`${API_ADDRESS}/api/auth/login`, body,
                {
                    withCredentials: true,
                    xsrfCookieName: 'x_auth_csrf_token',
                    xsrfHeaderName: 'X-XSRF-TOKEN'
                }
            )
        },
        logout: async function () {
            await csrfDataConnect().getApiCsrf();
            return await axios.post(`${API_ADDRESS}/api/auth/logout`, {},
                {
                    withCredentials: true,
                    xsrfCookieName: 'x_auth_csrf_token',
                    xsrfHeaderName: 'X-XSRF-TOKEN'
                }
            )
        }
    }
}

export {
    authDataConnect
}