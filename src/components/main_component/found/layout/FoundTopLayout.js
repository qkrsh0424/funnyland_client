import styled from 'styled-components';
import {css} from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faCaretRight,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
const Container = styled.div`
`;
const TopAreaWrapper = styled.div`
    position: relative;
    text-align: center;
    width:100%;
    /* height:60vh; */
    height:350px;
    @media only screen and (max-width:768px){
        &{
            /* height: 35vh; */
            height: 250px;
        }
    }
`;
const TopAreaTitle = styled.div`
    color: white;
    font-size:45px;
    font-weight:900;
    z-index:1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media only screen and (max-width:768px){
        &{
            font-size:33px;
        }
    }
    @media only screen and (max-width:320px){
        &{
            font-size:28px;
        }
    }
`;

const TopAreaNavgatorFiled = styled.div`
    color: #ffffffb3;
    width:100%;
    font-size:20px;
    font-weight:600;
    z-index:1;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    & a{
        color: #ffffffb3;
    }
    & a:hover{
        color: #ee5470;
    }

    & span{
        margin: 0 20px;
    }
    @media only screen and (max-width:768px){
        &{
            font-size:15px;
        }
        & span{
            margin: 0 5px;
        }
    }

    @media only screen and (max-width:320px){
        &{
            font-size:13px;
        }
        & span{
            margin: 0 5px;
        }
    }
`;

const TopAreaImageWrapper = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        /* Safari 6.0 - 9.0 */
        -webkit-filter: blur(8px); 
        filter: blur(8px);
        transform: scale(1.1);
    }
`;

const TopAreaSubNavWrapper = styled.div`
    position: absolute;
    width:80%;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-auto-rows: minmax(auto, auto);
    grid-gap:5px;
    bottom:0;
    left: 50%;
    transform: translate(-50%);
`;

// const TopAreaSubNavItem = styled(Link)`
//     /* background-color: ${(props) => props.link_active && props.link_active ? '#e88a3e' : '#ffffff40'}; */
//     background-color: ${(props) => props.link_active && props.link_active ? '#ee5470' : '#ffffff40'};
//     padding:15px 0;
//     border:1px solid #ffffff80;
//     border-bottom:none;
//     border-radius:4px;
//     border-bottom-left-radius: 0;
//     border-bottom-right-radius: 0;
//     /* border:none; */
//     font-size:18px;
//     color:white;
//     font-weight:600;
//     cursor: pointer;
//     &:hover{
//         color:white;
//         text-decoration:none;
//         background-color:#ee5470;
//     }

//     @media only screen and (max-width:768px){
//         &{
//             font-size:13px;
//         }
//     }
//     @media only screen and (max-width:320px){
//         &{
//             font-size:12px;
//         }
//     }
// `;

const TopAreaSubNavItem = styled(Link)`
    /* background-color: ${(props)=>props.link_active && props.link_active ? '#e88a3e' : '#ffffff40'}; */
    /* background-color: ${(props)=>props.link_active && props.link_active ? '#ffffff' : '#ffffff40'}; */
    padding:10px 0;
    
    ${(props)=>props.link_active && props.link_active ? css `
        color:#ee5470;
        background-color:white;
        border-top:5px solid #ee5470;
        &:hover{
            color:#ee5470;
            text-decoration:none;
            /* background-color:#ee5470; */
        }
    `:
    css `
        color:white;
        background-color:#ffffff40;
        border:1px solid #ffffff80;
        &:hover{
            color:white;
            text-decoration:none;
            /* background-color:#ee5470; */
        }
    `
    }
    border-bottom:none;
    border-radius:2px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    font-size:18px;
    
    font-weight:600;
    cursor: pointer;
    

    @media only screen and (max-width:768px){
        &{
            font-size:15px;
        }
    }
    @media only screen and (max-width:320px){
        &{
            font-size:13px;
        }
    }
`;

const FoundTopLayout = (props) => {
    return (
        <Container>
            <TopAreaWrapper>
                <TopAreaTitle>창업안내</TopAreaTitle>
                <TopAreaNavgatorFiled>

                    <Link to='/'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Link>
                    <span><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></span>
                    창업안내
                    <span><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></span>
                    {props.title}

                </TopAreaNavgatorFiled>
                <TopAreaImageWrapper>
                    <img src='/images/funnyland/bg/funnyland-bg7.png'></img>
                </TopAreaImageWrapper>
                <TopAreaSubNavWrapper>
                    <TopAreaSubNavItem
                        link_active={props.linkPage == 'intro1' ? 1 : 0}
                        to='/found/intro1'
                    >
                        창업 절차 안내
                    </TopAreaSubNavItem>
                    <TopAreaSubNavItem
                        link_active={props.linkPage == 'intro3' ? 1 : 0}
                        to='/found/intro3'
                    >
                        임대 절차 안내
                    </TopAreaSubNavItem>
                    <TopAreaSubNavItem
                        link_active={props.linkPage == 'intro2' ? 1 : 0}
                        to='/found/intro2'
                    >
                        상담신청
                    </TopAreaSubNavItem>
                </TopAreaSubNavWrapper>
            </TopAreaWrapper>
        </Container>
    );
}

export default FoundTopLayout;