import { useEffect, useState,useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { getCookie } from '../../../../handler/CookieHandler';
import { uuidv4 } from '../../../../handler/MyHandlers';

// data connector
import { csDataConnect } from '../../../data_connect/CsDataConnect';

// components
import AdminNav from '../admin_nav/AdminNav';
import CsComponent from './CsComponent';
import AddCsModal from './AddCsModal';
import FixCsModal from './FixCsModal';

const AdminCSMain = ({ history, match, location }) => {
    let modalRef = useRef();
    // Login Check Start
    const [isLoged, setIsLoged] = useState(false);
    useEffect(() => {
        async function effectInit() {
            await handleCheckLoged();
        }
        effectInit();
    }, [location]);

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

    const [csList, setCsList] = useState(null);
    const [csPage, setCsPage] = useState(null);

    const [addCsModalOpen, setAddCsModalOpen] = useState(false);
    const [addCsData, setAddCsData] = useState(null);

    const [fixCsModalOpen, setFixCsModalOpen] = useState(false);
    const [fixCsData, setFixCsData] = useState(null);

    useEffect(() => {
        async function fetchInit() {
            await __handleDataConnect().getCsList();
        }
        fetchInit();
    }, [location])
    const __handleDataConnect = () => {
        return {
            getCsList: async function () {
                await csDataConnect().searchCsAll()
                    .then(data => {
                        // console.log(data);
                        if (data && data.message == 'success') {
                            setCsList(data.data);
                            setCsPage(data.page);
                        }
                    })
            },
            insertCsOne: async function (data) {
                await csDataConnect().insertCsOne(data);
            },
            updateCsOne: async function (data) {
                await csDataConnect().updateCsOne(data);
            },
            deleteCsOne: async function (data) {
                await csDataConnect().deleteCsOne(data);
            }
        }
    }

    const handleCsEventControl = () => {
        return {
            addCsModalOpen: function () {
                setAddCsModalOpen(true);
                setAddCsData({
                    csType: 'TYPE_NOTICE',
                    csTitle: '',
                    csDesc: '',
                    csAuthor: '관리자',
                    csImportantChecked: false,
                });
                handleCsEventControl().fixCsModalClose();
            },
            addCsModalClose: function () {
                setAddCsModalOpen(false);
                setAddCsData(null);
            },
            addCsModalSubmit: async function (e) {
                e.preventDefault();
                await __handleDataConnect().insertCsOne(addCsData);
                await __handleDataConnect().getCsList();
                this.addCsModalClose();

            },
            addCsOnValueChange: function (e) {
                // console.log(e.target.value);
                setAddCsData({ ...addCsData, [e.target.name]: e.target.value })
            },
            addCsOnValueCheckedChange: function (e) {
                setAddCsData({ ...addCsData, [e.target.name]: e.target.checked })
            },
            addCsDescOnValueChange: function (data) {
                setAddCsData({ ...addCsData, ['csDesc']: data })
            },
            deleteOne: async function (csId) {
                const data = csList.filter(r => r.csId == csId)[0];
                await __handleDataConnect().deleteCsOne(data);
                await __handleDataConnect().getCsList();
            },
            fixCsModalOpen: function (csId) {
                handleCsEventControl().fixCsModalClose();
                handleCsEventControl().addCsModalClose();
                let data = csList.filter(r => r.csId == csId)[0];
                setTimeout(() => {
                    setFixCsData(data);
                    setFixCsModalOpen(true);    
                }, 10);
                
                setTimeout(() => {
                    modalRef.current.scrollIntoView();
                }, 100);
            },
            fixCsModalClose: function () {
                setFixCsData(null);
                setFixCsModalOpen(false);
            },
            fixCsModalSubmit: async function (e) {
                e.preventDefault();
                // console.log(fixCsData);
                await __handleDataConnect().updateCsOne(fixCsData);
                await __handleDataConnect().getCsList();
                this.fixCsModalClose();
            },
            fixCsOnValueChange: function (e) {
                // console.log(e.target.value);
                setFixCsData({ ...fixCsData, [e.target.name]: e.target.value })
            },
            fixCsOnValueCheckedChange: function (e) {
                setFixCsData({ ...fixCsData, [e.target.name]: e.target.checked })
            },
            fixCsDescOnValueChange: function (data) {
                setFixCsData({ ...fixCsData, ['csDesc']: data })
            },
        }
    }

    return (
        isLoged ?
            <>
                <AdminNav></AdminNav>
                {csList && csPage ?
                    <CsComponent
                        csList={csList}
                        csPage={csPage}
                        fixCsModalOpen={fixCsModalOpen}
                        handleCsEventControl={handleCsEventControl}
                    ></CsComponent>
                    :
                    <></>
                }
                <div ref={modalRef}></div>
                {addCsModalOpen && addCsData ?
                    <AddCsModal
                        modalOpen={addCsModalOpen}
                        addCsData={addCsData}
                        handleCsEventControl={handleCsEventControl}
                    ></AddCsModal>
                    :
                    <></>
                }
                {fixCsModalOpen && fixCsData ?
                    <FixCsModal
                        modalOpen={fixCsModalOpen}
                        fixCsData={fixCsData}
                        handleCsEventControl={handleCsEventControl}
                    ></FixCsModal>
                    :
                    <></>
                }

            </>
            :
            <></>
    );
}

export default AdminCSMain;