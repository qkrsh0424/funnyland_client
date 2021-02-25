import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
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
import DetailComponent from './DetailComponent';

const ProductDetailMain = ({ history, match, location }) => {
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

    const [productData, setProductData] = useState(null);

    useEffect(() => {
        async function fetchInit() {
            await __handleDataConnect().getProductData();
        }
        fetchInit();
    },[location])

    const __handleDataConnect = () => {
        return {
            getProductData: async function () {
                let productId = query.productId;
                if (productId) {
                    await productDataConnect().searchProductOne(productId)
                        .then(data => {
                            if (data && data.message == 'success') {
                                setProductData(data.data);
                                console.log(data);
                            }else if(data && data.message=='no_data'){
                                alert('존재하지 않는 데이터입니다.');
                                history.push('/product/list');
                            }
                        })
                }

            }
        }
    }
    return (
        <>
            <NavbarDynamic></NavbarDynamic>
            <ProductTopLayout
                title={'제품상세'}
            ></ProductTopLayout>
            {/* Body start */}
            {productData ? 
                <DetailComponent
                    productData={productData}
                ></DetailComponent>
                :
                <>
                    <div className='text-center'>
                        <h2 className='m-3 p-3'>NOT FOUND</h2>
                        <div className='m-1 p-1'>
                            <Link to={'/product/list'}>Go To Product List</Link>
                        </div>
                        <div className='m-1 p-1'>
                            <Link to={'/'}>Go To Home</Link>
                        </div>
                    </div>
                    
                </>
            }
            
            {/* Body end */}
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