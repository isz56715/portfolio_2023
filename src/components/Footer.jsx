import React from "react";

const footerText = [
    {
        title: "github",
        desc: "깃헙에 오시면 더 많은 소스를 볼 수 있습니다.",
        link: "https://github.com/isz56715",
    },
    {
        title: "blog",
        desc: "블로그에 오시면 더 많은 정보를 볼 수 있습니다.",
        link: "https://blog.naver.com/dltnwhd65",
    },
];

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">

                <div className="footer__info">
                    <div className="left">
                    </div>
                    <div className="right">
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.desc}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="address">
                    본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.<br />
                    &copy; 2023 Lee, Su-Jong. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;