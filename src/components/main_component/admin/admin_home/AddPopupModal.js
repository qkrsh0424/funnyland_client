import styled from 'styled-components';
// material
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const DialogTitle = styled.div`
    font-size:22px;
    font-weight:600;
    text-align:center;
    padding:12px;
    border-bottom:1px solid #f1f1f1;
    margin-bottom:8px;
`;

const ImageBox = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-bottom:1px solid #f1f1f1;
    
`;

const ImageEl = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background: linear-gradient(to bottom right, #ee5470, #f8bac9); */
    
    border-radius:15px;
`;

const Image = styled.img`
    width:100%;
    height:100%;
    /* border: 1px solid black; */
    /* border-radius:15px; */
    object-fit: cover;
`;

const AddVideoModal = (props) => {
    return (
        <>
            <Dialog
                fullWidth={true}
                open={props.modalOpen}
                // onClose={() => props.handlePopupEventControl().addPopupModalClose()}
            >
                <DialogTitle className='text-center'>{"팝업 추가"}</DialogTitle>
                <form onSubmit={(e) => props.handlePopupEventControl().addPopupDataSubmit(e)}>
                    <DialogContent>
                        <div className="form-group">
                            <label>팝업 이름</label>
                            <input type="text" className="form-control" name='popupName' value={props.addPopupData.popupName} onChange={(e) => props.handlePopupEventControl().addPopupDataOnValueChange(e)} placeholder="구분하실 팝업 이름을 지정해주세요." required="required" />
                        </div>
                        <div className="form-group">
                            <label>팝업 URL</label>
                            <input type="text" className="form-control" name='popupUrl' value={props.addPopupData.popupUrl} onChange={(e) => props.handlePopupEventControl().addPopupDataOnValueChange(e)} placeholder="팝업 클릭시 이동시킬 url을 등록해주세요." required="required" />
                        </div>
                        <div className="form-group">

                        </div>
                        <div className="form-group">
                            <label>팝업 이미지 (4:3 권장)</label>
                            <input hidden id='i_popup_image_uploader' name='popupImageUrl' type="file" className="form-control" accept="image/*" onChange={(e) => props.handlePopupEventControl().uploadImage(e)} placeholder="팝업에 보여주실 이미지를 등록해주세요." />
                            {props.addPopupData.popupImageUrl ?
                                <>
                                    <ImageBox>
                                        <ImageEl>
                                            <Image src={props.addPopupData.popupImageUrl} style={{cursor:'pointer'}} onClick={()=>document.getElementById('i_popup_image_uploader').click()}></Image>
                                        </ImageEl>
                                    </ImageBox>
                                </>
                                :
                                <div>
                                    <button type='button' className='btn btn-lg' style={{border:'1px solid #a1a1a1'}} onClick={()=>document.getElementById('i_popup_image_uploader').click()}>팝업 이미지 등록</button>
                                </div>
                            }
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' color="secondary" onClick={() => props.handlePopupEventControl().addPopupModalClose()}>
                            취소
                        </Button>
                        <Button type='submit' color="primary">
                            팝업 등록
                        </Button>
                    </DialogActions>
                </form>

            </Dialog>
        </>
    );
}

export default AddVideoModal;