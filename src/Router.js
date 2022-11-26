import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

const AppRouter = () => {
    return (
        <Router basename="/">
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter;