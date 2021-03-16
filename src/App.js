import axios from 'axios';
import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import styled from 'styled-components';

// components
import FullPageLoading from './components/loading/FullPageLoading';
// components - Home
const HomeMain = lazy(() => import('./components/main_component/home/HomeMain'));
// components - Introduce
const IntroduceIntro1Main = lazy(() => import('./components/main_component/introduce/intro1/IntroduceIntro1Main'));
const IntroduceIntro2Main = lazy(() => import('./components/main_component/introduce/intro2/IntroduceIntro2Main'));
const IntroduceIntro3Main = lazy(() => import('./components/main_component/introduce/intro3/IntroduceIntro3Main'));
// components - Foundation
const FoundIntro1Main = lazy(()=>import('./components/main_component/found/intro1/FoundIntro1Main'));
const FoundIntro2Main = lazy(()=>import('./components/main_component/found/intro2/FoundIntro2Main'));
const FoundIntro3Main = lazy(()=>import('./components/main_component/found/intro3/FoundIntro3Main'));
// components - Product
const ProductListMain = lazy(()=>import('./components/main_component/product/list/ProductListMain'));
const ProductDetailMain = lazy(()=>import('./components/main_component/product/detail/ProductDetailMain'));
const ProductCounselMain = lazy(()=>import('./components/main_component/product/counsel/ProductCounselMain'));

// components - Store
const StoreListMain = lazy(()=>import('./components/main_component/store/list/StoreListMain'));
const StoreDetailMain = lazy(()=>import('./components/main_component/store/detail/StoreDetailMain'));

// components - Cs
const CsNoticeMain = lazy(()=>import('./components/main_component/cs/notice/CsNoticeMain'));
const CsDetailMain = lazy(()=>import('./components/main_component/cs/detail/CsDetailMain'));
const CsCounselMain = lazy(()=>import('./components/main_component/cs/counsel/CsCounselMain'));

// components - Admin
const LoginMain = lazy(() => import('./components/main_component/login/LoginMain'));
const AdminHomeMain = lazy(()=>import('./components/main_component/admin/admin_home/AdminHomeMain'));
const AdminCounselingMain = lazy(()=>import('./components/main_component/admin/admin_counseling/AdminCounselingMain'));
const AdminProductMain = lazy(()=>import('./components/main_component/admin/admin_product/AdminProductMain'));
const AdminStoreMain = lazy(()=>import('./components/main_component/admin/admin_store/AdminStoreMain'));
const AdminCSMain = lazy(()=>import('./components/main_component/admin/admin_cs/AdminCSMain'));

// component - policy
const PrivacyAgreement = lazy(()=>import('./components/policy/privacy/PrivacyAgreement'));

const AppContainer = styled.div`
    animation: fadein 1.5s;
    -moz-animation: fadein 1.5s; /* Firefox */
    -webkit-animation: fadein 1.5s; /* Safari and Chrome */
    -o-animation: fadein 1.5s; /* Opera */
    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity:0;
        }
        to {
            opacity: 1;
        }
    }
`;
function App() {
    useEffect(() => {
        axios.get('/api/token/get/csrf').then(res => {
        })
    }, [])
    return (
        <CookiesProvider>
            <BrowserRouter>
                <Suspense fallback={<FullPageLoading></FullPageLoading>}>
                    <AppContainer>
                        <Switch>
                            {/* Home */}
                            <Route exact path='/' component={HomeMain}></Route>
                            {/* Introduce */}
                            <Route exact path='/introduce/intro1' component={IntroduceIntro1Main}></Route>
                            <Route exact path='/introduce/intro2' component={IntroduceIntro2Main}></Route>
                            <Route exact path='/introduce/intro3' component={IntroduceIntro3Main}></Route>
                            {/* Foundation */}
                            <Route exact path='/found/intro1' component={FoundIntro1Main}></Route>
                            <Route exact path='/found/intro2' component={FoundIntro2Main}></Route>
                            <Route exact path='/found/intro3' component={FoundIntro3Main}></Route>
                            {/* Product */}
                            <Route exact path='/product/list' component={ProductListMain}></Route>
                            <Route exact path='/product/detail' component={ProductDetailMain}></Route>
                            <Route exact path='/product/counsel' component={ProductCounselMain}></Route>
                            {/* Store */}
                            <Route exact path='/store/list' component={StoreListMain}></Route>
                            <Route exact path='/store/detail' component={StoreDetailMain}></Route>
                            {/* Cs */}
                            <Route exact path='/cs/notice' component={CsNoticeMain}></Route>
                            <Route exact path='/cs/detail' component={CsDetailMain}></Route>
                            <Route exact path='/cs/counsel' component={CsCounselMain}></Route>
                            {/* Admin */}
                            <Route exact path='/login' component={LoginMain}></Route>
                            <Route exact path='/admin' component={AdminHomeMain}></Route>
                            <Route exact path='/admin/counseling' component={AdminCounselingMain}></Route>
                            <Route exact path='/admin/product' component={AdminProductMain}></Route>
                            <Route exact path='/admin/store' component={AdminStoreMain}></Route>
                            <Route exact path='/admin/cs' component={AdminCSMain}></Route>
                            {/* Agreement */}
                            <Route exact path='/policy/privacy' component={PrivacyAgreement}></Route>
                        </Switch>
                    </AppContainer>
                </Suspense>
            </BrowserRouter>
        </CookiesProvider>
    );
}

export default App;
