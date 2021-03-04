import axios from 'axios';
import styled from 'styled-components';
import { getCookie } from '../../../../handler/CookieHandler';
import { Link } from 'react-router-dom';
const AdminNav = () =>{
    const handleLogoutSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/auth/logout', {},
            {
                headers: {
                    "X-XSRF-TOKEN": getCookie('XSTO')
                }
            }
        )
            .then(res => {
                if (res.data.message == 'success') {
                    window.location.href='/'
                }
            })
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/admin">관리자 페이지</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>홈</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/admin/counseling'>상담신청 관리</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/admin/store'>매장 안내 관리</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/admin/product'>상품 안내 관리</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={(e) => handleLogoutSubmit(e)}>
                    <button type='submit' className='btn btn-outline-danger'>로그아웃</button>
                </form>
            </div>
        </nav>
    );
}

export default AdminNav;