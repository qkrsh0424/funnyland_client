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

const FixCategoryModal = (props) => {
    return (
        <>
            <Dialog
                fullWidth={true}
                open={props.modalOpen}
                onClose={() => props.handleModalControl().close()}
            >
                {props.fixCategoryData ? <>
                    <DialogTitle className='text-center'>{"카테고리 수정"}</DialogTitle>
                    <form onSubmit={(e) => props.handleModalControl().submit(e)}>
                        <DialogContent>
                            <div className="form-group">
                                <label>카테고리명</label>
                                <input type="text" className="form-control" name='categoryName' value={props.fixCategoryData.categoryName} onChange={(e) => props.handleModalControl().categoryDataOnChange(e)} placeholder="등록하실 카테고리명을 지정해주세요." required="required" />
                            </div>
                            <div className="form-group">
                                <label>카테고리 우선도</label>
                                <input type="number" className="form-control" name='priority' value={props.fixCategoryData.priority} onChange={(e) => props.handleModalControl().categoryDataOnChange(e)} placeholder="카테고리 우선도를 지정해주세요. 허용치(1~9999)" min={1} max={9999} required="required" />
                                <small className="form-text text-muted">카테고리의 우선도를 지정합니다. 1~9999까지의 숫자만 허용합니다. 숫자가 낮을수록 우선도 높음.</small>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button type='button' color="secondary" onClick={() => props.handleModalControl().close()}>
                                취소
                    </Button>
                            <Button type='submit' color="primary">
                                수정
                    </Button>
                        </DialogActions>
                    </form>
                </>:<></>}


            </Dialog>
        </>
    );
}

export default FixCategoryModal;