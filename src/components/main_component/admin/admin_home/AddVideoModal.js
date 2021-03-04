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

const AddVideoModal = (props) => {
    return (
        <>
            <Dialog
                fullWidth={true}
                open={props.modalOpen}
                onClose={() => props.handleVideoEventControl().addVideoModalClose()}
            >
                <DialogTitle className='text-center'>{"동영상 추가"}</DialogTitle>
                <form onSubmit={(e) => props.handleVideoEventControl().addVideoDataSubmit(e)}>
                    <DialogContent>
                        <div className="form-group">
                            <label>동영상 이름</label>
                            <input type="text" className="form-control" name='videoName' value={props.addVideoData.videoName} onChange={(e) => props.handleVideoEventControl().addVideoDataOnValueChange(e)} placeholder="구분하실 동영상 이름을 지정해주세요." required="required" />
                        </div>
                        <div className="form-group">
                            <label>유튜브 키</label>
                            <input type="text" className="form-control" name='videoKey' value={props.addVideoData.videoKey} onChange={(e) => props.handleVideoEventControl().addVideoDataOnValueChange(e)} placeholder="동영상의 유튜브 키를 지정해주세요." required="required" />
                            <small className="form-text text-muted">유튜브에 업로드된 영상의 키값을 가져와서 등록해주세요.</small>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' color="secondary" onClick={() => props.handleVideoEventControl().addVideoModalClose()}>
                            취소
                    </Button>
                        <Button type='submit' color="primary">
                            동영상 등록
                    </Button>
                    </DialogActions>
                </form>

            </Dialog>
        </>
    );
}

export default AddVideoModal;