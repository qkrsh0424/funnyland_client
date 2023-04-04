import axios from 'axios';

const API_ADDRESS = process.env.REACT_APP_MAIN_API_ADDRESS;

const csrfDataConnect = () => {
    return {
        getApiCsrf: async function () {
            return await axios.get(`${API_ADDRESS}/api/token/csrf`, {
                withCredentials: true
            })
                .catch(err => {
                    if (err) {
                        alert('Error code : 405')
                    }
                });
        }
    }
}

export {
    csrfDataConnect
}