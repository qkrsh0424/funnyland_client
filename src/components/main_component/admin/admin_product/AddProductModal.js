import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// material
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

// handler
import { getCookie } from '../../../../handler/CookieHandler';

const Container = styled.div`
    .ck-content{
        min-height:300px !important;
        max-height:600px !important;
    }
`;

const Wrapper = styled.div`
    margin:8px 0;
    padding:8px;
    border: 1px #f1f1f1 solid;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 8%) 0px 0.125rem 0.25rem;
`;
const DialogTitle = styled.div`
    font-size:22px;
    font-weight:600;
    text-align:center;
    padding:12px;
    border-bottom:1px solid #f1f1f1;
    margin-bottom:8px;
`;

const ImageEl = styled.img`
    width:25%;
    height:auto;
    cursor:pointer;
    @media only screen and (max-width:768px){
        width:90%;
    }
`;
const custom_config = {
    extraPlugins: [MyCustomUploadAdapterPlugin]
}
const AddProductModal = (props) => {
    useEffect(() => {
        function propFetch(){
            if (props.modalOpen) {
                handleScrollToMe();
            }
        }
        propFetch();
    }, [props.modalOpen])

    const handleScrollToMe = () =>{
        props.addProductFieldRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            {props.modalOpen ?
                <Container className='container-fluid' ref={props.addProductFieldRef}>
                    <Wrapper>
                        <DialogTitle className='clearfix'>{"상품 추가"}<button className='float-right btn btn-large btn-outline-danger' onClick={()=>props.handleModalControl().close()}>닫기</button></DialogTitle>
                        <form onSubmit={(e) => props.handleModalControl().submit(e)}>
                            <div className="form-group">
                                <label>상품 카테고리 선택</label>
                                <select className="form-control" name='categoryId' defaultValue={props.addProductItemData.categoryId} onChange={(e) => props.handleModalControl().onValueChange(e)} required>
                                    <option value='' hidden>--선택--</option>
                                    {props.categoryList ? props.categoryList.data.map(r => {
                                        return (
                                            <option value={r.id} key={r.id}>{r.categoryName}</option>
                                        );
                                    })
                                        :
                                        <></>
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>상품 노출 우선도 (1~9999 숫자만 입력) 숫자가 낮을수록 우선도 높음</label>
                                <input type="number" name='priority' value={props.addProductItemData.priority} onChange={(e) => props.handleModalControl().onValueChange(e)} className="form-control" min="0" max="9999" required />
                            </div>
                            <div className="form-group">
                                <label>상품명</label>
                                <input type="text" className="form-control" name='name' value={props.addProductItemData.name} onChange={(e) => props.handleModalControl().onValueChange(e)} required />
                            </div>
                            <div className="form-group">
                                <label>대표이미지 (권장 비율 1:1)</label>
                                <input type='file' ref={props.imageUploaderRef} accept="image/*" onChange={(e) => props.handleModalControl().imageUploadToS3(e)} hidden></input>
                                <figure>
                                    <ImageEl src={props.addProductItemData.imageUrl} onClick={() => props.imageUploaderRef.current.click()}></ImageEl>
                                </figure>
                            </div>
                            <div className="form-group">
                                <label>상품 간단 소개</label>
                                <input type="text" className="form-control" name='introduce' value={props.addProductItemData.introduce} onChange={(e) => props.handleModalControl().onValueChange(e)} />
                            </div>
                            <div className="form-group">
                                <label>상품 요약 및 제원</label>
                                {/* <input type="text" className="form-control" /> */}
                                <textarea className='form-control' name='summary' value={props.addProductItemData.summary} onChange={(e) => props.handleModalControl().onValueChange(e)}></textarea>
                            </div>
                            <label>상품 상세 설명</label>
                            <CKEditor
                                editor={ClassicEditor}
                                // data="<p>Hello from CKEditor 5!</p>"
                                data={props.addProductItemData.editorData}
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    // console.log('Editor is ready to use!', editor);
                                }}
                                // onChange={(event, editor) => {
                                //     const data = editor.getData();
                                //     console.log({ event, editor, data });
                                // }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    // console.log({ event, editor, data });
                                    props.handleEditorControl().onChange(data);
                                }}

                                onBlur={(event, editor) => {
                                    // console.log('Blur.', editor);
                                    // props.handleEditorControl().onBlur();
                                }}
                                onFocus={(event, editor) => {
                                    // console.log('Focus.', editor);
                                }}
                                config={custom_config}

                            />
                            <DialogActions>
                                <Button type='button' color="secondary" onClick={() => props.handleModalControl().close()}>
                                    취소
                                </Button>
                                <Button type='submit' color="primary">
                                    상품 등록
                                </Button>
                            </DialogActions>
                        </form>
                    </Wrapper>
                </Container>
                : ''}
        </>
    );
}

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new MyUploadAdapter(loader)
    }
}

class MyUploadAdapter {
    constructor(props) {
        // CKEditor 5's FileLoader instance.
        this.loader = props;
        // URL where to send files.
        this.url = `/api/fileupload/image`;
    }

    // Starts the upload process.
    upload() {
        return new Promise((resolve, reject) => {
            this._initRequest();
            this._initListeners(resolve, reject);
            this._sendRequest();
        });
    }

    // Aborts the upload process.
    abort() {
        if (this.xhr) {
            this.xhr.abort();
        }
    }

    // Example implementation using XMLHttpRequest.
    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();

        xhr.open('POST', this.url, true);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        xhr.setRequestHeader('X-XSRF-TOKEN', getCookie('XSTO'))
    }

    // Initializes XMLHttpRequest listeners.
    _initListeners(resolve, reject) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = 'Couldn\'t upload file:' + ` ${loader.file.name}.`;

        xhr.addEventListener('error', () => reject(genericErrorText));
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener('load', () => {
            const response = xhr.response;
            // console.log(response)
            if (!response || response.error || response.message == 'failure') {
                return reject(response && (response.error || response.message == 'failure') ? response.message : genericErrorText);
            }

            // If the upload is successful, resolve the upload promise with an object containing
            // at least the "default" URL, pointing to the image on the server.
            resolve({
                default: response.imageUrl
            });
        });

        if (xhr.upload) {
            xhr.upload.addEventListener('progress', evt => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }

    // Prepares the data and sends the request.
    _sendRequest() {
        const data = new FormData();

        this.loader.file.then(result => {
            data.append('file', result);
            this.xhr.send(data);
        }
        )
    }

}


export default AddProductModal;