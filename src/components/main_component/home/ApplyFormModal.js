import { useState } from 'react';
import styled from 'styled-components';

// material
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

// data connect
import { counselingDataConnect } from '../../data_connect/CounselingDataConnect';

const DialogTitle = styled.div`
    font-size:22px;
    font-weight:600;
    text-align:center;
    padding:12px;
    border-bottom:1px solid #f1f1f1;
    margin-bottom:8px;
`;
const ApplyFormModal = (props) => {
    const {
        dialogOpen
    } = props;

    const {
        mainHandleDialogControl
    } = props;

    const [counselingType, setCounselingType] = useState('counseling');
    const [applierName, setApplierName] = useState('');
    const [applierPhone, setApplierPhone] = useState('');
    const [applierArea, setApplierArea] = useState('');
    const [privacyAgreeChecked, setPrivacyAgreeChecked] = useState(false);

    const thisHandleValueOnChange = () => {
        return {
            changeCounselingType: function(e){
                setCounselingType(e.target.value);
            },
            changeApplierName: function (e) {
                setApplierName(e.target.value);
            },
            changeApplierPhone: function (e) {
                setApplierPhone(e.target.value);
            },
            changeApplierArea: function (e) {
                setApplierArea(e.target.value);
            },
            changePrivacyAreeChecked: function(e){
                setPrivacyAgreeChecked(e.target.checked);
            },
            allClear: function () {
                setApplierName('');
                setApplierPhone('');
                setApplierArea('');
                setPrivacyAgreeChecked(false);
            }
        }
    }

    const thisHandleClose = () => {
        mainHandleDialogControl().close();
        thisHandleValueOnChange().allClear();
    }

    const thisHandleFormSubmit = async (e) => {
        e.preventDefault();
        if(privacyAgreeChecked!=true){
            alert('개인정보 수집 동의에 체크해주세요');
            return;
        }
        let jsonData = {
            counselingType:counselingType,
            applierName: applierName,
            applierPhone: applierPhone,
            applierArea: applierArea,
            privacyAgreement:privacyAgreeChecked?'동의':'비동의'
        };
        await counselingDataConnect().insertCounselingOne(jsonData)
            .then(data => {
                if (data.message == 'success') {
                    alert('상담이 신청되었습니다.');
                    thisHandleClose();
                }
            });
    }

    return (
        <Dialog
            fullWidth={true}
            open={dialogOpen}
            onClose={thisHandleClose}
        >
            <DialogTitle className='text-center'>{"신속한 상담신청"}</DialogTitle>
            <form onSubmit={(e) => thisHandleFormSubmit(e)}>
                <DialogContent>
                    <div className="form-group">
                        <label htmlFor="i_counseling_type">상담구분</label>
                        <select className="form-control" defaultValue={counselingType} onChange={(e)=>thisHandleValueOnChange().changeCounselingType(e)}>
                            <option value='counseling'>창업상담</option>
                            <option value='purchase'>상품구매상담</option>
                            <option value='closed'>폐업상담</option>
                            <option value='renewal'>매장리뉴얼상담</option>
                        </select>
                        {/* <input type="text" value={applierName} onChange={(e) => thisHandleValueOnChange().changeCounselingType(e)} className="form-control" placeholder="이름을 입력해주세요." required="required" /> */}
                    </div>
                    <div className="form-group">
                        <label>이름</label>
                        <input type="text" value={applierName} onChange={(e) => thisHandleValueOnChange().changeApplierName(e)} className="form-control" placeholder="이름을 입력해주세요." required="required" />
                    </div>
                    <div className="form-group">
                        <label>연락처</label>
                        <input type="text" value={applierPhone} onChange={(e) => thisHandleValueOnChange().changeApplierPhone(e)} className="form-control" placeholder="'-' 를 제외한 연락처를 입력해주세요." required="required" />
                    </div>
                    <div className="form-group">
                        <label>희망지역 or 상품설치지역</label>
                        <input type="text" value={applierArea} onChange={(e) => thisHandleValueOnChange().changeApplierArea(e)} className="form-control" placeholder="지역을 입력해주세요." required="required" />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={privacyAgreeChecked} onChange={(e)=>thisHandleValueOnChange().changePrivacyAreeChecked(e)} required/>
                        <label className="form-check-label">
                            개인정보 수집 동의
                        </label>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button type='button' onClick={thisHandleClose} color="secondary">
                        취소
                    </Button>
                    <Button type='submit' color="primary">
                        문의등록
                    </Button>
                </DialogActions>
            </form>

        </Dialog>
    )
}
ApplyFormModal.defaultProps = {
}
export default ApplyFormModal;