import axios from 'axios';
import styled from 'styled-components';
import $ from 'jquery';
import { getCookie } from '../../../handler/CookieHandler';
import { useEffect, useState } from 'react';
import { authDataConnect } from '../../data_connect/AuthDataConnect';
const Container = styled.div`
    height:100vh;
    padding:100px 8px;
`;

const PageTitle = styled.div`
    text-align:center;
    font-size:24px;
    font-weight:700;

`;

const LoginMain = ({ history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notLoged, setNotLoged] = useState(false);
    useEffect(() => {
        async function effectInit() {
            await handleCheckLoged();
        }
        effectInit();
    }, []);

    const handleCheckLoged = async () => {
        await authDataConnect().checkLoged()
            .then(res => {
                if (res.status === 200) {
                    history.replace('/admin')
                    return;
                } else {
                    setNotLoged(false);
                }
            })
    }

    const handleRequestLogin = async (e) => {
        e.preventDefault();
        const body = {
            username: username,
            password: password
        }
        await authDataConnect().login(body)
            .then(res => {
                if (res.status === 200) {
                    history.replace('/admin')
                }
            })
    }

    const loginValueChange = () => {
        return {
            username: function (e) {
                setUsername(e.target.value)
            },
            password: function (e) {
                setPassword(e.target.value)
            }
        }
    }
    return (
        <Container className='container'>
            {notLoged ? <></> :
                <>
                    <PageTitle>관리자 페이지 로그인</PageTitle>
                    <form onSubmit={(e) => handleRequestLogin(e)}>
                        <div className="form-group">
                            <label htmlFor="i_admin_username">관리자 아이디</label>
                            <input type="text" className="form-control" id="i_admin_username" aria-describedby="emailHelp" onChange={(e) => loginValueChange().username(e)} value={username} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="i_admin_password">관리자 패스워드</label>
                            <input type="password" className="form-control" id="i_admin_password" onChange={(e) => loginValueChange().password(e)} value={password} />
                        </div>
                        <button type="submit" className="btn btn-primary">로그인</button>
                    </form>
                </>
            }

        </Container>
    );
}

export default LoginMain;