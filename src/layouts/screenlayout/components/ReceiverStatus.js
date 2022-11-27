import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
    background-color: var(--color-lightgray);
    border: 1px solid black;
    display: flex;
    gap: 20px;
    padding: 10px;
`;

const EachReceiver = styled.div`
    padding: 5px 10px;
    display: flex;
    align-items: center;
    
    span {
        font-size: 20px;
        font-weight: 550;
    }
`;

const StatusMark = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${(props) => props.isOperate ? "#38E54D" : "#eee"};
    border: 2px solid var(--color-blue);
    //background-color: aliceblue;
    margin-right: 10px;
`;


const ReceiverStatus = () => {
    return (
        <Wrapper>
            <div>
                <EachReceiver>
                    <StatusMark isOperate={true}></StatusMark>
                    <span>교류전원</span>
                </EachReceiver>
                <EachReceiver>
                    <StatusMark isOperate={true}></StatusMark>
                    <span>예비전원</span>
                </EachReceiver>
                <EachReceiver>
                    <StatusMark isOperate={true}></StatusMark>
                    <span>발신기</span>
                </EachReceiver>
            </div>
            <div>
                <EachReceiver>
                    <StatusMark isOperate={false}></StatusMark>
                    <span>시스템이상</span>
                </EachReceiver>
                <EachReceiver>
                    <StatusMark isOperate={false}></StatusMark>
                    <span>예비전원이상</span>
                </EachReceiver>
                <EachReceiver>
                    <StatusMark isOperate={false}></StatusMark>
                    <span>전화</span>
                </EachReceiver>
            </div>
        </Wrapper>
    );
}

export default ReceiverStatus;