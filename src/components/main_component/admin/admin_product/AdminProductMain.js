import { useEffect, useState, useRef } from "react";
import axios from 'axios';
import styled from 'styled-components';
import queryString from 'query-string';

// data connect
import { productDataConnect } from '../../../data_connect/ProductDataConnect';

// handler
import { dateToYYYYMMDD, dateToYYYYMMDD_hhmmss } from '../../../../handler/MyHandlers';
import { handleScrollToTop } from '../../../../handler/ScrollHandler';

// components
import AdminNav from '../admin_nav/AdminNav';
import CategoryComponent from './CategoryComponent';
import AddCategoryModal from './AddCategoryModal';
import FixCategoryModal from './FixCategoryModal';
import ProductComponent from './ProductComponent';
import AddProductModal from './AddProductModal';
import UpdateProductModal from './UpdateProductModal';

const Container = styled.div`
    margin-bottom:150px;
`;
const AdminProductMain = ({ history, match, location }) => {
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
    const addProductImageUploaderRef = useRef();
    const addProductFieldRef = useRef();

    const updateProductImageUploaderRef = useRef();
    const updateProductFieldRef = useRef();

    const [loading, setLoading] = useState(false);

    const [categoryList, setCategoryList] = useState(null);
    const [productList, setProductList] = useState(null);
    const [productPage, setProductPage] = useState(null);

    const [addCategoryModalOpen, setAddCategoryModalOpen] = useState(false);
    const [addCategoryName, setAddCategoryName] = useState(null);
    const [addCategoryData, setAddCategoryData] = useState({
        categoryName: '',
        priority: 9999
    })

    const [fixCategoryModalOpen, setFixCategoryModalOpen] = useState(false);
    const [fixCategoryData, setFixCategoryData] = useState(null)

    const [addProductModalOpen, setAddProductModalOpen] = useState(false);
    const [addProductItemData, setAddProductItemData] = useState({
        categoryId: '',
        priority: 9999,
        name: '',
        introduce: '',
        summary: '',
        editorData: '',
        imageUrl: '/images/sample/imageNo.png'
    });

    const [updateProductModalOpen, setUpdateProductModalOpen] = useState(false);
    const [updateProductItemData, setUpdateProductItemData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (isLoged) {
                await __handleDataConnect().getProductCategoryList();
                await __handleDataConnect().getProductList();
            }
        }
        fetchData();
    }, [isLoged, location]);

    const __handleDataConnect = () => {
        return {
            getProductCategoryList: async function () {
                await productDataConnect().searchProductCategoryAll()
                    .then(data => {
                        if (data && data.message == 'success') {
                            setCategoryList({
                                size: data.data.length,
                                data: data.data
                            })
                        }
                    })
            },
            deleteProductCategoryOne: async function (jsonData) {
                await productDataConnect().deleteProductCategoryOne(jsonData)
                    .then(data => {
                        if (data && data.message == 'success') {
                            alert('삭제 되었습니다.')
                        }
                    })
                await __handleDataConnect().getProductCategoryList();
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
            },
            insertProductOne: async function (jsonData) {
                await productDataConnect().insertProductOne(jsonData)
                    .then(data => {
                        if (data) {
                            if (data.message == 'success') {
                                alert('상품이 등록되었습니다.');
                            }
                        }
                    });
            },
            updateProductOne: async function (jsonData) {
                await productDataConnect().updateProductOne(jsonData)
                    .then(data => {
                        if (data) {
                            if (data.message == 'success') {
                                alert('상품이 수정되었습니다.');
                            }
                        }
                    });
            },
            deleteProductOne: async function (jsonData) {
                await productDataConnect().deleteProductOne(jsonData)
                    .then(data => {
                        if (data && data.message == 'success') {
                            alert('삭제 되었습니다.')
                        }
                    })
            },
            updateCategoryOne: async function (jsonData) {
                await productDataConnect().updateCategoryOne(jsonData)
                    .then(data => {
                        if (data) {
                            if (data.message == 'success') {
                                alert('카테고리가 수정되었습니다.');
                            }
                        }
                    })
            }
        }
    }

    const handleAddCategoryModalControl = () => {
        return {
            open: function () {
                setAddCategoryModalOpen(true);
            },
            close: function () {
                setAddCategoryModalOpen(false);
                handleAddCategoryModalControl().modalInputClear();
            },
            submit: async function (e) {
                e.preventDefault();
                // let jsonData = {
                //     categoryName: addCategoryName
                // }
                await productDataConnect().insertProductCategoryOne(addCategoryData)
                    .then(data => {
                        if (data) {
                            if (data.message == 'success') {
                                alert('상품 카테고리가 생성되었습니다.');
                            }
                        }
                    });
                await __handleDataConnect().getProductCategoryList();
                handleAddCategoryModalControl().close();

            },
            addCategoryDataOnChange: function (e) {
                setAddCategoryData({ ...addCategoryData, [e.target.name]: e.target.value })
            },
            modalInputClear: function () {
                setAddCategoryData({
                    categoryName: '',
                    priority: 9999
                })
            }
        }
    }

    const handleFixCategoryModalControl = () => {
        return {
            open: function (id) {
                let data = categoryList.data.filter(r => r.id == id)[0];
                setFixCategoryData(data);
                setFixCategoryModalOpen(true);
            },
            close: function () {
                setFixCategoryModalOpen(false);
                handleFixCategoryModalControl().modalInputClear();
            },
            submit: async function (e) {
                e.preventDefault();
                await __handleDataConnect().updateCategoryOne(fixCategoryData);
                await __handleDataConnect().getProductCategoryList();
                handleFixCategoryModalControl().close();

            },
            categoryDataOnChange: function (e) {
                setFixCategoryData({ ...fixCategoryData, [e.target.name]: e.target.value })
            },
            modalInputClear: function () {
                setFixCategoryData(null);
            }
        }
    }

    const handleCategoryControl = () => {
        return {
            deleteOne: async function (id) {
                if (window.confirm('정말로 삭제하시겠습니까?')) {
                    let jsonData = categoryList.data.filter(r => r.id == id)[0];
                    await __handleDataConnect().deleteProductCategoryOne(jsonData);
                } else {
                    return;
                }

            }
        }
    }

    const handleProductControl = () => {
        return {
            deleteOne: async function (id) {
                let jsonData = productList.filter(r => r.product.id == id)[0].product;
                await __handleDataConnect().deleteProductOne(jsonData);
                await __handleDataConnect().getProductList();
            },
            categoryOnChange: async function (e) {
                let query = queryString.parse(window.location.search);

                let pageIndex = query.pageIndex;
                let categoryId = e.target.value;
                let queryData = queryString.stringify({ categoryId: categoryId });
                let newUrl = `/admin/product?${queryData}`;
                history.push(newUrl);
            },
            searchAll: async function () {
                history.push('/admin/product');
            }
        }
    }

    const handleAddProductModalControl = () => {
        return {
            open: function () {
                handleUpdateProductModalControl().close();
                setAddProductModalOpen(true);
            },
            close: function () {
                setAddProductModalOpen(false);
                handleAddProductModalControl().modalInputClear();
            },
            submit: async function (e) {
                e.preventDefault();
                let jsonData = {
                    categoryId: addProductItemData.categoryId,
                    priority: addProductItemData.priority,
                    name: addProductItemData.name,
                    introduce: addProductItemData.introduce,
                    summary: addProductItemData.summary,
                    desc: addProductItemData.editorData,
                    imageUrl: addProductItemData.imageUrl
                }
                await __handleDataConnect().insertProductOne(jsonData);
                handleAddProductModalControl().close();

            },
            modalInputClear: function () {
                setAddProductItemData({
                    categoryId: '',
                    priority: 9999,
                    name: '',
                    introduce: '',
                    summary: '',
                    editorData: '',
                    imageUrl: '/images/sample/imageNo.png'
                });
            },
            onValueChange: function (e) {
                setAddProductItemData({ ...addProductItemData, [e.target.name]: e.target.value })
            },
            imageUploadToS3: async function (event) {
                //빈파일이 아닌 경우 함수 진행
                if (event.target.files !== null) {
                    // setFullPageLoading(true);
                    //FormData 생성
                    const fd = new FormData();
                    //FormData에 key, value 추가하기
                    fd.append('file', event.target.files[0]);
                    // axios 사용해서 백엔드에게 파일 보내기
                    await productDataConnect().imageUploadToS3(fd).then(data => {
                        addProductImageUploaderRef.current.value = ''
                        if (data.message == 'success') {
                            setAddProductItemData({ ...addProductItemData, ['imageUrl']: data.imageUrl })
                        }
                    });
                    // setFullPageLoading(false);
                }
            }
        }
    }

    const handleAddProductEditorControl = () => {
        return {
            onChange: function (data) {
                setAddProductItemData({ ...addProductItemData, ['editorData']: data })
            },
            onBlur: function () {
            }
        }
    }

    const handleUpdateProductModalControl = () => {
        return {
            open: function (targetId) {
                handleAddProductModalControl().close();

                let data = productList.filter(r => r.product.id == targetId)[0].product;
                // console.log(data);
                setUpdateProductItemData(data);
                setUpdateProductModalOpen(true);
            },
            close: function () {
                setUpdateProductModalOpen(false);
                setUpdateProductItemData(null);
            },
            submit: async function (e) {
                e.preventDefault();
                await __handleDataConnect().updateProductOne(updateProductItemData);
                await __handleDataConnect().getProductList();
                handleUpdateProductModalControl().close();
            },
            onValueChange: function (e) {
                setUpdateProductItemData({ ...updateProductItemData, [e.target.name]: e.target.value })
            },
            imageUploadToS3: async function (event) {
                //빈파일이 아닌 경우 함수 진행
                if (event.target.files !== null) {
                    // setFullPageLoading(true);
                    //FormData 생성
                    const fd = new FormData();
                    //FormData에 key, value 추가하기
                    fd.append('file', event.target.files[0]);
                    // axios 사용해서 백엔드에게 파일 보내기
                    await productDataConnect().imageUploadToS3(fd).then(data => {
                        updateProductImageUploaderRef.current.value = ''
                        if (data.message == 'success') {
                            setUpdateProductItemData({ ...updateProductItemData, ['imageUrl']: data.imageUrl })
                        }
                    });
                    // setFullPageLoading(false);
                }
            }
        }
    }

    const handleUpdateProductEditorControl = () => {
        return {
            onChange: function (data) {
                setUpdateProductItemData({ ...updateProductItemData, ['desc']: data })
            },
            onBlur: function () {
            }
        }
    }

    return (
        isLoged ?
            <>
                <Container>
                    <AdminNav></AdminNav>
                    {categoryList ?
                        <CategoryComponent
                            categoryList={categoryList}

                            handleModalControl={handleAddCategoryModalControl}
                            handleCategoryControl={handleCategoryControl}
                            handleFixModalControl={handleFixCategoryModalControl}
                        ></CategoryComponent>
                        :
                        <>
                            <div className='text-center'>
                                <div>카테고리 리스트 로딩중...</div>
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>

                        </>
                    }


                    {categoryList && productList && productPage ?
                        <ProductComponent
                            categoryList={categoryList}
                            productList={productList}
                            productPage={productPage}
                            updateProductModalOpen={updateProductModalOpen}

                            handleProductControl={handleProductControl}
                            handleAddProductModalControl={handleAddProductModalControl}
                            handleUpdateProductModalControl={handleUpdateProductModalControl}
                        >
                        </ProductComponent>
                        :
                        <>
                            <div className='text-center'>
                                <div>상품 목록 로딩중...</div>
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>

                        </>
                    }



                    <AddCategoryModal
                        modalOpen={addCategoryModalOpen}
                        addCategoryData={addCategoryData}
                        addCategoryName={addCategoryName}


                        handleModalControl={handleAddCategoryModalControl}
                    ></AddCategoryModal>
                    <FixCategoryModal
                        modalOpen={fixCategoryModalOpen}
                        fixCategoryData={fixCategoryData}

                        handleModalControl={handleFixCategoryModalControl}
                    ></FixCategoryModal>
                    <AddProductModal
                        addProductFieldRef={addProductFieldRef}
                        imageUploaderRef={addProductImageUploaderRef}

                        categoryList={categoryList}
                        addProductItemData={addProductItemData}

                        modalOpen={addProductModalOpen}
                        handleModalControl={handleAddProductModalControl}
                        handleEditorControl={handleAddProductEditorControl}
                    >

                    </AddProductModal>
                    <UpdateProductModal
                        updateProductFieldRef={updateProductFieldRef}
                        imageUploaderRef={updateProductImageUploaderRef}

                        modalOpen={updateProductModalOpen}
                        categoryList={categoryList}
                        updateProductItemData={updateProductItemData}

                        handleModalControl={handleUpdateProductModalControl}
                        handleEditorControl={handleUpdateProductEditorControl}
                    >

                    </UpdateProductModal>
                </Container>
            </>
            :
            <></>
    );
}

export default AdminProductMain;