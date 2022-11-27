import styled from "@emotion/styled";
import React, { useState } from "react";

const Wrapper = styled.div`
    background-color: var(--color-lightgray);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    gap: 5px;
`;

const EachBattey = styled.div`
    border: 1px solid black;
    padding: 5px;
    background-color: var(--color-darkwhite);
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font-size: 20px;
        font-weight: 550;
    }
`;

const SystemBattery = () => {
    const [mainBattey, setMainBattery] = useState(24.5);
    const [subBattery, setSubBattery] = useState(26.5);

    return (
        <Wrapper>
            <EachBattey>
                <span>주전원</span>
                <span>{mainBattey}V</span>
            </EachBattey>
            <EachBattey>
                <span>에비전원</span>
                <span>{subBattery}V</span>
            </EachBattey>
        </Wrapper>
    );
}

export default SystemBattery;