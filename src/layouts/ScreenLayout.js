import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
    border: 1px solid black;
    margin: 20px;
    border-radius: 10px;
    display: grid;
    grid-template-rows: 2fr 8fr 1fr;
    background-color: aqua;
    box-sizing: border-box;
    flex-grow: 1;
`;

const Header = styled.div`
    background-color: red;
`;

const Main = styled.div`

`;

const Footer = styled.div`
    background-color: blue;
`;

const ScreenLayout = ({children}) => {
    return (
    <Wrapper>
        <Header></Header>
        <Main>{children}</Main>
        <Footer></Footer>
    </Wrapper>
    );
}

export default ScreenLayout;