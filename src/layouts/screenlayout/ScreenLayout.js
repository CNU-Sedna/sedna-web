import React from "react";
import styled from "@emotion/styled";
import ReceiverNumeber from "./components/ReceiverNumber";
import SystemSetting from "./components/SystemSetting";
import ReceiverStatus from "./components/ReceiverStatus";
import CurrentTime from "./components/CurrentTime";
import OperatedSensorNumber from "./components/OperatedSensorNumber";
import RestoreDelayFire from "./components/RestoreDelayFire";

const Wrapper = styled.div`
    border: 1px solid black;
    margin: 20px;
    border-radius: 10px;
    display: grid;
    grid-template-rows: 3fr 10fr 2fr;
    flex-grow: 1;
`;

const Header = styled.div`
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const TimeAndSetting = styled.div`
    display: flex;
    flex-direction: column;
`;

const Main = styled.div`
    margin: 0 10px 10px 10px;
    border-radius: 10px;
    border: 1px solid black;
`;

const Footer = styled.div`
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const ScreenLayout = ({children}) => {
    return (
    <Wrapper>
        <Header>
            <ReceiverNumeber/>
            <TimeAndSetting>
                <CurrentTime/>
                <SystemSetting/>
            </TimeAndSetting>
            <ReceiverStatus/>
        </Header>
        <Main>{children}</Main>
        <Footer>
            <OperatedSensorNumber/>
            <RestoreDelayFire/>
        </Footer>
    </Wrapper>
    );
}

export default ScreenLayout;