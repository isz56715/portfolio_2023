import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { HiAcademicCap } from "react-icons/hi2";

const Intro = () => {
    return (
        <section id="intro">
            <div class="intro__inner">
                <h1 class="intro__title">Developer Portfolio</h1>
                <div class="intro__text">
                </div>
                <div class="grid-container">
                    <div class="grid-item">
                        <FaUser className="icon" size="50" />
                        <div className="text-container">
                            <h4>이름</h4>
                            <p>이수종</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <FaCalendarAlt className="icon" size="50" />
                        <div className="text-container">
                            <h4>생년월일</h4>
                            <p>98.07.10</p>
                        </div>
                    </div>
                    <div class="grid-item">
                    <FaMapMarkerAlt className="icon" size="50" />
                        <div className="text-container">
                        <h4>주소지</h4>
                        <p>전라북도 군산시</p>
                        </div>
                    </div>
                    <div class="grid-item">
                    <IoCall className="icon" size="50" />
                        <div className="text-container">
                        <h4>연락처</h4>
                        <p>010-6530-5671</p>
                        </div>
                    </div>
                    <div class="grid-item">
                    <IoMdMail className="icon" size="50" />
                        <div className="text-container">
                        <h4>이메일</h4>
                        <p>isz56715@gmail.com</p>
                        </div>
                    </div>
                    <div class="grid-item">
                    <HiAcademicCap className="icon" size="50" />
                        <div className="text-container">
                        <h4><br />학력</h4>
                        <p>군산대학교<br />(IT융합통신공학과)</p>
                        </div>
                    </div>
                </div>

            </div>


        </section>

    );
};

export default Intro;