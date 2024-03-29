import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';

// NOTE: Use the editor from source (not a build)!
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import CkeditorModules from '../../../modules/CkeditorModules';

// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
// import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder.js';
// import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
// import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
// import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
// import Image from '@ckeditor/ckeditor5-image/src/image.js';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
// import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
// import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
// import Link from '@ckeditor/ckeditor5-link/src/link.js';
// import List from '@ckeditor/ckeditor5-list/src/list.js';
// import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
// import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
// import Table from '@ckeditor/ckeditor5-table/src/table.js';
// import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
// import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';

// material
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

// handler
import { getCookie } from '../../../../handler/CookieHandler';
import { csrfDataConnect } from '../../../data_connect/CsrfDataConnect';

const Container = styled.div`
    .ck-content{
        min-height:300px !important;
        max-height:600px !important;
    }
    .ck-content blockquote .table:first-child {
        margin-top: calc( 1em + 16px );
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

const editorConfiguration = {
    // plugins: [
    //     Heading,
    //     Alignment,
    //     Essentials,
    //     Bold,
    //     Italic,
    //     Link,
    //     List,
    //     Paragraph,
    //     Indent,
    //     Autoformat,
    //     BlockQuote,
    //     CKFinder,
    //     CKFinderUploadAdapter,
    //     FontColor,
    //     FontSize,
    //     Image,
    //     ImageCaption,
    //     ImageResize,
    //     ImageStyle,
    //     ImageToolbar,
    //     ImageUpload,
    //     MediaEmbed,
    //     PasteFromOffice,
    //     Table,
    //     TableToolbar,
    //     TextTransformation
    // ],
    plugins: CkeditorModules,
    toolbar: [
        'heading', '|',
        'bold', 'italic','fontSize','fontColor', 'link', 'bulletedList', 'numberedList', 'alignment', '|',
        'indent', 'outdent', '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo'

    ],
    image:{
        toolbar:[
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    table:{
        contentToolbar:[
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    extraPlugins: [MyCustomUploadAdapterPlugin],
};

const API_ADDRESS = process.env.REACT_APP_MAIN_API_ADDRESS;

const UpdateProductModal = (props) => {
    // console.log(ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName ));
    useEffect(() => {
        function propFetch() {
            if (props.modalOpen) {
                handleScrollToMe();

            }
        }
        propFetch();
    }, [props.modalOpen])

    const handleScrollToMe = () => {
        props.updateProductFieldRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            {props.modalOpen && props.updateProductItemData ?
                <Container className='container-fluid' ref={props.updateProductFieldRef}>
                    <Wrapper>
                        <DialogTitle className='clearfix'>{"상품 수정"}<button className='float-right btn btn-large btn-outline-danger' onClick={() => props.handleModalControl().close()}>닫기</button></DialogTitle>
                        <form onSubmit={(e) => props.handleModalControl().submit(e)}>
                            <div className="form-group">
                                <label>상품 카테고리 선택</label>
                                <select className="form-control" name='categoryId' value={props.updateProductItemData.categoryId} onChange={(e) => props.handleModalControl().onValueChange(e)} required>
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
                            {/* <div className="form-group">
                                <label>상품 노출 우선도 (1~9999 숫자만 입력) 숫자가 낮을수록 우선도 높음</label>
                                <input type="number" name='priority' value={props.updateProductItemData.priority} onChange={(e) => props.handleModalControl().onValueChange(e)} className="form-control" min="0" max="9999" required />
                            </div> */}
                            <div className="form-group">
                                <label>상품명</label>
                                <input type="text" className="form-control" name='name' value={props.updateProductItemData.name} onChange={(e) => props.handleModalControl().onValueChange(e)} required />
                            </div>
                            <div className='form-group'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name='newChecked' checked={props.updateProductItemData.newChecked} onChange={(e) => props.handleModalControl().onValueCheckedChange(e)} />
                                    <label className="form-check-label">신상품</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name='hitChecked' checked={props.updateProductItemData.hitChecked} onChange={(e) => props.handleModalControl().onValueCheckedChange(e)} />
                                    <label className="form-check-label">히트상품</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" name='eventChecked' checked={props.updateProductItemData.eventChecked} onChange={(e) => props.handleModalControl().onValueCheckedChange(e)} />
                                    <label className="form-check-label">이벤트렌탈</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>대표이미지 (권장 비율 1:1)</label>
                                <input type='file' ref={props.imageUploaderRef} accept="image/*" onChange={(e) => props.handleModalControl().imageUploadToS3(e)} hidden></input>
                                <figure>
                                    <ImageEl src={props.updateProductItemData.imageUrl} onClick={() => props.imageUploaderRef.current.click()}></ImageEl>
                                </figure>
                            </div>
                            <div className="form-group">
                                <label>상품 간단 소개</label>
                                <input type="text" className="form-control" name='introduce' value={props.updateProductItemData.introduce} onChange={(e) => props.handleModalControl().onValueChange(e)} />
                            </div>
                            <div className="form-group">
                                <label>상품 요약 및 제원</label>
                                {/* <input type="text" className="form-control" /> */}
                                <textarea className='form-control' name='summary' value={props.updateProductItemData.summary} onChange={(e) => props.handleModalControl().onValueChange(e)}></textarea>
                            </div>
                            <label>상품 상세 설명</label>
                            <CKEditor
                                editor={ClassicEditor}
                                // data="<p>Hello from CKEditor 5!</p>"
                                data={props.updateProductItemData.desc}
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    // console.log('Editor is ready to use!', editor);
                                    // console.log(editor)
                                }}
                                // onChange={(event, editor) => {
                                //     const data = editor.getData();
                                //     console.log({ event, editor, data });
                                // }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
                                    props.handleEditorControl().onChange(data);
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
                            {/* <CKEditor
                                editor={ClassicEditor}
                                config={editorConfiguration}
                                data="<p>Hello from CKEditor 5!</p>"
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
                                }}
                                onBlur={(event, editor) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log('Focus.', editor);
                                }}
                            /> */}
                            <DialogActions>
                                <Button type='button' color="secondary" onClick={() => props.handleModalControl().close()}>
                                    취소
                                </Button>
                                <Button type='submit' color="primary">
                                    수정하기
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
        // this.url = `/api/fileupload/image`;
        // upload to local
        this.url = `${API_ADDRESS}/api/fileupload/image`;
    }

    // Starts the upload process.
    async upload() {
        await csrfDataConnect().getApiCsrf();
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
        xhr.withCredentials = true;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        xhr.setRequestHeader('X-XSRF-TOKEN', getCookie('x_auth_csrf_token'))
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

export default UpdateProductModal;