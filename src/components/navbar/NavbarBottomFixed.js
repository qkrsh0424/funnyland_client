import styled from 'styled-components';

const Container = styled.div`
    position:fixed;
    bottom:0;
    width:100%;
    background-color:#00000094;
    padding:10px;
    overflow:hidden;

    & .text-strong{
        /* color:#f8bac9; */
        color:#ee5470;
        /* text-shadow: -1px 0 #ee5470, 0 1px #ee5470, 1px 0 #ee5470, 0 -1px #ee5470;
        -moz-text-shadow: -1px 0 #ee5470, 0 1px #ee5470, 1px 0 #ee5470, 0 -1px #ee5470;
        -webkit-text-shadow: -1px 0 #ee5470, 0 1px #ee5470, 1px 0 #ee5470, 0 -1px #ee5470; */
    }
`;

const TextEl = styled.div`
    color: white;
    font-size:19px;
    font-weight:500;
    @media only screen and (max-width: 768px){
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
        font-size:11px;
    }
`;
const NavbarBottomFixed = (props) =>{
    const {
        mainHandleDialogControl
    } = props;
    return(
        <Container id='i_bottom_fixed_nav'>
            <div className="row">
                <div className="col-6 text-center">
                    <TextEl className="text-center">성공적인 오락실 창업은</TextEl>
                    <TextEl className="text-center"><b className='text-strong'>퍼니랜드</b>와 함께</TextEl>
                    <TextEl className="text-center">시작해 보세요</TextEl>
                    
                </div>
                <div className="col-6 text-center">
                    <TextEl><b className='text-strong'>무료창업상담</b> : <b>02-2272-1244</b></TextEl>
                    <ButtonEl type="button" className="btn btn-sm" style={{borderColor:'white', background:'#ee5470'}} onClick={()=>mainHandleDialogControl().open()}>문의하기</ButtonEl>
                    <ButtonEl type="button" className="btn btn-sm btn-outline-warning" style={{borderColor:'white', background:'#f7734a', color:'white'}}>Tel.</ButtonEl>
                </div>
                
            </div>
        </Container>
    )
}

export default NavbarBottomFixed;