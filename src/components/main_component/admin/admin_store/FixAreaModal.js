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

const FixAreaModal = (props) => {
    return (
        <>
            <Dialog
                fullWidth={true}
                open={props.modalOpen}
                onClose={() => props.handleAreaEventControl().fixModalClose()}
            >
                <DialogTitle className='text-center'>{"지역 추가"}</DialogTitle>
                <form onSubmit={(e) => props.handleAreaEventControl().fixModalSubmit(e)}>
                    <DialogContent>
                        <div className="form-group">
                            <label>지역명</label>
                            <input type="text" className="form-control" name='areaName' value={props.fixAreaData.areaName} onChange={(e) => props.handleAreaEventControl().fixAreaDataOnChange(e)} placeholder="등록하실 카테고리명을 지정해주세요." required="required" />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button type='button' color="secondary" onClick={() => props.handleAreaEventControl().fixModalClose()}>
                            취소
                        </Button>
                        <Button type='submit' color="primary">
                            지역 등록
                    </Button>
                    </DialogActions>
                </form>

            </Dialog>
        </>
    );
}

export default FixAreaModal;