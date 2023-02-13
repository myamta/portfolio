import './anC.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function AnC() {
   useEffect(() => {
      AOS.init();
   });

   return (
      <div className="AnC" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="3000">
         <div className="intro">
            <h2>ABOUT</h2>
            <h2>CAREER & CONTACT</h2>
            <div className="introInner">
               <div className="photo">사진</div>
               <div className="textBox">
                  <div className="introTitle">
                     <div className="innerTxt">
                        <h2>저는 어쩌고저쩌고 어쩌고저쩌고 입니다.</h2>
                     </div>

                     <p>
                        도전에 두려워하지 않고 다양한 상황에 부딪히고 경험해보며 배워가며 발전하는 개발자가
                        되고싶습니다.
                     </p>
                  </div>

                  <ul className="tagList">
                     <li>#1994.04.15</li>
                     <li>#INFP</li>
                     <li>#책임감</li>
                     <li>#끈질김</li>
                     <li>#꾸준함</li>
                     <li>#해결력</li>
                  </ul>
               </div>
            </div>

            <div className="careerWrapper">
               <h2>EDUCATION</h2>
               <ul>
                  <li>22. 9 ~ 23.2 프론트엔드 개발 및 실무프로젝트 구현과정 양성 지원과정</li>
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
