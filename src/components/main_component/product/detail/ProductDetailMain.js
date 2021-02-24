import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import queryString from 'query-string';

// handler
import { handleScrollToTop } from '../../../../handler/ScrollHandler';

// data connect
import { productDataConnect } from '../../../data_connect/ProductDataConnect';
// components
import NavbarDynamic from '../../../navbar/NavbarDynamic';
import FooterDefault from '../../../footer_offer/FooterDefault';
import ProductTopLayout from '../layout/ProductTopLayout';
import NavbarBottomFixed from '../../../navbar/NavbarBottomFixed';
import ApplyFormModal from '../../home/ApplyFormModal';

const ProductDetailMain = () =>{
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
    return(
        <>
            <NavbarDynamic></NavbarDynamic>
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

export default ProductDetailMain;