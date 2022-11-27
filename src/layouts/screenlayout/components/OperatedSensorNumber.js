import styled from "@emotion/styled";
import React, { useState } from "react";

const Wrapper = styled.div`
    display: flex;
    gap: 5px;
    padding: 10px;
    background-color: var(--color-lightgray);
    border-radius: 10px;
`;

const EachSensor = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    padding: 5px;
    background-color: var(--color-darkwhite);
    span {
        font-size: 20px;
        font-weight: 550;
    }
`;

const OperatedSensorNumber = () => {
    const [entire, setEntire] = useState(0);
    const [fire, setFire] = useState(0);
    const [gas, setGas] = useState(0);
    const [accumulation, setAccumulation] = useState(0);
    const [monitoring, setMonitoring] = useState(0);
    const [weird, setWeird] = useState(0);
    const [isolation, setIsolation] = useState(0);
    const [broken, setBroken] = useState(0);
    const [systembroken, setSystemBroken] = useState(0);

    return(
        <Wrapper>
            <EachSensor>
                <span>전체</span>
                <span>{entire}</span>
            </EachSensor>
            <EachSensor>
                <span>화재</span>
                <span>{fire}</span>
            </EachSensor>
            <EachSensor>
                <span>가스</span>
                <span>{gas}</span>
            </EachSensor>
            <EachSensor>
                <span>축적</span>
                <span>{accumulation}</span>
            </EachSensor>
            <EachSensor>
                <span>감시</span>
                <span>{monitoring}</span>
            </EachSensor>
            <EachSensor>
                <span>이상</span>
                <span>{weird}</span>
            </EachSensor>
            <EachSensor>
                <span>격리</span>
                <span>{isolation}</span>
            </EachSensor>
            <EachSensor>
                <span>고장</span>
                <span>{broken}</span>
            </EachSensor>
            <EachSensor>
                <span>시스템고장</span>
                <span>{systembroken}</span>
            </EachSensor>
        </Wrapper>
    );
}

export default OperatedSensorNumber;