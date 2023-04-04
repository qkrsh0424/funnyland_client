import axios from 'axios';
import { csrfDataConnect } from '../../../data_connect/CsrfDataConnect';
const API_ADDRESS = process.env.REACT_APP_MAIN_API_ADDRESS;

const counselingDataConnect = () => {
    return {
        insertCounselingOne: async function (data) {
            await csrfDataConnect().getApiCsrf();
            return await axios.post(`${API_ADDRESS}/api/insert/counseling/one`, data, {
                withCredentials: true,
                xsrfCookieName: 'x_auth_csrf_token',
                xsrfHeaderName: 'X-XSRF-TOKEN'
            })
                .then(res => res.data)
                .catch(err => {
                    if (err) {
                        alert('Errer code : 405');
                    }
                })
        }
    }
}

export { counselingDataConnect };