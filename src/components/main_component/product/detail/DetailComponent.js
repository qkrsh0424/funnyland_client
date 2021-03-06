import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CkeditorModules from '../../../modules/CkeditorModules';

const Container = styled.div`
    margin-bottom:100px;
`;

const MainTitleBox = styled.div`
    margin-top:70px;
`;
const MainTitle = styled.div`
    text-align:center;
    font-size:42px;
    font-weight:800;
    @media only screen and (max-width:768px){
        &{
            font-size:35px;
        }
    }
    @media only screen and (max-width:320px){
        &{
            font-size:28px;
        }
    }
`;

const MainTitleSub = styled.div`
    text-align:center;
    font-size:22px;
    font-weight:600;
    @media only screen and (max-width:768px){
        &{
            font-size:20px;
        }
    }
    @media only screen and (max-width:320px){
        &{
            font-size:18px;
        }
    }
`;

const ExplainEl = styled.div`
    text-align:center;
    font-size:22px;
    font-weight:600;
    @media only screen and (max-width:768px){
        &{
            font-size:20px;
        }
    }
    @media only screen and (max-width:320px){
        &{
            font-size:18px;
        }
    }
`;

const ExplainEl2 = styled.div`
    text-align:center;
    font-size:32px;
    font-weight:700;
    @media only screen and (max-width:768px){
        &{
            font-size:28px;
        }
    }
    @media only screen and (max-width:320px){
        &{
            font-size:24px;
        }
    }
`;

const LineBreaker1 = styled.div`
    width: 55px;
    height: 5px;
    margin: 30px auto 45px;
    background-color: #ee5470;
`;

const ProductImageWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-top: 100%;
`;

const ProductImageEl = styled.img`
    width:100%;
    height:100%;
    border: 4px double #f1f1f1;
    /* border-radius:15px; */
    object-fit: cover;
`;
const ProductImageBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background: linear-gradient(to bottom right, #ee5470, #f8bac9); */
    box-shadow: rgb(255 255 255 / 25%) 0px 5px 15px;
    /* box-shadow: rgb(0 0 0 / 25%) 0px 5px 15px; */
    border-radius:15px;
    transition: .5s;
    /* &:hover {
        background:#ee5470;
        transform:scale(1.1);
        border: 1px solid white;
    } */
`;

const ProductIntroContainer = styled.div`
    margin:40px auto;
`;

const ProductIntroWrapper = styled.div`
`;

const ProductIntroBox = styled.div`
    margin-top:12px;
`;

const ProductIntroCategoryEl = styled.p`
    font-size:18px;
    color:#808080;
`;

const ProductIntroProductNameEl = styled.h2`
    font-weight:700;
`;

const ProductIntroProductSub = styled.p`
    border-left:3px solid #ee5470;
    padding-left:15px;
    font-size:18px;
    font-weight:700;
`;

const ProductIntroProductSubDesc = styled.p`
    white-space:pre-line;
    padding-left:15px;
    border-left:3px solid #ee547000;
    font-size:16px;
    font-weight:500;
`;

const ProductDescContainer = styled.div`
`;

const ProductDescBox = styled.div`
    margin:20px auto;
    /* padding:10px; */
    /* border: 1px solid #f1f1f1; */
`;

const ButtonEl = styled(Link)`
    width:100%;
    font-weight:600;
    color:white;
    background-color:#f7734a;
    border:1px solid white;
    box-shadow: 0 0 11px rgba(33,33,33,.4);
    &:hover{
        border:1px solid white;
        background-color:#ee5470;
        color:white;
        box-shadow: 0 0 31px rgba(33,33,33,.4);
    }
`;
const DetailComponent = (props) => {
    return (
        <>
            <Container>
                <MainTitleBox>
                    <MainTitle>
                        PRODUCT DETAILS
                        </MainTitle>
                    <MainTitleSub>제품 상세</MainTitleSub>
                    <LineBreaker1></LineBreaker1>
                    <ExplainEl>{props.productData.product.name}</ExplainEl>
                </MainTitleBox>
                <ProductIntroContainer className='container'>
                    <ProductIntroWrapper className='row'>
                        <ProductIntroBox className='col-lg-6'>
                            <ProductImageWrapper>
                                <ProductImageBox>
                                    <ProductImageEl src={props.productData.product.imageUrl} />
                                </ProductImageBox>
                            </ProductImageWrapper>
                        </ProductIntroBox>
                        <ProductIntroBox className='col-lg-6'>
                            <ProductIntroCategoryEl>{props.productData.category.categoryName}</ProductIntroCategoryEl>
                            <ProductIntroProductNameEl>
                                {props.productData.product.name}
                            </ProductIntroProductNameEl>
                            {props.productData.product.newChecked ? <span className="badge badge-primary" style={{ marginRight: '5px' }}>NEW</span> : <></>}
                            {props.productData.product.hitChecked ? <span className="badge badge-danger" style={{ marginRight: '5px' }}>HIT</span> : <></>}
                            {props.productData.product.eventChecked ? <span className="badge badge-info" style={{ marginRight: '5px' }}>EVENT</span> : <></>}
                            <hr />
                            <div style={{ padding: '12px' }}>
                                <ProductIntroProductSub>제 품 소 개</ProductIntroProductSub>
                                <ProductIntroProductSubDesc>{props.productData.product.introduce}</ProductIntroProductSubDesc>
                            </div>
                            <div style={{ padding: '12px' }}>
                                <ProductIntroProductSub>제 품 요 약 | 제 원</ProductIntroProductSub>
                                <ProductIntroProductSubDesc>{props.productData.product.summary}</ProductIntroProductSubDesc>
                            </div>
                            <div style={{ padding: '12px' }}>
                                <ButtonEl className="btn" to='/product/counsel'>구매상담하기</ButtonEl>
                            </div>
                        </ProductIntroBox>
                    </ProductIntroWrapper>
                </ProductIntroContainer>
                <LineBreaker1></LineBreaker1>
                <ProductDescContainer className='container'>
                    <ExplainEl2>제품 상세</ExplainEl2>
                    <ProductDescBox>
                        <div className='ck-content clearfix' dangerouslySetInnerHTML={{ __html: props.productData.product.desc }}>
                        </div>
                    </ProductDescBox>

                </ProductDescContainer>

                {/* <CKEditor
                    editor={ClassicEditor}
                    // data="<p>Hello from CKEditor 5!</p>"
                    data={props.productData.product.desc}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log('Editor is ready to use!', editor);
                    }}
                    config={
                        {
                            isReadOnly: true,
                        }
                    }
                /> */}
            </Container>
        </>
    );
}

export default DetailComponent;