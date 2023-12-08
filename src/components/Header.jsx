import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";

const headerNav = [
    {
        title: "intro",
        url: "#intro"
    }, 
    {
        title: "skills",
        url: "#site"
    },
    {
        title: "timeline",
        url: "#timeline"
    },
    {
        title: "project",
        url: "#port"
    },
];

const Header = () => {
    const [show, setShow] = useState(false);


    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    const [portfolioData, setPortfolioData] = useState(false);

    useEffect(() => {
        const portfolioName = firestore.collection("test");

        portfolioName.doc("SXaWkgj18V8kTgZU5FjX").get().then((doc) => {
            if (doc.exists) {
                setPortfolioData(doc.data());
            } else {
                console.log("No such document!");
            }
        });
    }, []);

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">{portfolioData.test}</a>
                </div>
                <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((nav, key) => (
                            <li key={key}>
                                <a href={nav.url}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header__nav__mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={show ? "true" : "false"}
                    role="button"
                    tabIndex="0"
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;