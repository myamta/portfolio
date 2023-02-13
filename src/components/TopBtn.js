import React, { useEffect, useRef } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import styled, { keyframes } from 'styled-components';
function TopBtn() {
   const one = () => {
      window.scroll({
         top: 0,
         behavior: 'smooth',
      });
   };

   return (
      <div>
         <TopButton onClick={one}>
            <AiOutlineArrowUp />
         </TopButton>
      </div>
   );
}

export default TopBtn;

const floatAnimation = keyframes`
0%{
    transform: translateY(0);
}
20%{
    transform: translateY(8px);
}
40%{
    transform: translateY(0);
}
60%{
    transform:translateY(8px);
}
80%{
    transform: translateY(0);
}
`;

const TopButton = styled.button`
   font-size: 30px;
   border: none;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   position: fixed;
   background-color: #fff;
   color: #10a19d;
   bottom: 20px;
   right: 20px;

   z-index: 9999;
   cursor: pointer;

   animation: ${floatAnimation} 10s infinite;
`;
