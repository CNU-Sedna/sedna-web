import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
    padding: 10px;
    border-radius: 10px;
    background-color: var(--color-lightgray);
`;

const Button = styled.button`
    width: 120px;
    font-size: 18px;
    font-weight: 550;
    margin: 2px;
    background-color: #fff;
    border: 1px solid black;
    background-color: var(--color-darkwhite);
    cursor: pointer;
`;

const ReceiverNumeber = () => {
    return (
        <Wrapper>
            <div>
                <Button onClick={() => {}}>초기화면</Button>
                <Button onClick={() => {}}>전체설비</Button>
                <Button onClick={() => {}}>펌프제어</Button>
                <Button onClick={() => {}}>화면제어</Button>
                <Button onClick={() => {}}>시스템설정</Button>
            </div>
            <div>
                <Button onClick={() => {}}>전체화면</Button>
                <Button onClick={() => {}}>동작설비</Button>
                <Button onClick={() => {}}>중계기제어</Button>
                <Button onClick={() => {}}>운영기록</Button>
                <Button onClick={() => {}}>시스템복구</Button>
            </div>
        </Wrapper>
    );
}

export default ReceiverNumeber;