import { useEffect, useState } from 'react';
import styled from 'styled-components';

// DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// data connector
import {counselingDataConnect} from '../../../data_connect/CounselingDataConnect';

// components
import NavbarDynamic from '../../../navbar/NavbarDynamic';
import FooterDefault from '../../../footer_offer/FooterDefault';
import NavbarBottomFixed from '../../../navbar/NavbarBottomFixed';
import ApplyFormModal from '../../home/ApplyFormModal';
import FoundTopLayout from '../layout/FoundTopLayout';
// handler
import { handleScrollToTop } from '../../../../handler/ScrollHandler';

const Container = styled.div`

`;

const MainTitleBox = styled.div`
    margin-top:70px;
`;
const MainTitle = styled.div`
    text-align:center;
    font-size:42px;
    font-weight:800;
`;

const MainTitleSub = styled.div`
    text-align:center;
    font-size:22px;
    font-weight:600;
`;

const ExplainEl = styled.div`
    text-align:center;
    font-size:22px;
    font-weight:600;
`;
const LineBreaker1 = styled.div`
    width: 55px;
    height: 5px;
    margin: 30px auto 45px;
    background-color: #ee5470;
`;

const ApplicationContainer = styled.div`
    margin-bottom:150px;
    .react-datepicker-wrapper{
        width:100%;
    }
`;

const ApplicationInput = styled.input`
    -webkit-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    -moz-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    -ms-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    -o-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    width:100%;
    padding: 8px 12px;
    border:1px solid #d1d1d1;
    border-radius:2px;
    &:focus{
        outline: none;
        box-shadow: 0 0 5px #f8bac9;
        border: 1px solid #f8bac9;
    }
`;
const ApplicationSelect = styled.select`
    -webkit-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    -moz-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    -ms-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    -o-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    width:100%;
    padding: 8px 12px;
    border:1px solid #d1d1d1;
    border-radius:2px;
    &:focus{
        outline: none;
        box-shadow: 0 0 5px #f8bac9;
        border: 1px solid #f8bac9;
    }
`;

const ApplicationTextarea = styled.textarea`
    -webkit-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    -moz-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    -ms-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    -o-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    width:100%;
    min-height:150px;
    padding: 8px 12px;
    border:1px solid #d1d1d1;
    border-radius:2px;
    &:focus{
        outline: none;
        box-shadow: 0 0 5px #f8bac9;
        border: 1px solid #f8bac9;
    }
`;

const ApplicationSubmitBtn = styled.button`
    font-weight:600;
    color:white;
    background-color:#f7734a;
    border:1px solid white;
    box-shadow: 0 0 11px rgba(33,33,33,.4);
    padding:15px 70px;
    border-radius:5px;
    &:hover{
        border:1px solid white;
        background-color:#ee5470;
        color:white;
        box-shadow: 0 0 31px rgba(33,33,33,.4);
    }
`;

