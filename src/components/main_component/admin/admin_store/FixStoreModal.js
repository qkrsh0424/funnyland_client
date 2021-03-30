import styled from 'styled-components';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import CkeditorModules from '../../../modules/CkeditorModules';

// material
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

// handler
import { getCookie } from '../../../../handler/CookieHandler';
import { useEffect } from 'react';

const editorConfiguration = {
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

const custom_config = {
    extraPlugins: [MyCustomUploadAdapterPlugin],
    toolbar: {
        items: [
            'heading', '|',
            'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
            'outdent', 'indent', '|',
            'imageUpload', 'mediaEmbed', 'blockQuote', '|',
            'undo', 'redo'
        ],
        shouldNotGroupWhenFull: true
    }
}

const ImageWrapper = styled.div`
    width:25%;
    height:auto;
    cursor:pointer;
    @media only screen and (max-width:768px){
        width:90%;
    }
`;

const ImageBox = styled.div`
    position: relative;
    padding-bottom: 56.2%;
`;
const ImageEl = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const FixStoreModal = (props) => {
    return (
        <>
            <Container className='container-fluid'>
                <Wrapper>
                    <DialogTitle className='clearfix'>{"오픈매장 수정"}<button className='float-right btn btn-large btn-outline-danger' onClick={() => props.handleStoreEventControl().fixModalClose()}>닫기</button></DialogTitle>
                    <form onSubmit={(e) => props.handleStoreEventControl().fixStoreSubmit(e)}>
                        <div className="form-group">
                            <label>지역 선택 <span className='text-danger'>*</span></label>
                            <select className="form-control" name='storeArea' value={props.fixStoreData.storeArea} onChange={(e) => props.handleStoreEventControl().fixStoreOnValueChange(e)} required>
                                <option value='' hidden>--선택--</option>
                                <option value='서울특별시'>서울특별시</option>
                                <option value='부산광역시'>부산광역시</option>
                                <option value='대구광역시'>대구광역시</option>
                                <option value='인천광역시'>인천광역시</option>
                                <option value='대전광역시'>대전광역시</option>
                                <option value='광주광역시'>광주광역시</option>
                                <option value='울산광역시'>울산광역시</option>
                                <option value='세종특별자치시'>세종특별자치시</option>
                                <option value='경기도'>경기도</option>
                                <option value='강원도'>강원도</option>
                                <option value='충청북도'>충청북도</option>
                                <option value='충청남도'>충청남도</option>
                                <option value='전라북도'>전라북도</option>
                                <option value='전라남도'>전라남도</option>
                                <option value='경상북도'>경상북도</option>
                                <option value='경상남도'>경상남도</option>
                                <option value='제주특별자치도'>제주특별자치도</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>매장명 <span className='text-danger'>*</span></label>
                            <input type="text" name='storeName' value={props.fixStoreData.storeName} onChange={(e) => props.handleStoreEventControl().fixStoreOnValueChange(e)} className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label>매장주소 <span className='text-danger'>*</span></label>
                            <input type="text" name='storeAddress' value={props.fixStoreData.storeAddress} onChange={(e) => props.handleStoreEventControl().fixStoreOnValueChange(e)} className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label>매장전화번호</label>
                            <input type="text" name='storePhone' value={props.fixStoreData.storePhone} onChange={(e) => props.handleStoreEventControl().fixStoreOnValueChange(e)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>대표이미지 (권장 비율 16:9)</label>
                            <input type='file' ref={props.imageUploaderRef} accept="image/*" onChange={(e) => props.handleStoreEventControl().imageUploadToS3(e,'fix')} hidden></input>
                            <ImageWrapper>
                                <ImageBox>
                                    <ImageEl src={props.fixStoreData.storeImageUrl} onClick={() => props.imageUploaderRef.current.click()}></ImageEl>
                                </ImageBox>
                            </ImageWrapper>
                        </div>
                        <div className="form-row">
                            <div className='form-group col'>
                                <label>Lat 값</label>
                                <input type="number" step='0.0000000000001' name='storeLat' value={props.fixStoreData.storeLat} onChange={(e) => props.handleStoreEventControl().fixStoreOnValueChange(e)} className="form-control" min="0" max="9999" required />
                            </div>
                            <div className='form-group col'>
                                <label>Lng 값</label>
                                <input type="number" step='0.0000000000001' name='storeLng' value={props.fixStoreData.storeLng} onChange={(e) => props.handleStoreEventControl().fixStoreOnValueChange(e)} className="form-control" min="0" max="9999" required />
                            </div>

                        </div>
                        <label>오픈매장 상세 설명</label>
                        <CKEditor
                            editor={ClassicEditor}
                            // data="<p>Hello from CKEditor 5!</p>"
                            data={props.fixStoreData.storeDesc}
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
                                props.handleStoreEventControl().fixStoreEditorDataOnChange(data);
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
                            <Button type='button' color="secondary" onClick={() => props.handleStoreEventControl().fixModalClose()}>
                                취소
                                </Button>
                            <Button type='submit' color="primary">
                                수정
                            </Button>
                        </DialogActions>
                    </form>
                </Wrapper>
            </Container>
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
        this.url = `/api/fileupload/external/image`;
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

export default FixStoreModal;