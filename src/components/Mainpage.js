import styled from "styled-components";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Mainpage() {
  useEffect(() => {
    gsap.to(".name", {
      x: -1000,
      ease: "none",
      scrollTrigger: {
        trigger: ".h2",
        scrub: true,
        end: "+=2000",
      },
    });
    gsap.to(".port", {
      x: 800,
      ease: "none",
      scrollTrigger: {
        trigger: ".h2",
        scrub: true,
        end: "+=2000",
      },
    });

    ScrollTrigger.refresh();
  }, []);
  return (
    <Main>
      <TextContainer>
        <TxtBox>
          <NAME className="name">KIMJIYE</NAME>
          <Port className="port">PORTFOLIO</Port>
        </TxtBox>
        <TxtBox>
          <NAME className="name">KIMJIYE</NAME>
          <Port className="port">PORTFOLIO</Port>
        </TxtBox>
      </TextContainer>
    </Main>
  );
}

export default Mainpage;

const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  padding: 0;
`;
const TextContainer = styled.div`
  max-width: 1400px;
  /* margin: 0 auto; */
`;
const TxtBox = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  &:nth-child(2) {
    background-color: teal;
    clip-path: circle(300px at center);
  }
  &:nth-child(2) h2 {
    -webkit-text-stroke: 2px;
    -webkit-text-stroke-color: #fff;
    color: transparent;
  }
  &:nth-child(2) h3 {
    -webkit-text-stroke: 2px;
    -webkit-text-stroke-color: #fff;
    color: transparent;
  }
`;

const NAME = styled.h2`
  font-weight: bold;
  position: absolute;
  top: 18.75rem;
  left: 30rem;
  font-size: 7em;
  /* white-space: nowrap; */
  color: #fff;
`;

const Port = styled.h3`
  font-weight: bold;
  position: absolute;
  top: 31.25rem;
  right: 23rem;
  font-size: 7em;
  /* white-space: nowrap; */
  color: #fff;
`;
