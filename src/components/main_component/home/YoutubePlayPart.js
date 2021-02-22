import styled from 'styled-components';
import YouTube from 'react-youtube';
const Container = styled.div`
    padding-bottom: 20px;
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
`;

const ItemBox = styled.div`
    position:relative;
    min-height:150px;
    padding-top:15px;
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

const YoutubePlayPart = () => {
    return (
        <>
            <Container>
                
                <div className='container-fluid'>
                    <div className='row'>
                        <ItemBox className='col-sm-6'>
                            <ItemTitle>
                                <span className='titleEl'><b className='funnyland-gradient'>Funnyland</b> x <b className='workman-text'>Workman</b></span>
                            </ItemTitle>            
                        </ItemBox>
                        <ItemBox className='col-sm-6'>
                            <YouTube videoId="-F28Byn1bbU" opts={opts} onReady={_onReady} className='youtube-player-el' containerClassName='youtube-player-box' />
                        </ItemBox>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default YoutubePlayPart;