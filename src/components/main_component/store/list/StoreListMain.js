import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';

// handler
import { handleScrollToTop } from '../../../../handler/ScrollHandler';

// data connector
import { storeDataConnect } from '../../../data_connect/StoreDataConnect';

// components
import NavbarDynamic from '../../../navbar/NavbarDynamic';
import FooterDefault from '../../../footer_offer/FooterDefault';
import NavbarBottomFixed from '../../../navbar/NavbarBottomFixed';
import ApplyFormModal from '../../home/ApplyFormModal';
import StoreTopLayout from '../layout/StoreTopLayout';
import AreaNavComponent from './AreaNavComponent';
import StoreComponent from './StoreComponent';

const StoreListMain = ({ history, match, location }) => {
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

    const [storeList, setStoreList] = useState(null);
    const [storePage, setStorePage] = useState(null);

    useEffect(() => {
        async function fetchInit() {
            await __handleStoreDataConnect().searchStoreAll();
        }
        fetchInit();
    }, [location]);

    const __handleStoreDataConnect = () => {
        return {
            searchStoreAll: async function () {
                let areaName = query.areaName ? query.areaName : '';
                let pageIndex = query.pageIndex ? query.pageIndex - 1 : 0;
                await storeDataConnect().searchStoreAll(areaName, pageIndex)
                    .then(data => {
                        if (data && data.message == 'success') {
                            // console.log(data);
                            setStoreList(data.data);
                            setStorePage(data.page);
                        }
                    })
            }
        }
    }

    const handleStoreEventControl = () => {
        return {
            getStoreList: async function () {

            }
        }
    }
    return (
        <>
            <NavbarDynamic></NavbarDynamic>
            <StoreTopLayout
                title={'매장안내'}
                linkPage={'list'}
            ></StoreTopLayout>
            {/* <AreaNavComponent></AreaNavComponent> */}
            {storeList && storePage ?
                <StoreComponent
                    storeList={storeList}
                    storePage={storePage}
                ></StoreComponent>
                :
                <></>
            }

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

export default StoreListMain;