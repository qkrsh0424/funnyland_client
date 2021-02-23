import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Fontawesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBuilding,
    faCoins,
    faStore,
    faGamepad,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
const NavContainer = styled.nav`
        overflow: hidden;
        width: 100%;
        padding:10px;
        color:#333;
        position:fixed;
        background-color: ${(props) => props.mobile_nav_open | props.scroll_y >= 60 ? '#f1f1f1' : 'none'};
        border-bottom: 2px solid ${(props) => props.mobile_nav_open | props.scroll_y >= 60 ? '#ee5470' : 'none'};
        transition: background-color 1s;
        z-index:30;
`;

const NavBrandTop = styled(Link)`
        color: white;
        &:hover{
            color:white;
        }
        img{
            height:50px;
            @media only screen and (max-width:320px){
                height:30px;
            }
        }
    `;

const NavItemEl = styled(Link)`
        color:${(props) => props.mobile_nav_open | props.scroll_y >= 60 ? '#808080' : '#f1f1f1'};
        font-size:17px;
        font-weight:600;
        padding-left : 10px;
        padding-right : 10px;
        border:1px solid #00000000;
        &:hover{
            color:#ee5470 !important;
            border-bottom:1px solid #ee5470;
        }
        

        @media only screen and (max-width:320px){
            font-size:14px;
        }
    `;

const NavbarMobileToggleBtn = styled.button`
        color:${(props) => props.mobile_nav_open | props.scroll_y >= 60 ? '#808080' : '#f1f1f1'};
`;

const NavbarDynamic = (props) => {

    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [linkList, setLinkList] = useState([
        {
            id: 'navLink1',
            name: '회사소개',
            icon: <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>,
            url: '/introduce/intro1'
        },
        {
            id: 'navLink2',
            name: '창업안내',
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            url: '/found/intro1'
        },
        {
            id: 'navLink3',
            name: '오픈매장안내',
            icon: <FontAwesomeIcon icon={faStore}></FontAwesomeIcon>,
            url: '#'
        },
        {
            id: 'navLink4',
            name: '제품안내',
            icon: <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon>,
            url: '#'
        },
        {
            id: 'navLink5',
            name: '고객센터',
            icon: <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>,
            url: '#'
        }
    ]);
    const [scrollY, setScrollY] = useState(0);
    function logit() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        // console.log(scrollY);
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });

    const hamburgClick = () => {
        if (mobileNavOpen) {
            setMobileNavOpen(false);
        } else {
            setMobileNavOpen(true);
        }
    }

    return (
        <div>
            <NavContainer
                mobile_nav_open={mobileNavOpen}
                scroll_y={props.scrollY? props.scrollY : scrollY}
                className={`navbar navbar-expand-lg`}
            >
                <NavBrandTop
                    className='navbar-brand mx-auto'
                    to="/"
                >
                    <img src="/images/funnyland/logo/funnyland_logo1.png" width="auto" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
                </NavBrandTop>
                <NavbarMobileToggleBtn
                    mobile_nav_open={mobileNavOpen}
                    scroll_y={props.scrollY? props.scrollY : scrollY}
                    className={`navbar-toggler`}
                    type="button"
                    onClick={hamburgClick}
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="true"
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </NavbarMobileToggleBtn>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {
                            linkList.map(r => {
                                return (
                                    <li className="nav-item" key={r.id}>
                                        <NavItemEl
                                            mobile_nav_open={mobileNavOpen ? 1 : 0}
                                            scroll_y={props.scrollY? props.scrollY : scrollY}
                                            className={`navbar-brand`}
                                            to={r.url}
                                        >
                                            <span className='mr-1'>{r.icon}</span>
                                            {r.name}
                                        </NavItemEl>
                                    </li>
                                );
                            })
                        }
                        <NavItemEl
                            mobile_nav_open={mobileNavOpen ? 1 : 0}
                            scroll_y={props.scrollY? props.scrollY : scrollY}
                            className={`navbar-brand`}
                            to={'/admin'}
                        >
                            관리자 페이지
                        </NavItemEl>
                    </ul>
                </div>
            </NavContainer>
        </div>

    );
}

export default NavbarDynamic;