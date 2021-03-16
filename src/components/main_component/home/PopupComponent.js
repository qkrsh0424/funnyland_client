import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { setCookie, getCookie } from '../../../handler/CookieHandler';

const Container = styled.div`
    position:relative;
`;

const PopupBox = styled.div`
    position:absolute;
    width:45%;
    z-index:3;
    top:100px;
    @media only screen and (max-width:768px){
        width:100%;
        padding:10px;
    }
`;

const ButtonBox = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-auto-rows: minmax(auto, auto);
`;

const ButtonEl = styled.button`
    background:#333;
    border:1px solid #888;
    color:white;
    padding:5px;
    text-align:center;
`;

const PopupImageBox = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;
    border:1px solid #f1f1f1;
    
`;

const PopupImageEl = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background: linear-gradient(to bottom right, #ee5470, #f8bac9); */
    
    border-radius:15px;
`;

const PopupImage = styled.img`
    width:100%;
    height:100%;
    /* border: 1px solid black; */
    /* border-radius:15px; */
    object-fit: cover;
    cursor:pointer;
`;
const PopupComponent = (props) => {
    const [popupList, setPopupList] = useState(props.popupList);

    // useEffect(() => {
    //     function fetchInit() {
    //         popupList.forEach(r => {
    //             let popupCookie = getCookie(`popup${r.popupId}`);
    //             if (popupCookie) {
    //                 let newPopupList = popupList.filter(r2 => r2.popupId != r.popupId);
    //                 setPopupList(newPopupList);
    //             }
    //         })
    //     }
    //     fetchInit();
    // }, [popupList])
    const handlePopupEventControl = () => {
        return {
            close: function (popupId) {
                let newPopupList = popupList.filter(r => r.popupId != popupId);
                setPopupList(newPopupList);
            },
            oneDayClose: function (popupId) {
                let newPopupList = popupList.filter(r => r.popupId != popupId);
                setPopupList(newPopupList);
                setCookie(`popup${popupId}`, 1, 60*60*24*1000);
            }
        }
    }
    return (
        <Container>
            {popupList.map(r => {
                return (
                    <PopupBox key={r.popupId}>
                        <PopupImageBox>
                            <PopupImageEl>
                                <a href={r.popupUrl} target="_blank">
                                    <PopupImage src={r.popupImageUrl}></PopupImage>
                                </a>
                            </PopupImageEl>
                        </PopupImageBox>
                        <ButtonBox>
                            <ButtonEl onClick={() => handlePopupEventControl().oneDayClose(r.popupId)}>오늘하루 보지않기</ButtonEl>
                            <ButtonEl onClick={() => handlePopupEventControl().close(r.popupId)}>닫기</ButtonEl>
                        </ButtonBox>
                    </PopupBox>
                );
            })}

        </Container>
    );

}

export default PopupComponent;