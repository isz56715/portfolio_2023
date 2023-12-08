import React from "react";

const portText = [
    {
        title: <div dangerouslySetInnerHTML={{ __html: "보유중인 상비약을 활용한 <br>건강관리 앱" }}></div>,
        desc: <div dangerouslySetInnerHTML={{ __html: "구비한 상비약을 기반으로 증상에 알맞은 약을 추천하고 복용내역을 확인할 수 있는 기능을 제공<br><br>주요기술 : Flutter, MySQL, Django<br>개발인원 : 4명<br>수행역할 : 조장, 앱 개발" }}></div>,
        code: "https://blog.naver.com/dltnwhd65/223222776268",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolio-7755a.appspot.com/o/%EA%B7%B8%EB%A6%BC2.png?alt=media&token=c6337cdd-d2ec-4477-9b77-72125799951e",
        name: "이수종 포트폴리오",
        view: "https://github.com/isz56715/medicine",
    },
    {
        title: <div dangerouslySetInnerHTML={{ __html: "하천 수질 데이터를 활용한 <br>농업용 수질등급 확인 서비스" }}></div>,
        desc: <div dangerouslySetInnerHTML={{ __html: "전라북도 지역의 하천 수질데이터를 기반으로 농민들에게 농업용 수질 등급 확인 서비스를 제공<br><br>주요기술 : Flutter, Oracle, Django, Open API<br>개발인원 : 2명<br>수행역할 : 발표, 앱 개발" }}></div>,
        img: "https://firebasestorage.googleapis.com/v0/b/portfolio-7755a.appspot.com/o/Screenshot_1690096864.png?alt=media&token=cf9f14f2-841e-4478-b4bf-87b894e24c94",
        code: "https://blog.naver.com/dltnwhd65/223177285197",
        name: "이수종 포트폴리오",
        view: "https://github.com/isz56715/river",
    },
    {
        title: <div dangerouslySetInnerHTML={{ __html: "분실물을 위한 <br>QR탐지 커뮤니티" }}></div>,
        desc: <div dangerouslySetInnerHTML={{ __html: "기존의 분실물 찾기 방법을 개선하여 QR 코드를 통한 분실물 찾기 시스템을 구현<br><br>주요기술 : Flutter, Firebase<br>개발인원 : 4명<br>수행역할 : 조장, 앱 개발" }}></div>,
        img: "https://firebasestorage.googleapis.com/v0/b/portfolio-7755a.appspot.com/o/Screenshot_1699506209.png?alt=media&token=796c3738-c23c-4ecb-b2c0-2978bae9625a",
        code: "https://blog.naver.com/dltnwhd65/223273764581",
        name: "이수종 포트폴리오",
        view: "https://github.com/isz56715/QRC",
    },
];

const Port = () => {
    return (
        <section id="port">
            <div className="port__inner">
                <div className="port__title">
                    Project <em>최근 작업물</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article className={`port__item p${key + 1}`} key={key}>
                            <a href={port.code} target="_blank" className="img" rel="noreferrer">
                                <img src={port.img} alt={port.name} />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a 
                                href={port.view} 
                                target="_blank" 
                                className="site" 
                                rel="noreferrer noopener"
                            >
                                코드 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;