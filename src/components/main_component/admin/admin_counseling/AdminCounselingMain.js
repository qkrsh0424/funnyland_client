import { useEffect ,useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

// data connect
import {counselingDataConnect} from '../../../data_connect/CounselingDataConnect';

// handler
import {dateToYYYYMMDD,dateToYYYYMMDD_hhmmss} from '../../../../handler/MyHandlers';
import { handleScrollToTop } from '../../../../handler/ScrollHandler';

// components
import AdminNav from '../admin_nav/AdminNav';
import PageableComponent from './PageableComponent';
const Container = styled.div`

`;

const ListContainer = styled.div`
    /* padding:2%; */
`;

const ListWrapper = styled.div`
    position:relative;
    border:1px solid #a1a1a1;
    border-radius:5px;
    padding:8px;
    margin: 15px 0;
`;

const ListWrapperBlind = styled.div`
    position:absolute;
    left:0;
    top:50px;
    width:100%;
    height:calc(100% - 50px);
    background-color:#91919180;
    background: repeating-linear-gradient(45deg, #44444430, #44444430 10px, #88888830 0, #88888830 20px);
    z-index:2;
`;

const ListTextField = styled.div`
    font-size:12px;
    font-weight:600;
    padding:5px;
    border-bottom:1px dotted #818181;
    /* border-radius:3px; */
`;

const AdminCounselingMain = ({match,location,history}) =>{
    
    // Login Check Start
    const [isLoged, setIsLoged] = useState(false);
    useEffect(() => {
        async function effectInit() {
            await handleCheckLoged();
        }
        effectInit();
    }, []);
    
    const handleCheckLoged = async () => {
        await axios.get('/api/auth/check/loged')
            .then(res => {
                if (res.data.message == 'success') {
                    setIsLoged(true);
                    return;
                } else {
                    history.push('/login')
                }
            });
    }
    // Login Check End

    const [counselingData, setCounselingData] = useState(null);
    const [counselingPage, setCounselingPage] = useState(null);

    useEffect(()=>{
        async function fetchInit() {
            if(isLoged){
                await __handleDataConnect().getCounselingList();
                handleScrollToTop();
                // console.log('heoo')
            }
        }

        fetchInit();
        
    },[isLoged, location])

    const __handleDataConnect = () =>{
        return {
            getCounselingList : async function(){
                let data = await counselingDataConnect().searchCounselingAll();
                // console.log(data);
                if(data){
                    if(data.message == 'success'){
                        setCounselingData(data.data);
                        setCounselingPage(data.page);
                    }else if(data.message == 'not_auth'){
                        alert('관리자 권한이 없습니다.');
                        history.push('/');
                    }else if(data.message == 'user_invalid'){
                        alert('로그인 세션이 만료되었습니다.');
                        history.push('/admin');
                    }
                }else{
                    alert('undefined error');
                }
            },
            setCounselingAdminCheck: function(){
                return {
                    setCheck: async function(id){
                        let data = counselingData.filter(r=>r.id==id)[0];
                        data.adminChecked = 1;
                        let resData = await counselingDataConnect().updateCounselingOne(data);
                        if(resData){
                            await __handleDataConnect().getCounselingList();
                        }
                    },
                    setUnCheck: async function(id){
                        let data = counselingData.filter(r=>r.id==id)[0];
                        data.adminChecked = 0;
                        let resData = await counselingDataConnect().updateCounselingOne(data);
                        if(resData){
                            await __handleDataConnect().getCounselingList();
                        }
                    }
                }
            },
            deleteCounselingOne: async function(id){
                let data = counselingData.filter(r=>r.id==id)[0];
                let resData = await counselingDataConnect().deleteCounselingOne(data);
                if(resData && resData.message == 'success'){
                    alert('삭제되었습니다.');
                    await __handleDataConnect().getCounselingList();
                }
            }
        }
    }

    const AdminCheckBtnProp = (props) =>{
        if(props.checked==0){
            return <button className='btn btn-sm btn-outline-danger' onClick={()=>__handleDataConnect().setCounselingAdminCheck().setCheck(props.id)}>미확인</button>
        }else{
            return <button className='btn btn-sm btn-outline-primary' onClick={()=>__handleDataConnect().setCounselingAdminCheck().setUnCheck(props.id)}>확인됨</button>
        }
    }

    return(
        isLoged? 
        <>
            <Container>
                <AdminNav></AdminNav>
                <ListContainer className='container-fluid'>
                    {counselingPage && counselingData ? counselingData.map((r,index)=>{
                        let itemIndex = counselingPage.displaySize*(counselingPage.curr-1)+index+1;
                        return(
                            <ListWrapper key={`${r.id}-${itemIndex}`}>
                                {r.adminChecked == 1 ? <ListWrapperBlind></ListWrapperBlind> : ''}
                                <ListTextField>
                                    <span style={{padding:'0 5px'}}>
                                        {itemIndex}-{r.id}
                                    </span>
                                    {r.counselingType=='counseling'?
                                        <span style={{padding:'0 5px', color:'#6060d4'}}>가맹상담</span>
                                    :''}
                                    {r.counselingType=='rental'?
                                        <span style={{padding:'0 5px', color:'#0d88f5'}}>임대상담</span>
                                    :''}
                                    {r.counselingType=='purchase'?
                                        <span style={{padding:'0 5px', color:'#29b529'}}>상품상담</span>
                                    :''}
                                    {r.counselingType=='etc'?
                                        <span style={{padding:'0 5px', color:'#e25555'}}>기타상담</span>
                                    :''}
                                    {r.counselingType=='renewal'?
                                        <span style={{padding:'0 5px', color:'#c31ec3'}}>리뉴얼상담</span>
                                    :''}
                                    <span style={{padding:'0 5px'}}>
                                        <AdminCheckBtnProp 
                                            id={r.id}
                                            checked={r.adminChecked}
                                        >
                                        </AdminCheckBtnProp>
                                    </span>
                                    {r.adminChecked ? <span style={{padding:'0 5px'}}><button className='btn btn-sm btn-danger' onClick={()=>__handleDataConnect().deleteCounselingOne(r.id)}>삭제</button></span> :''}
                                </ListTextField>
                                <div className='row'>
                                    <div className='col-sm-12'>
                                        <ListTextField>상담 등록일 : {dateToYYYYMMDD_hhmmss(r.createdAt)}</ListTextField>
                                    </div>
                                    <div className='col-sm-4'>
                                        <ListTextField>신청자 : {r.applierName}</ListTextField>
                                        <ListTextField>전화번호 : {r.applierPhone}</ListTextField>
                                    </div>
                                    <div className='col-sm-4'>
                                        <ListTextField>희망지역 : {r.applierArea}</ListTextField>
                                        {/* <ListTextField>주소 : {r.address}</ListTextField> */}
                                        <ListTextField>점포층수 : {r.floor}</ListTextField>
                                    </div>
                                    <div className='col-sm-4'>
                                        <ListTextField>오픈예정일 : {r.openDate == null? '' : dateToYYYYMMDD(r.openDate)}</ListTextField>
                                    </div>
                                    <div className='col-sm-12'>
                                        <ListTextField>
                                            <div>기타문의내용</div>
                                            <div>{r.desc}</div>
                                        </ListTextField>
                                    </div>
                                </div>
                                
                            </ListWrapper>
                        )
                    })
                    :
                    <></>
                    }
                </ListContainer>
                {counselingPage ? <PageableComponent
                    defaultUrl={'/admin/counseling'}
                    pageData={counselingPage}
                ></PageableComponent>
                :<></>}
                
            </Container>
        </>
        :
        <></>
    );
}

export default AdminCounselingMain;