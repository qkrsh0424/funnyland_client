import styled from 'styled-components';
const IntroduceBodyContentGroup = styled.div`
`;

const DashedLineBreak = styled.div`
    width:100%;
    border-bottom: 1px dashed #ee5470;
    margin-bottom:15px;
`;
const IntroduceBodyContentItem1Box = styled.div`
    
`;

const IntroduceBodyContentItem1El = styled.div`
    text-align:center;
    margin:7% 15% 15% 15%;
    border-left:3px solid #ee5470;
    font-size:20px;
    font-weight:600;
    /* @media only screen and (max-width:768px){
        margin:15%;
    } */
`;

const IntroduceBodyContentItem2Box = styled.div`
    min-height:200px;
`;

const IntroduceBodyContentItem2El = styled.ul`
    font-weight:600;
    /* padding-inline-start: 20px; */
`;

const CompanyHistoryPresent = (props) => {
    const {
        historyYear,
        historys,
        lineBreak
    } = props
    return (
        <IntroduceBodyContentGroup className="row">
            <IntroduceBodyContentItem1Box className='col-sm-4'>
                <IntroduceBodyContentItem1El>{historyYear}.</IntroduceBodyContentItem1El>
            </IntroduceBodyContentItem1Box>
            <IntroduceBodyContentItem2Box className='col-sm-8'>
                <IntroduceBodyContentItem2El>
                    {historys && historys.map((r,index)=><li key={`history-historyYear-${index}`}>{r}</li>)}
                </IntroduceBodyContentItem2El>
            </IntroduceBodyContentItem2Box>
            {lineBreak ? <DashedLineBreak></DashedLineBreak> : ''}
        </IntroduceBodyContentGroup>
    )
}

export default CompanyHistoryPresent;