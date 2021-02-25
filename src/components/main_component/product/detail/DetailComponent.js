import styled from 'styled-components';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Container = styled.div`

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
const LineBreaker1 = styled.div`
    width: 55px;
    height: 5px;
    margin: 30px auto 45px;
    background-color: #ee5470;
`;

const DetailComponent = (props) => {
    return (
        <>
            <Container>
                <MainTitleBox>
                    <MainTitle>
                        PRODUCT
                        </MainTitle>
                    <MainTitleSub>제품 안내</MainTitleSub>
                    <LineBreaker1></LineBreaker1>
                    <ExplainEl>{props.productData.product.name}</ExplainEl>
                </MainTitleBox>
                <div className='container-fluid'>
                    <div className='ck-content' dangerouslySetInnerHTML={{ __html: props.productData.product.desc }}>
                    </div>
                </div>
                
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