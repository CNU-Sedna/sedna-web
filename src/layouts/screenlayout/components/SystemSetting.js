import styled from "@emotion/styled";
import React, { useEffect } from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
`;

const SystemSetting = () => {

    return (
        <Wrapper>
            <span>수신기#</span>
        </Wrapper>
    );
}

export default SystemSetting;