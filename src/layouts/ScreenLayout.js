import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 2fr 8fr 1fr;
    width: 100%;
    height: 100%;
    background-color: aqua;
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