const ApplicationDatePicker = styled(DatePicker)`
    -webkit-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    -moz-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    -ms-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    -o-transition: box-shadow 0.30s, border-color 0.30s ease-in-out;
    width:100%;
    padding: 8px 12px;
    border:1px solid #d1d1d1;
    border-radius:2px;
    &:focus{
        outline: none;
        box-shadow: 0 0 5px #f8bac9;
        border: 1px solid #f8bac9;
    }
`;
const FoundIntro2Main = () => {
    useEffect(() => {
        handleScrollToTop();
    }, []);

    const [dialogOpen, setDialogOpen] = useState(false);
    const mainHandleDialogControl = () => {
        return {
            open: () => {
                setDialogOpen(true);
            },
            close: function () {
                setDialogOpen(false);
            }
        }
    }
    const [counselingType, setCounselingType] = useState('counseling');
    const [applierName, setApplierName] = useState('');
    const [applierPhone, setApplierPhone] = useState('');
    const [applierArea, setApplierArea] = useState('');
    const [address, setAddress] = useState('');
    const [floor, setFloor] = useState('');
    const [openDate, setOpenDate] = useState('');
    const [desc, setDesc] = useState('');
    const [privacyAgreement, setPrivacyAgreement] = useState(false);

    const handleApplicationSubmit = async (event) =>{
        event.preventDefault();
        let json = {
            'counselingType':counselingType,
            'applierName':applierName,
            'applierPhone':applierPhone,
            'applierArea':applierArea,
            'address':address,
            'floor':floor,
            'openDate':openDate,
            'desc':desc,
            'privacyAgreement':privacyAgreement ? '동의' : '비동의'
        }
        await counselingDataConnect().insertCounselingOne(json)
        .then(data=>{
            if(data.message=='success'){
                alert('상담이 신청되었습니다.');
                window.location.reload();
            }
        })
        console.log(json);
    }

    return (
        <>
            <NavbarDynamic></NavbarDynamic>
            <FoundTopLayout
                title={'창업상담신청'}
                linkPage={'intro2'}
            ></FoundTopLayout>
            {/* BODY START */}
            <>
                <Container>
                    <MainTitleBox>
                        <MainTitle>
                            FRANCHISE INQUIRY
                        </MainTitle>
                        <MainTitleSub>창업상담신청</MainTitleSub>
                        <LineBreaker1></LineBreaker1>
                    </MainTitleBox>
                    <ApplicationContainer className='container'>
                        <form onSubmit={(e)=>handleApplicationSubmit(e)}>
                            <div className='clearfix'>
                                <p className='float-right'><span className='text-danger'>*</span> 는 필수 선택입니다.</p>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12 mt-2 mb-2'>
                                    <label className='pl-1'>상담구분 <span className='text-danger'>*</span></label>
                                    <ApplicationSelect defaultValue={counselingType} onChange={(e)=>setCounselingType(e.target.value)} disabled>
                                        <option value='counseling'>창업상담</option>
                                        <option value='purchase'>상품구매상담</option>
                                    </ApplicationSelect>
                                </div>
                                <div className='col-sm-6 mt-2 mb-2'>
                                    <label className='pl-1'>이름 <span className='text-danger'>*</span></label>
                                    <ApplicationInput type='text' name='applierName' placeholder='이름을 입력해주세요.' value={applierName} onChange={(e)=>setApplierName(e.target.value)} required></ApplicationInput>
                                </div>
                                <div className='col-sm-6 mt-2 mb-2'>
                                    <label className='pl-1'>연락처 <span className='text-danger'>*</span></label>
                                    <ApplicationInput type='text' name='applierPhone' placeholder="'-'를 제외한 연락처를 입력해주세요." value={applierPhone} onChange={(e)=>setApplierPhone(e.target.value)} required></ApplicationInput>
                                </div>
                                <div className='col-12 mt-2 mb-2'>
                                    <label className='pl-1'>주소</label>
                                    <ApplicationInput type='text' name='address' placeholder='주소를 입력해주세요.' value={address} onChange={(e)=>setAddress(e.target.value)}></ApplicationInput>
                                </div>
                                <div className='col-sm-4 mt-2 mb-2'>
                                    <label className='pl-1'>희망지역 <span className='text-danger'>*</span></label>
                                    <ApplicationInput type='text' name='applierArea' placeholder='희망지역을 입력해주세요.' value={applierArea} onChange={(e)=>setApplierArea(e.target.value)} required></ApplicationInput>
                                </div>
                                <div className='col-sm-4 mt-2 mb-2'>
                                    <label className='pl-1'>층수</label>
                                    <ApplicationInput type='text' name='floor' placeholder='점포 층수를 입력해주세요.' value={floor} onChange={(e)=>setFloor(e.target.value)}></ApplicationInput>
                                </div>
                                <div className='col-sm-4 mt-2 mb-2'>
                                    <label className='pl-1'>희망오픈일</label>
                                    <ApplicationDatePicker 
                                        dateFormat="yyyy년 MM월 dd일"
                                        placeholderText="희망오픈일 선택"
                                        selected={openDate} onChange={date=>setOpenDate(date)} strictParsing></ApplicationDatePicker>
                                </div>
                                <div className='col-sm-12 mt-2 mb-2'>
                                    <label className='pl-1'>내용</label>
                                    <ApplicationTextarea placeholder='기타 전하실 말씀을 입력해주시면 원할한 상담에 도움이 됩니다.' name='desc' value={desc} onChange={(e)=>setDesc(e.target.value)}></ApplicationTextarea>
                                </div>
                            </div>
                            <div className='mt-2 mb-2 form-check'>
                                <p>개인정보 수집 동의 <span className='text-danger'>*</span></p>
                                <input type="checkbox" checked={privacyAgreement} name='privacyAgreement' onChange={(e)=>setPrivacyAgreement(!privacyAgreement)} required></input>
                                <label className='pl-3'>동의합니다.</label>
                            </div>
                            <div className='text-center mt-3'>
                                <ApplicationSubmitBtn type='submit'>신청하기</ApplicationSubmitBtn>
                            </div>
                            
                        </form>
                    </ApplicationContainer>
                </Container>
            </>
            {/* BODY END */}
            <FooterDefault></FooterDefault>
            <NavbarBottomFixed
                mainHandleDialogControl={mainHandleDialogControl}
            ></NavbarBottomFixed>
            <ApplyFormModal
                dialogOpen={dialogOpen}

                mainHandleDialogControl={mainHandleDialogControl}
            >
            </ApplyFormModal>
        </>
    );
}

export default FoundIntro2Main;