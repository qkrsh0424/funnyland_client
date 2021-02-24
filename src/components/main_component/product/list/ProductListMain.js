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
import CategoryNavComponent from './CategoryNavComponent';
import ProductComponent from './ProductComponent';


const ProductListMain = ({history,match,location}) => {
    let query = queryString.parse(window.location.search);
    const categoryNavRef = useRef();

    useEffect(() => {
        if(query.pageIndex){
            _handleScrollToRef();
        }else{
            handleScrollToTop();
        }
        
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

    const [categoryList, setCategoryList] = useState(null);
    const [productList, setProductList] = useState(null);
    const [productPage, setProductPage] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        async function fetchInit() {
            await __handleDataConnect().getProductCategoryList();
            await __handleDataConnect().getProductList();
        }
        fetchInit();
    }, [location]);

    useEffect(()=>{
        function init(){
            if(categoryList){
                // console.log(categoryList);
                handleSetSelectedCategory();
            }
        }
        init();
    },[categoryList])

    const _handleScrollToRef = () =>{
        categoryNavRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const __handleDataConnect = () => {
        return {
            getProductCategoryList: async function () {
                await productDataConnect().searchProductCategoryAll()
                    .then(data => {
                        if (data && data.message == 'success') {
                            setCategoryList(data.data)
                        }
                    })
            },
            getProductList: async function () {
                await productDataConnect().searchProductAll()
                    .then(data => {
                        if (data && data.message == 'success') {
                            // console.log(data);
                            setProductList(data.data);
                            setProductPage(data.page);
                        }
                    })
            }
        }
    }

    const handleSetSelectedCategory = () =>{
        // console.log(query);
        let category = {
            id:0,
            categoryName:'전체상품',
            priority:0
        }
        if(query.categoryId){
            let getCategory = categoryList.filter(r=>r.id==query.categoryId)[0];
            if(getCategory){
                category.id=getCategory.id;
                category.categoryName=getCategory.categoryName;
                category.priority=getCategory.priority;
            }
        }
        setSelectedCategory(category);
    }

    return (
        <>
            <NavbarDynamic></NavbarDynamic>
            <ProductTopLayout
                title={'제품목록'}
                linkPage={'list'}
            ></ProductTopLayout>
            {/* Body start */}
            <div ref={categoryNavRef}></div>
            {categoryList && selectedCategory ?
                <CategoryNavComponent
                    categoryList={categoryList}
                    selectedCategory={selectedCategory}
                ></CategoryNavComponent>
                :
                <></>
            }
            {categoryList && selectedCategory && productList && productPage ? 
                <ProductComponent
                    categoryList = {categoryList}
                    selectedCategory={selectedCategory}
                    productList = {productList}
                    productPage = {productPage}
                ></ProductComponent>
                :
                <></>
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

export default ProductListMain;