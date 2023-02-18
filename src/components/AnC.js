import "./anC.scss";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef } from "react";

function AnC() {
  const path = process.env.PUBLIC_URL;
  const onText = useRef(null);
  useEffect(() => {
    const typed = new Typed(onText.current, {
      strings: [
        `"새로운 도전을 좋아하는"`,
        `"사람과의 대화를 좋아하는"`,
        `"궁금한것이 많은"`,
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      className="AnC"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="3000"
    >
      <div className="intro">
        <h2>ABOUT</h2>
        <h2>CAREER & CONTACT</h2>
        <div className="introInner">
          <div className="photo">
            <img src={path + "/profile.png"} alt="bondee" />
          </div>
          <div className="textBox">
            <div className="introTitle">
              <div className="innerTxt">
                <h2 ref={onText} className="flowText"></h2>
                <h2>저는 신입개발자 김지예 입니다.</h2>
              </div>

              <p>
                도전에 두려워하지 않고 다양한 상황에 부딪히고 경험하고 발전하며,
                조금 늦더라도 포기하지 않고 꾸준히 노력하여 팀과 회사에 보탬이
                되는 인재가 되겠습니다.
              </p>
            </div>

            <ul className="tagList">
              <li>#1994.04.15</li>
              <li>#INFP</li>
              <li>#책임감</li>
              <li>#끈질김</li>
              <li>#해결력</li>
              <li>#느리지만 꾸준히</li>
            </ul>
          </div>
        </div>

        <div className="careerWrapper">
          <h2>EDUCATION</h2>
          <ul>
            <li>
              22. 9 ~ 23.2 프론트엔드 개발 및 실무프로젝트 구현과정 양성
              지원과정
            </li>
            <li>2019 ~ 현 &#41; 한국사이버외국어대학교 일본어학과 재학중</li>
          </ul>
          <h2>WORK EXPERIENCE</h2>
          <ul>
            <li>19.2 ~ 22.6 변호사 한민열 법률사무소</li>
            <li>17.8 ~ 18.6 변호사 신영국 법률사무소</li>
            <li>16.12 ~ 17.2 세가퍼블리싱코리아 </li>
            <li>13.11~15.9 동수원종합법무법인 서울분사무소</li>
          </ul>
          <h2>LICENCE</h2>
          <ul>
            <li>컴퓨터그래픽스운용기능사</li>
            <li>JLPT N2</li>
          </ul>
          <h2>EMAIL</h2>
          <span>kjy6478@naver.com</span>
        </div>
      </div>
    </div>
  );
}

export default AnC;
