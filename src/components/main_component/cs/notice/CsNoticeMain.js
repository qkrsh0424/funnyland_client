import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

// handler
import { handleScrollToTop } from '../../../../handler/ScrollHandler';

// data connector
import { csDataConnect } from '../../../data_connect/CsDataConnect';

// components
import NavbarDynamic from '../../../navbar/NavbarDynamic';
import FooterDefault from '../../../footer_offer/FooterDefault';
import NavbarBottomFixed from '../../../navbar/NavbarBottomFixed';
import ApplyFormModal from '../../home/ApplyFormModal';
import CsTopLayout from '../layout/CsTopLayout';
import NoticeComponent from './NoticeComponent';

const CsNoticeMain = ({ history, match, location }) => {
    let query = queryString.parse(window.location.search);
    useEffect(() => {
        handleScrollToTop();

    }, [location]);

    const [dialogOpen, setDialogOpen] = useState(false);
    const mainHandleDialogControl = () => {
        return {
            open: () => {
                setDialogOpen(true);
            },
            close: function () {
                setDialogOpen(false);
            }
        }
    }

    const [csList, setCsList] = useState(null);
    const [csPage, setCsPage] = useState(null);

    useEffect(() => {
        async function fetchInit() {
            await __handleCsDataConnect().getCsList();
        }
        fetchInit();
    }, [location])
    const __handleCsDataConnect = () => {
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
            }
        }
    }

    const handleCsEventControl = () => {
        return {

        }
    }
    return (
        <>
            <NavbarDynamic></NavbarDynamic>
            <CsTopLayout
                title={'공지사항'}
                linkPage={'notice'}
            ></CsTopLayout>
            {/* body start */}
            {csList && csPage ?
                <NoticeComponent
                    csList = {csList}
                    csPage={csPage}
                ></NoticeComponent>
                :
                <></>
            }

            {/* body end */}
            <FooterDefault></FooterDefault>
            <NavbarBottomFixed
                mainHandleDialogControl={mainHandleDialogControl}
            ></NavbarBottomFixed>
            <ApplyFormModal
                dialogOpen={dialogOpen}

                mainHandleDialogControl={mainHandleDialogControl}
            >
            </ApplyFormModal>
        </>
    );
}

export default CsNoticeMain;