import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// material
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import { CKEditor } from '@ckeditor/ckeditor5-react';
// NOTE: Use the editor from source (not a build)!
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import CkeditorModules from '../../../modules/CkeditorModules';

// handler
import { getCookie } from '../../../../handler/CookieHandler';

const editorConfiguration = {
    plugins: CkeditorModules,
    toolbar: [
        'heading', '|',
        'bold', 'italic', 'fontSize', 'fontColor', 'link', 'bulletedList', 'numberedList', 'alignment', '|',
        'indent', 'outdent', '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo'

    ],
    image: {
        toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    extraPlugins: [MyCustomUploadAdapterPlugin],
};

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

const AddCsModal = (props) => {
    return (
        <>
            {props.modalOpen ?
                <Container className='container-fluid'>
                    <Wrapper>
                        <DialogTitle className='clearfix'>{"게시물 추가"}<button className='float-right btn btn-large btn-outline-danger' onClick={() => props.handleCsEventControl().addCsModalClose()}>닫기</button></DialogTitle>
                        <form onSubmit={(e) => props.handleCsEventControl().addCsModalSubmit(e)}>
                            <div className="form-group">
                                <label>게시물 타입</label>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" name='csType' value={'TYPE_NOTICE'} checked={props.addCsData.csType == 'TYPE_NOTICE' ? true : false} onChange={(e) => props.handleCsEventControl().addCsOnValueChange(e)} required disabled/>
                                    <label>공지사항</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>게시물 타이틀</label>
                                <input type="text" className="form-control" name='csTitle' value={props.addCsData.csTitle} onChange={(e) => props.handleCsEventControl().addCsOnValueChange(e)} required />
                            </div>
                            <div className='form-group'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name='csImportantChecked' checked={props.addCsData.csImportantChecked} onChange={(e) => props.handleCsEventControl().addCsOnValueCheckedChange(e)} />
                                    <label className="form-check-label">중요</label>
                                </div>
                            </div>
                            <label>내용</label>
                            <CKEditor
                                editor={ClassicEditor}
                                // data="<p>Hello from CKEditor 5!</p>"
                                data={props.addCsData.csDesc}
                                onReady={editor => {
                                    console.log(editor)
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    // console.log({ event, editor, data });
                                    props.handleCsEventControl().addCsDescOnValueChange(data);
                                }}

                                onBlur={(event, editor) => {
                                    // console.log('Blur.', editor);
                                    // props.handleEditorControl().onBlur();
                                }}
                                onFocus={(event, editor) => {
                                    // console.log('Focus.', editor);
                                }}
                                config={editorConfiguration}

                            />
                            <DialogActions>
                                <Button type='button' color="secondary" onClick={() => props.handleCsEventControl().addCsModalClose()}>
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
        // upload to s3
        this.url = `/api/fileupload/image`;
        // upload to local
        // this.url = `/api/fileupload/external/image`;
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
            alert('이미지 업로드 완료됨.');
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

export default AddCsModal;