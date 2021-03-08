import { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
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
import CsDetailComponent from './CsDetailComponent';

const CsDetailMain = ({ history, match, location }) => {
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

    const [csData, setCsData] = useState(null);

    useEffect(() => {
        async function fetchInit() {
            await __handleCsDataConnect().getCsOne();
        }
        fetchInit();
    }, [location]);

    const __handleCsDataConnect = () => {
        return {
            getCsOne: async function () {
                let csId = query.csId ? query.csId : 0;
                await csDataConnect().searchCsOne(csId)
                    .then(data => {
                        if (data && data.message == 'success') {
                            setCsData(data.data);
                        }
                    })
            }
        }
    }
    return (
        <>
            <NavbarDynamic></NavbarDynamic>
            <CsTopLayout
                title={'공지사항'}
                linkPage={'detail'}
            ></CsTopLayout>
            {/* body start */}
            {csData ?
                <CsDetailComponent
                    csData={csData}
                ></CsDetailComponent>
                :
                <>
                    <div className='text-center'>
                        <h2 className='m-3 p-3'>NOT FOUND</h2>
                        <div className='m-1 p-1'>
                            <Link to={'/cs/notice'}>Go To Customer Service List</Link>
                        </div>
                        <div className='m-1 p-1'>
                            <Link to={'/'}>Go To Home</Link>
                        </div>
                    </div>
                </>
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

export default CsDetailMain;