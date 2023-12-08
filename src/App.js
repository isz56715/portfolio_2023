import React from "react";
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { firestore } from "./firebase";
import HomeView from "./views/HomeView";
import lenis from "./utils/smooth";
import link from "./utils/link";

const App = () => {
  useEffect(() => {
    console.log(firestore);
    lenis();
    link();
  });
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeView />} />
        </Routes>
    </BrowserRouter>
    );
};

export default App;