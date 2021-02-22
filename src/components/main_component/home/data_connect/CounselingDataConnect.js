import axios from 'axios';
import {getCookie} from '../../../../handler/CookieHandler';
const counselingDataConnect = () =>{
    return{
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
        }
    }
}

export {counselingDataConnect};