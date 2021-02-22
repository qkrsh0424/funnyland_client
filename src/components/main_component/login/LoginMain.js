import axios from 'axios';
import styled from 'styled-components';
import $ from 'jquery';
import {getCookie} from '../../../handler/CookieHandler';
import { useEffect, useState } from 'react';
const Container = styled.div`
    height:100vh;
    padding:100px 8px;
`;

const PageTitle = styled.div`
    text-align:center;
    font-size:24px;
    font-weight:700;

`;

const LoginMain = ({history}) =>{
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notLoged, setNotLoged] = useState(true);
    useEffect(()=>{
        console.log('em')
        async function effectInit(){
            await handleCheckLoged();
        }
        effectInit();
    },[]);

    const handleCheckLoged = async () =>{
        await axios.get('/api/auth/check/loged')
        .then(res=>{
            if(res.data.message == 'success' ){
                history.push('/admin')
                return;
            }else{
                setNotLoged(false);
            }
        })
    }

    const handleRequestLogin = (e) =>{
        e.preventDefault();
        axios.post('/api/auth/login',{
                username:username,
                password:password
            },
            {
                headers: {
                    "X-XSRF-TOKEN": getCookie('XSTO')
                }
            }
        )
        .then(res=>{
            history.push('/admin')
        })
    }

    const loginValueChange = () =>{
        return{
            username: function(e){
                setUsername(e.target.value)
            },
            password: function(e){
                setPassword(e.target.value)
            }
        }
    }
    return(
        <Container className='container'>
            {notLoged ? <></>:
                <>
                    <PageTitle>관리자 페이지 로그인</PageTitle>
                    <form onSubmit={(e)=>handleRequestLogin(e)}>
                        <div className="form-group">
                            <label htmlFor="i_admin_username">관리자 아이디</label>
                            <input type="text" className="form-control" id="i_admin_username" aria-describedby="emailHelp" onChange={(e)=>loginValueChange().username(e)} value={username}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="i_admin_password">관리자 패스워드</label>
                            <input type="password" className="form-control" id="i_admin_password" onChange={(e)=>loginValueChange().password(e)} value={password}/>
                        </div>
                        <button type="submit" className="btn btn-primary">로그인</button>
                    </form>
                </>
            }
            
        </Container>
    );
}

export default LoginMain;