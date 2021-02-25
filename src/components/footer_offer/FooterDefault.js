import { useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
    background:#282828;
    padding:50px 0 20vh 0;
    color:#777;
    text-align:center;
    font-size:14px;
    @media only screen and (max-width:768px){
        font-size:10px;
    }
`;

const CompanyDetailText = styled.div`

`;

const CopyrightText = styled.div`
    margin-top: 5px;
    font-size: 13px;
    color: #555;
`;
const FooterDefault = () =>{
    const [companyInfo, setCompanyInfo] = useState({
        name:'게임토피아',
        president: '조정준',
        bussinessNo:'104-06-23141',
        address:'서울특별시 중구 을지로 157 대림상가 2F 다열 265호',
        tel:'02-2272-1244',
        fax:'02-2274-1244',
        mobile:'010-5381-9104',
        copyright:'게임토피아'
    });
    return(
        <Container>
            <CompanyDetailText>업체명: {companyInfo.name} | 대표: {companyInfo.president} | 사업자번호: {companyInfo.bussinessNo}</CompanyDetailText>
            <CompanyDetailText>주소: {companyInfo.address}</CompanyDetailText>
            <CompanyDetailText>TEL: {companyInfo.tel} | FAX: {companyInfo.fax}</CompanyDetailText>
            <CopyrightText>Copyright(c) {companyInfo.name}, All rights reserved.</CopyrightText>
        </Container>
    );
}

export default FooterDefault;