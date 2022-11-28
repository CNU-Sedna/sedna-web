import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-darkwhite);
    place-items: center;
    border: 1px solid black;
    padding: 5px;

    span {
        font-size: 20px;
        font-weight: 550;
    }
`;

const ReceiverNumeber = () => {
    const [num, setNum] = useState(0);

    return (
        <Wrapper>
            <span>수신기{num}</span>
        </Wrapper>
    );
}

export default ReceiverNumeber;