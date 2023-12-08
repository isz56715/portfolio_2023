import React from "react";
import edu from "../assets/img/edu.png"
import skill from "../assets/img/skills2.png"
import ability from "../assets/img/ability.png"



const siteText = [
    {
        title: "1. 사용 기술",
        code: "1",
        view: "https://port2023-vite.netlify.app",
        img: skill
    },
    {
        title: "역량 달성 목표",
        code: "2",
        view: "https://port2023-react.netlify.app",
        img: ability

    },
    {
        title: "다양한 인터넷 강의 학습",
        code: "3",
        view: "https://port2023-vite.netlify.app",
        img: edu
    },

];

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">Skills</h2>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <article className={`site__item s${key + 1}`} key={key}>
                            <span className="num">
                                {key + 1 === 1 && (
                                    ""
                                )}
                                {key + 1 === 2 && (
                                    site.title
                                )}
                                {key + 1 === 3 && (
                                    site.title
                                )}
                            </span>
                            <div className="text">

                            </div>
                            <h3 className="title">
                                {site.code === '1' && (
                                    < img src={site.img} alt={site.title} />
                                )}
                                {site.code === '2' && (
                                    < img src={site.img} alt={site.title} />

                                )}
                                {site.code === '3' && (
                                    < img src={site.img} alt={site.title} />
                                )}
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Site;