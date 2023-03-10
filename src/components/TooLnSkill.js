import "./toolsnskill.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function TooLnSkill() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="tns">
      <div className="tnsinner" data-aos="fade-down">
        <h2>What can I do ?</h2>
        <div className="toolcontainer">
          <div
            className="tools"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h3>01</h3>
            <div className="toolBox">
              <p>Graphic Tools</p>
              <ul>
                <li>이미지 편집 & 디자인 UI/UX 소스 제작</li>
                <li>아이콘 & 일러스트 제작</li>
                <li>GIF 파일 제작 가능</li>
                <li>FIGMA로 프로토타입 제작</li>
              </ul>
            </div>
          </div>
          <div
            className="tools"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h3>02</h3>
            <div className="toolBox">
              <p>Html / Css</p>
              <ul>
                <li>웹 사이트 구축 및 디자인</li>
                <li>웹표준 & 웹접근성을 준수하는 마크업</li>
                <li>flex & grid & positon를 이용한 레이아웃</li>
                <li>구현 Mediaquery를 이용한 반응형 웹 제작 </li>
                <li>CSS animation을 활용한 모션 구현</li>
              </ul>
            </div>
          </div>
          <div
            className="tools"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h3>03</h3>
            <div className="toolBox">
              <p>javascript</p>
              <ul>
                <li>웹 사이트 구현</li>
                <li>이벤트 메서드 사용</li>
                <li>OpenAPI 사용 가능</li>
                <li>통신 Fetch API, Axios 라이브러리</li>
                <li>setTimeout 및 async, await 함수를 활용한 비동기 작업</li>
              </ul>
            </div>
          </div>
          <div
            className="tools"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h3>04</h3>
            <div className="toolBox">
              <p>React</p>
              <ul>
                <li>함수 컴포넌트 사용</li>
                <li>styled components를 이용한 스타일 구성</li>
                <li>react-router-dom을 활용한 페이지 이동</li>
                <li>React HOOK을 이용한 동적 사이트 구현</li>
                <li>map함수, 삼항 연산자와 같은 JS 문법으로 데이터 바인딩</li>
              </ul>
            </div>
          </div>
          <div
            className="tools"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h3>05</h3>
            <div className="toolBox">
              <p>Git & GitHub</p>
              <ul>
                <li>git bash 혹은 VScode 사용</li>
                <li>팀원들과의 원활한 소통 및 협업 가능</li>
                <li>github를 이용한 배포</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TooLnSkill;
