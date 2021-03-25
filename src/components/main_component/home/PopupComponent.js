import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setCookie, getCookie } from '../../../handler/CookieHandler';

const Container = styled.div`
    position:relative;
`;

const PopupBox = styled.div`
    position:absolute;
    width:450px;
    z-index:99;
    top:90px;
    left:0;
    @media only screen and (max-width:1200px){
        width:100%;
        padding:10px;
    }
`;

const PopupBoxRight = styled.div`
    position:absolute;
    width:450px;
    z-index:99;
    left:450px;
    top:90px;
    @media only screen and (max-width:1200px){
        width:100%;
        padding:10px;
        left:0;
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
    /* position: relative;
    width: 100%;
    padding-top: 100%;
    border:3px solid #ee5470;
     */
    width:100%;
    height:auto;
    border:3px solid #ee5470;
    cursor:pointer;
`;

const PopupImageEl = styled.div`
    /* position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius:15px; */

    position: relative;
    /* padding-bottom: 42.9%; */
    padding-bottom: 100%;
`;

const PopupImage = styled.img`
    /* width:100%;
    height:100%;
    object-fit: cover;
    cursor:pointer; */
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: .5s;
`;

const PopupImageRightWrapper = styled.div`
    width:100%;
    height:auto;
    border:3px solid #ee5470;
    cursor:pointer;
`;

const PopupImageRightBox = styled.div`
    position: relative;
    /* padding-bottom: 42.9%; */
    padding-bottom: 100%;
`;
const PopupImageRightEl = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: .5s;
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
                setCookie(`popup${popupId}`, 1, 60 * 60 * 24 * 1000);
            }
        }
    }
    return (
        <Container>
            {popupList.map(r => {
                if (r.popupType == 'TYPE_LEFT') {
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
                } else {
                    return (
                        <PopupBoxRight key={r.popupId}>
                            <PopupImageRightWrapper>
                                <PopupImageRightBox>
                                    <a href={r.popupUrl} target="_blank">
                                        <PopupImageRightEl src={r.popupImageUrl}></PopupImageRightEl>
                                    </a>
                                </PopupImageRightBox>
                            </PopupImageRightWrapper>
                            <ButtonBox>
                                <ButtonEl onClick={() => handlePopupEventControl().oneDayClose(r.popupId)}>오늘하루 보지않기</ButtonEl>
                                <ButtonEl onClick={() => handlePopupEventControl().close(r.popupId)}>닫기</ButtonEl>
                            </ButtonBox>
                        </PopupBoxRight>
                    )
                }

            })}

        </Container>
    );

}

export default PopupComponent;