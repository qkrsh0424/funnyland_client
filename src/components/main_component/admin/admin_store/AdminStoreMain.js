import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import queryString from 'query-string';

// data connect
import { storeDataConnect } from '../../../data_connect/StoreDataConnect';

// components
import AdminNav from '../admin_nav/AdminNav';
import AreaComponent from './AreaComponent';
import AddAreaModal from './AddAreaModal';
import FixAreaModal from './FixAreaModal';
import StoreComponent from './StoreComponent';
import AddStoreModal from './AddStoreModal';
import FixStoreModal from './FixStoreModal';

const AdminStoreMain = ({ history, match, location }) => {
    let query = queryString.parse(window.location.search);
    let modalRef = useRef();
    let addStoreUploaderRef = useRef();
    let fixStoreUploaderRef = useRef();

    // Login Check Start
    const [isLoged, setIsLoged] = useState(false);
    useEffect(() => {
        async function effectInit() {
            await handleCheckLoged();
        }
        effectInit();
    }, []);

    const handleCheckLoged = async () => {
        await axios.get('/api/auth/check/loged')
            .then(res => {
                if (res.data.message == 'success') {
                    setIsLoged(true);
                    return;
                } else {
                    history.push('/login')
                }
            });
    }
    // Login Check End

    const [areaList, setAreaList] = useState(null);
    const [addAreaModalOpen, setAddAreaModalOpen] = useState(false);
    const [addAreaData, setAddAreaData] = useState(null);
    const [fixAreaModalOpen, setFixAreaModalOpen] = useState(false);
    const [fixAreaData, setFixAreaData] = useState(null);

    const [storeList, setStoreList] = useState(null);
    const [storePage, setStorePage] = useState(null);
    const [addStoreModalOpen, setAddStoreModalOpen] = useState(false);
    const [addStoreData, setAddStoreData] = useState(null);
    const [fixStoreModalOpen, setFixStoreModalOpen] = useState(false);
    const [fixStoreData, setFixStoreData] = useState(null);

    useEffect(() => {
        async function fetchInit() {
            // await __handleAreaDataConnect().searchStoreAreaAll();
            await __handleStoreDataConnect().searchStoreAll();
        }
        fetchInit();
    }, [location]);

    const __handleAreaDataConnect = () => {
        return {
            searchStoreAreaAll: async function () {
                await storeDataConnect().searchStoreAreaAll()
                    .then(data => {
                        if (data && data.message == 'success') {
                            // console.log(data);
                            setAreaList(data.data);
                        }
                    })
            },
            insertStoreAreaOne: async function (data) {
                await storeDataConnect().insertStoreAreaOne(data)
            },
            deleteStoreAreaOne: async function (data) {
                await storeDataConnect().deleteStoreAreaOne(data);
            },
            updateStoreAreaOne: async function (data) {
                await storeDataConnect().updateStoreAreaOne(data);
            },

        }
    }

    const __handleStoreDataConnect = () => {
        return {
            searchStoreAll: async function () {
                let areaName = query.areaName ? query.areaName : '';
                let pageIndex = query.pageIndex ? query.pageIndex - 1 : 0;
                await storeDataConnect().searchStoreAll(areaName, pageIndex)
                    .then(data => {
                        if (data && data.message == 'success') {
                            console.log(data);
                            setStoreList(data.data);
                            setStorePage(data.page);
                        }
                    })
            },
            insertStoreOne: async function (data) {
                await storeDataConnect().insertStoreOne(data);
            },
            deleteStoreOne: async function (data) {
                await storeDataConnect().deleteStoreOne(data);
            },
            updateStoreOne: async function (data) {
                await storeDataConnect().updateStoreOne(data);
            },
            imageUploadToS3: async function (event,type) {
                //빈파일이 아닌 경우 함수 진행
                if (event.target.files !== null) {
                    // setFullPageLoading(true);
                    //FormData 생성
                    const fd = new FormData();
                    //FormData에 key, value 추가하기
                    fd.append('file', event.target.files[0]);
                    // axios 사용해서 백엔드에게 파일 보내기
                    await storeDataConnect().imageUploadToS3(fd).then(data => {
                        if (data.message == 'success') {
                            if(type=='add'){
                                addStoreUploaderRef.current.value = ''
                                setAddStoreData({ ...addStoreData, ['storeImageUrl']: data.imageUrl })
                            }else if(type=='fix'){
                                fixStoreUploaderRef.current.value = ''
                                setFixStoreData({...fixStoreData, ['storeImageUrl']: data.imageUrl})
                            }
                        }
                    });
                    // setFullPageLoading(false);
                }
            }
        }
    }

    const handleAreaEventControl = () => {
        return {
            getAreaList: async function () {
                await __handleAreaDataConnect().searchStoreAreaAll();
            },
            addModalOpen: function () {
                setAddAreaModalOpen(true);
                setAddAreaData({
                    areaName: ''
                });
            },
            addModalClose: function () {
                setAddAreaModalOpen(false);
                setAddAreaData(null);
            },
            addModalSubmit: async function (e) {
                e.preventDefault();
                let data = addAreaData;
                await __handleAreaDataConnect().insertStoreAreaOne(data);
                await handleAreaEventControl().getAreaList();
                this.addModalClose();
            },
            addAreaDataOnChange: function (e) {
                setAddAreaData({ ...addAreaData, [e.target.name]: e.target.value });
            },
            delete: async function (areaId) {
                let data = areaList.filter(r => r.areaId == areaId)[0];
                await __handleAreaDataConnect().deleteStoreAreaOne(data);
                await handleAreaEventControl().getAreaList();
            },
            fixModalOpen: function (areaId) {
                let data = areaList.filter(r => r.areaId == areaId)[0];
                setFixAreaModalOpen(true);
                setFixAreaData(data);
            },
            fixModalClose: function () {
                setFixAreaModalOpen(false);
                setFixAreaData(null);
            },
            fixModalSubmit: async function (e) {
                e.preventDefault();
                let data = fixAreaData;
                await __handleAreaDataConnect().updateStoreAreaOne(data);
                await handleAreaEventControl().getAreaList();
                this.fixModalClose();
            },
            fixAreaDataOnChange: function (e) {
                setFixAreaData({ ...fixAreaData, [e.target.name]: e.target.value });
            }
        }
    }

    const handleStoreEventControl = () => {
        return {
            getStoreList: async function () {
                await __handleStoreDataConnect().searchStoreAll();
            },
            addModalOpen: function () {
                handleStoreEventControl().fixModalClose();
                setAddStoreModalOpen(true);
                setAddStoreData({
                    storeArea: '',
                    storeName: '',
                    storeAddress: '',
                    storePhone: '',
                    storeLat: 33.450701,
                    storeLng: 126.570667,
                    storeDesc: '',
                    storeImageUrl:'/images/sample/imageNo.png'
                });
                setTimeout(() => {
                    modalRef.current.scrollIntoView();
                }, 100);
            },
            addModalClose: function () {
                setAddStoreModalOpen(false);
                setAddStoreData(null);
            },
            addStoreSubmit: async function (e) {
                e.preventDefault();
                await __handleStoreDataConnect().insertStoreOne(addStoreData);
                await handleStoreEventControl().getStoreList();
                this.addModalClose();
                alert('등록되었습니다.');
            },
            onValueChange: function (e) {
                setAddStoreData({ ...addStoreData, [e.target.name]: e.target.value })
            },
            editorDataOnChange: function (data) {
                setAddStoreData({ ...addStoreData, ['storeDesc']: data })
            },
            deleteOne: async function (storeId) {
                let data = storeList.filter(r => r.storeId == storeId)[0];
                await __handleStoreDataConnect().deleteStoreOne(data);
                await handleStoreEventControl().getStoreList();
                handleStoreEventControl().addModalClose();
                handleStoreEventControl().fixModalClose();
                alert('삭제되었습니다.');
            },
            fixModalOpen: function (storeId) {
                handleStoreEventControl().addModalClose();
                let data = storeList.filter(r => r.storeId == storeId)[0];
                setFixStoreData(data);
                setFixStoreModalOpen(true);
                setTimeout(() => {
                    modalRef.current.scrollIntoView();
                }, 100);
            },
            fixModalClose: function () {
                setFixStoreData(null);
                setFixStoreModalOpen(false);
            },
            fixStoreSubmit: async function (e) {
                e.preventDefault();
                await __handleStoreDataConnect().updateStoreOne(fixStoreData);
                await handleStoreEventControl().getStoreList();
                this.fixModalClose();
                alert('수정되었습니다.');
            },
            fixStoreOnValueChange: function (e) {
                setFixStoreData({ ...fixStoreData, [e.target.name]: e.target.value });
            },
            fixStoreEditorDataOnChange: function (data) {
                setFixStoreData({ ...fixStoreData, ['storeDesc']: data });
            },
            conditionSearch: function () {
                return {
                    select: async function (e) {
                        let newUrl = decodeURI(queryString.stringifyUrl({ url: '/admin/store', query: { areaName: e.target.value } }));
                        history.push(newUrl);
                    },
                    all: async function () {
                        history.push('/admin/store');
                    }
                }
            },
            imageUploadToS3: async function(e, type){
                await __handleStoreDataConnect().imageUploadToS3(e, type);
            }
        }
    }
    return (
        isLoged ?
            (
                <>
                    <AdminNav></AdminNav>
                    {/* {areaList ?
                        <AreaComponent
                            areaList={areaList}
                            handleAreaEventControl={handleAreaEventControl}
                        ></AreaComponent>
                        :
                        <></>
                    } */}
                    {storeList && storePage ?
                        <StoreComponent
                            storeList={storeList}
                            storePage={storePage}

                            handleStoreEventControl={handleStoreEventControl}
                        ></StoreComponent>
                        :
                        <></>
                    }
                    <div ref={modalRef}></div>
                    {addStoreModalOpen && addStoreData ?
                        <AddStoreModal
                            // modalRef={modalRef}
                            imageUploaderRef={addStoreUploaderRef}
                            areaList={areaList}
                            addStoreData={addStoreData}
                            handleStoreEventControl={handleStoreEventControl}
                        ></AddStoreModal>
                        :
                        <></>
                    }
                    {fixStoreModalOpen && fixStoreData ?
                        <FixStoreModal
                            // modalRef={modalRef}
                            imageUploaderRef={fixStoreUploaderRef}
                            areaList={areaList}
                            fixStoreData={fixStoreData}
                            handleStoreEventControl={handleStoreEventControl}
                        ></FixStoreModal>
                        :
                        <>
                        </>
                    }
                    {/* {addAreaModalOpen && addAreaData ?
                        <AddAreaModal
                            modalOpen={addAreaModalOpen}
                            addAreaData={addAreaData}

                            handleAreaEventControl={handleAreaEventControl}
                        ></AddAreaModal>
                        :
                        <></>
                    }

                    {fixAreaModalOpen && fixAreaData ?
                        <FixAreaModal
                            modalOpen={fixAreaModalOpen}
                            fixAreaData={fixAreaData}

                            handleAreaEventControl={handleAreaEventControl}
                        ></FixAreaModal>
                        :
                        <></>
                    } */}
                </>
            )
            :
            <></>
    );
}

export default AdminStoreMain;