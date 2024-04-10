import React from "react";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import Cards from "../src/Cards";
import Navbar from "./Navbar";
import Verification from "./Verification";
import Ctasection from "./Ctasection";
import Footer from "./Footer";

const App=()=>{
    return(
        <>
        <Home/>
        <CreateAccount/>
        <Cards/>
        <Navbar/>
        <div className="container">
        <Verification/>
        <Ctasection/></div>
        <Footer/>
        </>
    );
};
export default App;