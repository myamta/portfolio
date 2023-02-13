import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PortSlide.css";
gsap.registerPlugin(ScrollTrigger);

function PortSlide() {
  // const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(
      () => {
        let panels = gsap.utils.toArray(".panel");
        gsap.to(panels, {
          xPercent: -150 /*  * (panels.length - 1) */,
          ease: "none",
          scrollTrigger: {
            trigger: slider.current,
            pin: true,
            scrub: true,
            /* snap: 1 /* / (panels.length - 1) , */
            end: () => "+=" + slider.current.offsetWidth,
          },
        });
      } /* component */
    );
    return () => ctx.revert();
  });

  const path = process.env.PUBLIC_URL;
  return (
    <>
      <div className="App" /*  ref={component} */>
        <div ref={slider} className="container">
          <div className="panel">
            <div className="imgs">
              <img src={path + "/Listup.png"} alt="" />
            </div>
            <div className="workOut">
              <p>my Workout</p>
            </div>
            <div className="scrolling">
              <span className="scrollingText">▷ KEEP SCROLLING </span>
              <span className="scrollingText">▷ KEEP SCROLLING </span>
              <span className="scrollingText">▷ KEEP SCROLLING </span>
              <span className="scrollingText">▷ KEEP SCROLLING </span>
              <span className="scrollingText">▷ KEEP SCROLLING </span>
              <span className="scrollingText">▷ KEEP SCROLLING </span>
            </div>
          </div>
          <div className="panel">
            <div className="swiperContainer">
              <div className="swiperWapper">
                <div className="hashBox">
                  <h3>01</h3>
                  <Link to="/projectInfo">
                    <h2>닥터모두</h2>
                  </Link>

                  <ul className="hashTag">
                    <li>#html</li>
                    <li>#css</li>
                    <li>#js</li>
                  </ul>
                </div>
                <div className="swiperBox">
                  <div className="boxInner">
                    <Swiper
                      spaceBetween={30}
                      hashNavigation={{
                        watchState: true,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide data-hash="slide1">Slide 1</SwiperSlide>
                      <SwiperSlide data-hash="slide2">Slide 2</SwiperSlide>
                      <SwiperSlide data-hash="slide3">Slide 3</SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="swiperWapper">
                <div className="hashBox">
                  <h3>02</h3>
                  <Link to="/projectInfo">
                    <h2>프로젝트 이름</h2>
                  </Link>
                  <ul className="hashTag">
                    <li>#html</li>
                    <li>#css</li>
                    <li>#js</li>
                  </ul>
                </div>
                <div className="swiperBox">
                  <div className="boxInner">
                    <Swiper
                      spaceBetween={30}
                      hashNavigation={{
                        watchState: true,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide data-hash="slide1">Slide 1</SwiperSlide>
                      <SwiperSlide data-hash="slide2">Slide 2</SwiperSlide>
                      <SwiperSlide data-hash="slide3">Slide 3</SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="swiperWapper">
                <div className="hashBox">
                  <h3>03</h3>
                  <Link to="/projectInfo">
                    <h2>프로젝트 이름</h2>
                  </Link>
                  <ul className="hashTag">
                    <li>#html</li>
                    <li>#css</li>
                    <li>#js</li>
                  </ul>
                </div>
                <div className="swiperBox">
                  <div className="boxInner">
                    <Swiper
                      spaceBetween={30}
                      hashNavigation={{
                        watchState: true,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide data-hash="slide1">Slide 1</SwiperSlide>
                      <SwiperSlide data-hash="slide2">Slide 2</SwiperSlide>
                      <SwiperSlide data-hash="slide3">Slide 3</SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  <div className="panel orange">TWO</div>
            <div className="panel purple">THREE</div> */}
        </div>
      </div>
    </>
  );
}
export default PortSlide;
