import { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const floatingPlayerTitleAnimation = () => {
    return keyframes`
        50% {
            opacity:1;
            transform: skew(-15deg) scale(1.2); 
            /* transform: scale(1.1); */
        }
    `;
}

const Container = styled.div`
    /* border-top:1px dashed #ee5470; */
    padding-bottom: 20px;
`;

const ItemBox = styled.div`
    position:relative;
    min-height:150px;
    padding-top:15px;
`;

const YoutubeBox = styled.div`
    ${(props) => props.floating_close == true || props.scroll_y >= props.offset_top - document.documentElement.clientHeight ?
        css`
            position:relative;
            @media only screen and (max-width: 768px){
                width:100%;
            }
        ` :
        css`
            position:fixed;
            bottom:88px;
            right:13px;
            @media only screen and (max-width: 768px){
                width:${`${document.documentElement.clientWidth - 100}px`};
                bottom:74px;
                right:0;
            }
            @media only screen and (max-width: 320px){
                width:${`${document.documentElement.clientWidth - 100}px`};
                bottom:64px;
                right:0;
            }
        `
    }
    
    width:500px;
    min-height:150px;
    padding-top:15px;

    .youtube-player-box{
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 25;
        height: 0;
    }
    .youtube-player-el{
        position: absolute;
        top: 0;
        left: 0;
    }

    & .titleEl{
        display:inline-block;
        opacity:.5;
        color:white;
        font-size:15px;
        padding-left: 20px;
        animation: ${floatingPlayerTitleAnimation} 1.5s linear infinite;
    }
    & .funnyland-gradient{
        background: linear-gradient(to right, #ee5470, #f8bac9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        
    }

    & .workman-text{
        color:red;
        text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
        -moz-text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
        -webkit-text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
    }

`;

const VideoPlayerBox = styled.div`
    /* ${(props) => props.floating_close == true || props.scroll_y >= props.offset_top - document.documentElement.clientHeight ?
        css`
            position:relative;
            @media only screen and (max-width: 768px){
                width:100%;
            }
        ` :
        css`
            position:fixed;
            bottom:20%;
            right:5%;
            @media only screen and (max-width: 768px){
                width:${`${document.documentElement.clientWidth - 100}px`};
                right:0;
            }
        `
    } */
    @media only screen and (max-width: 768px){
        width:100%;
    }
    width:500px;
    min-height:150px;
    padding-top:15px;

    .youtube-player-box{
        position: relative;
        padding-bottom: 56.25%;
        padding-top: 25;
        height: 0;
    }
    .youtube-player-el{
        position: absolute;
        top: 0;
        left: 0;
    }

    & .titleEl{
        display:inline-block;
        opacity:.5;
        color:white;
        font-size:15px;
        padding-left: 20px;
        animation: ${floatingPlayerTitleAnimation} 1.5s linear infinite;
    }
    & .funnyland-gradient{
        background: linear-gradient(to right, #ee5470, #f8bac9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        
    }

    & .workman-text{
        color:red;
        text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
        -moz-text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
        -webkit-text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
    }

`;
const ItemTitle = styled.div`
    position:absolute;
    width:100%;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    text-align:center;
    font-weight:600;
    & .titleEl{
        font-size:40px;
        border-left: 5px solid #ee5470; 
        padding-left: 20px;
    }
    & .funnyland-gradient{
        background: linear-gradient(to right, #ee5470, #f8bac9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    & .workman-text{
        color:red;
        text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
        -moz-text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
        -webkit-text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
    }

    @media only screen and (max-width:768px){
        top:50%;
        & .titleEl{
            font-size:25px;
        }
    }

    
`;

const VideoBottomTitle = styled.div`
    margin:8px;
    padding:8px;
    text-align:center;
    font-weight:600;
    /* border-top:1px solid #f1f1f1; */
    border-bottom:1px solid #f1f1f1;
`;

const ContainerTitle = styled.div`
    /* color: white; */
    text-align:center;
    /* font-size: 40px; */
    font-size: 50px;
    font-weight:600;
    padding:40px;

    @media only screen and (max-width:768px){
        /* padding:0; */
        /* font-size: 26px; */
        font-size: 32px;
    }
`;

const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
}

const YoutubePlayPart = (props) => {
    const youtubeContainerRef = useRef();
    const player = useRef();
    const [myOffsetTop, setMyOffsetTop] = useState(0);
    const [floatingClose, setFloatingClose] = useState(false);

    useEffect(() => {
        setFloatingClose(false);
    }, [])
    useEffect(() => {

        setMyOffsetTop(youtubeContainerRef.current.offsetTop);
    }, [props.scrollY])

    const handleFloatingClose = () => {
        player.current.getInternalPlayer().pauseVideo();
        setFloatingClose(true);
    }
    return (
        <>
            <Container ref={youtubeContainerRef}>
                <ContainerTitle><span style={{color:'#ee5470', fontWeight:'800'}}>VIDEOS</span></ContainerTitle>
                <div className='container-fluid'>
                    <div className='row'>
                        {/* <ItemBox className='col-sm-6'>
                            <ItemTitle>
                                <span className='titleEl'><b className='funnyland-gradient'>Funnyland</b> x <b className='workman-text'>Workman</b></span>
                            </ItemTitle>            
                        </ItemBox> */}
                        {props.videoList.map(r => {
                            if (r.videoDisplay == 1) {
                                return (
                                    <YoutubeBox
                                        key={r.videoId}
                                        className='col-sm-6'
                                        scroll_y={props.scrollY}
                                        offset_top={myOffsetTop}
                                        floating_close={floatingClose}
                                    >
                                        {props.scrollY && myOffsetTop && props.scrollY >= myOffsetTop - document.documentElement.clientHeight ? '' :
                                            <div className='clearfix'>
                                                <span className='titleEl'><b className='funnyland-gradient'>Funnyland</b> x {r.videoName}</span>
                                                <button type='button' className='float-right' style={{ border: 'none', background: 'none', color: 'gray', fontSize:'25px' }} onClick={() => handleFloatingClose()}><FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></button>
                                            </div>
                                        }
                                        <YouTube 
                                            ref={player} 
                                            // videoId="-F28Byn1bbU" 
                                            videoId={r.videoKey}
                                            opts={opts} onReady={_onReady} className='youtube-player-el' containerClassName='youtube-player-box' />
                                            {props.scrollY && myOffsetTop && props.scrollY >= myOffsetTop - document.documentElement.clientHeight ? 
                                                <VideoBottomTitle>{r.videoName}</VideoBottomTitle>
                                                :
                                                ''
                                            }
                                            
                                    </YoutubeBox>
                                );
                            } else {
                                return (
                                    <VideoPlayerBox
                                        key={r.videoId}
                                        className='col-sm-6'
                                    >
                                        <YouTube 
                                            ref={player} 
                                            // videoId="-F28Byn1bbU" 
                                            videoId={r.videoKey}
                                            opts={opts} onReady={_onReady} className='youtube-player-el' containerClassName='youtube-player-box' />
                                            <VideoBottomTitle>{r.videoName}</VideoBottomTitle>
                                    </VideoPlayerBox>
                                )
                            }
                        })}


                    </div>
                </div>
            </Container>
        </>
    );
}

export default YoutubePlayPart;