import { Link } from 'react-router-dom';
import './pjInfo.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ProjectInfo = () => {
   useEffect(() => {
      AOS.init();
   });
   const path = process.env.PUBLIC_URL;

   return (
      <section className="projectInfo">
         <div className="projectWrapper">
            <div class="pjTitleBox">
               <h2>웹사이트 클론코딩</h2>
               <h3>2022.11.14 ~ 2022.11.21</h3>
            </div>
            <div className="pjImgBox">
               <img src={path + './images/photo3.png'} alt="" />
            </div>
            <div class="complete">
               <div class="overview">
                  <h3>OVERVIEW</h3>
                  <div className="overviewInner">
                     <h4>DYAMI</h4>
                     <p>해당 프로젝트는 실존하는 사이트를 제한시간 내에 구현해내는 프로젝트였습니다.</p>
                     <ul className="overviewProject">
                        <li>
                           <strong>프로젝트</strong>
                           <ul>
                              <li>개인</li>
                           </ul>
                        </li>
                        <li>
                           <strong>기여도</strong>
                           <ul>
                              <li>팀 프로젝트 100%</li>
                           </ul>
                        </li>
                        <li>
                           <strong>작업기간</strong>
                           <ul>
                              <li>2022.11.14 ~ 2022.11.21</li>
                           </ul>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="ps">
                  <div className="psInner" data-aos="fade-up" data-aos-anchor-placement="top-center">
                     <div className="psInnerText">
                        <p>진행과정</p>
                     </div>

                     <ul className="innerUl">
                        <li>웹사이트 선정</li>
                        <li>HTML 뼈대 작성</li>
                        <li>CSS작성</li>
                     </ul>
                  </div>

                  <div className="good" data-aos="fade-up" data-aos-anchor-placement="top-center">
                     <div className="goodInner">
                        <p>잘된 점</p>
                     </div>
                     <ul>
                        <li>
                           <h2>빠른 피드백과 대립 없는 의견 조율</h2>
                           <p>
                              서로의 의견을 정확하게 전달하고, 자신의 생각과 다른 점이어도 서로 잘 받아들이며
                              <br /> 더 좋은 방향으로 진행되도록 피드백을 활발하게 하였습니다.
                           </p>
                        </li>
                        <li>
                           <h2>조금만 더</h2>
                           <p>맡은 분량에만 안주하지 않고 더 구현할 수 있는 페이지를 찾아 최대한 구현하였습니다.</p>
                        </li>
                     </ul>
                  </div>
                  <div className="incon" data-aos="fade-up" data-aos-anchor-placement="top-center">
                     <div className="inconInner">
                        <p>아쉬운 점</p>
                     </div>
                     <ul>
                        <li>
                           <h2>Array.from</h2>
                           <p>
                              support란의 FAQ에 add, remove이벤트를 사용해야하는데 queryselectorAll로 잡았던 객체들이
                              <br />
                              배열처럼 보이나 배열처럼 보이는 유사객체 배열이었기 때문에 앞에 Array.from을 사용해주어야
                              <br />
                              제대로 작동한다는 점을 배웠습니다.
                           </p>
                        </li>
                        <li>
                           <h2>z-index</h2>
                           <p>
                              웹사이트 상위 메뉴바는 다른 컨텐츠에 적용되어있는 position:relative에 영향을 끼치는데
                              이럴때에는
                              <br /> 메뉴바에 z-index를 주어야 하위 컨텐츠가 상위에 있어야 할 컨텐츠를 침범하지 않는다는
                              것을 배웠습니다.
                              <br />
                              <br /> 또 z-index를 줄 컨텐츠에는 position속성(static제외)가 있어야 하며 opacity도
                              z-index에 영향을 준다는 <br /> 것을 알았습니다.
                           </p>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="review" data-aos="fade-up" data-aos-anchor-placement="top-center">
                  <div className="reviewInnerText">
                     <h3>REVIEW</h3>
                  </div>
                  <ul>
                     <li>
                        <h2>작업물의 퀄리티는 팀워크에서 나온다.</h2>
                        <p>
                           팀원들간의 의사소통이 활발하고 서로의 피드백을 수용하여 좋은 팀워크를 유지하여 해당
                           프로젝트를 무사히
                           <br />
                           마무리 지을 수 있었습니다.
                        </p>
                     </li>
                     <li>
                        <h2>뼈대</h2>
                        <p>
                           처음 html 뼈대를 잘 잡아놓아야 css와 js를 작업할 때 편해진다는 점, 뼈대를 구성 하는 게
                           <br />
                           생각보다 쉬우면서도 생각보다 많이 어렵다는 것을 다시 느꼈습니다.
                        </p>
                     </li>
                     <li>
                        <h2>JS?</h2>
                        <p>
                           js를 위한 팀 프로젝트였는데 제가 맡은 파트는 js가 많지 않아서 js를 더 써보고 생각해보는
                           시간이 적어
                           <br /> 아쉬웠습니다.
                        </p>
                     </li>
                     <li>
                        <h2>깃허브 관리</h2>
                        <p>
                           깃허브 관리는 처음이었는데 중간에 컨디션 관리를 못해 감기몸살에 걸리는 바람에
                           <br /> 다른 팀원분들이 최종 수정을 도와주셔서 깃허브 관리는 저 혼자가 아닌 <br /> 팀원 모두가
                           같이 한 것이 아닌가라는 생각이 듭니다.
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
            <button>
               <a href="#" target="_blank" />
               보러가기 ▷
            </button>
            <p className="prev">
               <Link to="/project">목록으로 돌아가기</Link>
            </p>
         </div>
      </section>
   );
};

export default ProjectInfo;
