import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
const Container = styled.div`
    position:fixed;
    bottom:0;
    width:100%;
    background-color:#00000094;
    padding:10px;
    overflow:hidden;
    z-index:999;

    & .text-strong{
        /* color:#f8bac9; */
        color:#ee5470;
        /* text-shadow: 
            -1px 0 #ffffff, 0 1px #ffffff, 1px 0 #ffffff, 0 -1px #ffffff,
            -1.5px 0 #ee5470, 0 1.5px #ee5470, 1.5px 0 #ee5470, 0 -1.5px #ee5470;
        -moz-text-shadow: 
            -1px 0 #ffffff, 0 1px #ffffff, 1px 0 #ffffff, 0 -1px #ffffff,
            -1px 2px #ee5470, 2px 1px #ee5470, 1px 2px #ee5470, 2px -1px #ee5470;
        -webkit-text-shadow: 
            -1px 0 #ffffff, 0 1px #ffffff, 1px 0 #ffffff, 0 -1px #ffffff,
            -1px 2px #ee5470, 2px 1px #ee5470, 1px 2px #ee5470, 2px -1px #ee5470; */
    }
`;

const TextEl = styled.div`
    color: white;
    font-size:19px;
    font-weight:700;
    margin-bottom:5px;
    @media only screen and (max-width: 768px){
        font-size:14px;
    }
    @media only screen and (max-width: 320px){
        font-size:11px;
    }
`;

const ButtonEl = styled.button`
    color: white;
    font-size:21px;
    font-weight:500;
    margin:8px;

    &:hover{
        color:white;
        background:#f8bac9;
    }
    @media only screen and (max-width: 768px){
        font-size:16px;
    }
    
`;

const TelLink = styled.a`
    display:inline-block;
    padding:0 5px;
    color:white;
    border:1px solid #f1f1f1;
    border-radius:25%;
    &:hover{
        text-decoration:none;
        color:white;
    }
`;

const ButtonEl2 = styled.button`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    color: white;
    font-size:21px;
    font-weight:500;
    margin:0;
    padding:3px 5px;
    border:1px solid white; 
    border-radius:5px;
    background:#ee5470;
    @media only screen and (max-width: 768px){
        font-size:16px;
    }
    @media only screen and (max-width: 320px){
        font-size:13px;
    }
`;
const NavbarBottomFixed = (props) => {
    const {
        mainHandleDialogControl
    } = props;
    return (
        <Container id='i_bottom_fixed_nav' className='clearfix'>
            {/* <div className="row">
                <div className="col-6 text-center">
                    <TextEl className="text-center">성공적인 오락실 창업은</TextEl>
                    <TextEl className="text-center"><b className='text-strong'>퍼니랜드</b>와 함께</TextEl>
                    <TextEl className="text-center">시작해 보세요</TextEl>
                    
                </div>
                <div className="col-6 text-center">
                    <TextEl className='text-center'><b className='text-strong'>무료창업상담</b> : <b>02-2272-1244</b></TextEl>
                    <ButtonEl type="button" className="btn btn-sm" style={{borderColor:'white', background:'#ee5470'}} onClick={()=>mainHandleDialogControl().open()}>문의하기</ButtonEl>
                    <ButtonEl type="button" className="btn btn-sm btn-outline-warning" style={{borderColor:'white', background:'#f7734a', color:'white'}}>Tel.</ButtonEl>
                </div>
            </div> */}
            {/* <div className='row'>
                <div className='col-6'>
                    <TextEl className="text-center">성공적인 오락실 창업은 <b className='text-strong'>퍼니랜드</b>와 함께 !</TextEl>
                </div>
                <div className='col-6'>
                    <TextEl className='text-center'><b className='text-strong'>무료창업상담</b> <br/> <b>02-2272-1244</b></TextEl>
                </div>
                <div className='col-12'>
                    <div className='text-center'>
                        <ButtonEl type="button" className="btn btn-sm" style={{ borderColor: 'white', background: '#ee5470' }} onClick={() => mainHandleDialogControl().open()}>문의하기</ButtonEl>
                        <ButtonEl type="button" className="btn btn-sm btn-outline-warning" style={{ borderColor: 'white', background: '#f7734a', color: 'white' }}>Tel.</ButtonEl>
                    </div>
                </div>
            </div> */}
            {/* <div> */}
                
                {/* <div className='float-right'>
                    <ButtonEl type="button" className="btn btn-sm" style={{borderColor:'white', background:'#ee5470'}} onClick={()=>mainHandleDialogControl().open()}>문의하기</ButtonEl> */}
                    {/* <ButtonEl type="button" className="btn btn-sm btn-outline-warning" style={{borderColor:'white', background:'#f7734a', color:'white'}}><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></ButtonEl> */}
                {/* </div> */}
                {/* <div className=''>
                    <TextEl className="text-center">성공적인 오락실 창업은 <b className='text-strong'>퍼니랜드</b>와 함께 ! <ButtonEl2>문의하기</ButtonEl2></TextEl>
                    <TextEl className='text-center'><b className='text-strong'>무료상담</b> : <b>02-2272-1244 <TelLink href='tel:02-2272-1244'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></TelLink></b></TextEl>
                </div>
            </div> */}
            <div className='row'>
                <div className='col-9' style={{paddingRight:'0'}}>
                    <TextEl className="text-center">오락실 창업은 최고의 파트너 <b className='text-strong'>퍼니랜드</b>와 함께 !</TextEl>
                    <TextEl className='text-center'><b className='text-strong'>무료상담</b> : <b>02-2272-1244 <TelLink href='tel:02-2272-1244'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></TelLink></b></TextEl>
                </div>
                <div className='col-3' style={{paddingLeft:'0', textAlign:'center', position:'relative'}}>
                    <ButtonEl2 type="button" onClick={()=>mainHandleDialogControl().open()}>문의하기</ButtonEl2>
                {/* <ButtonEl type="button" className="btn btn-sm" style={{borderColor:'white', background:'#ee5470'}} onClick={()=>mainHandleDialogControl().open()}>문의하기</ButtonEl> */}
                </div>
            </div>
        </Container>
    )
}

export default NavbarBottomFixed;