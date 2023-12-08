import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Site from "../components/Site";
import Port from "../components/Port";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";
import Timeline from "../components/Timeline";


const HomeView = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Site />
            <Timeline/>
            <Port />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;