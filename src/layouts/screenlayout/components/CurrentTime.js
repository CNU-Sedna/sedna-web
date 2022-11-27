import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-lightgray);

    span {
        font-size: 22px;
    }
`;

const CurrentTime = () => {
    const [currentTime, setCurrentTime] = useState();

    const calTime = () => {
        const today = new Date();   
        const hours = ('0' + today.getHours()).slice(-2); 
        const minutes = ('0' + today.getMinutes()).slice(-2);
        const seconds = ('0' + today.getSeconds()).slice(-2); 
        const timeString = hours + ':' + minutes  + ':' + seconds;
        setCurrentTime(timeString);
    }

    useEffect(() => {
        setInterval(() => calTime(), 1000);
    }, []);

    
    return (
        <Wrapper>
            <span>{currentTime}</span>
        </Wrapper>
    );
}

export default CurrentTime;