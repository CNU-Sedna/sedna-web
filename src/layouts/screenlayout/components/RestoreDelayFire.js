import styled from "@emotion/styled";
import React, { useState } from "react";

const Wrapper = styled.div`
    background-color: var(--color-lightgray);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    gap: 5px;
`;

const EachSetting = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    background-color: var(--color-darkwhite);
    padding: 5px;
    span {
        font-size: 20px;
        font-weight: 550;
    }
`;

const OnButton = styled.button`
    width: 70px;
    margin-left: 10px;
    background-color: var(--color-blue);
    font-size: 20px;
    color: var(--color-white);
    border: none;
    cursor: pointer;
    height: 80%;
`;

const OffButton = styled.button`
    width: 70px;
    margin-left: 10px;
    background-color: #81C6E8;
    font-size: 20px;
    color: var(--color-black);
    border: none;
    cursor: pointer;
    height: 80%;
`;

const RestoreDelayFire = () => {
    const [isRestore, setIsRestore] = useState(false);
    const [isdelay, setIsDelay] = useState(false);

    return (
        <Wrapper>
            <EachSetting>
                <div>
                    <span>자동</span>
                    <br/>
                    <span>복구</span>
                </div>
                {isRestore ?
                <OnButton onClick={() => setIsRestore(prev => !prev)}>
                    ON
                </OnButton>
                :
                <OffButton onClick={() => setIsRestore(prev => !prev)}>
                    OFF
                </OffButton>
                }
            </EachSetting>
            <EachSetting>
                <div>
                    <span>축적</span>
                    <br/>
                    <span>화재</span>
                </div>
                {isdelay ?
                <OnButton onClick={() => setIsDelay(prev => !prev)}>
                    ON
                </OnButton>
                :
                <OffButton onClick={() => setIsDelay(prev => !prev)}>
                    OFF
                </OffButton>
                }
            </EachSetting>
        </Wrapper>
    );
}

export default RestoreDelayFire;