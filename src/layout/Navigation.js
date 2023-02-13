import { Link } from 'react-router-dom';
import './navigation.scss';
import '../assets/style/reset.css';
import { useEffect, useRef, useState } from 'react';

function Navigation() {
   const navRef = useRef(null);

   const handleScroll = () => {
      if (window.scrollY > 400) {
         navRef.current.className = 'on';
      } else {
         navRef.current.className = '';
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const Top = () => {
      window.scroll({
         top: 0,
         behavior: 'smooth',
      });
   };
   const skillScroll = () => {
      window.scroll({
         top: 5800,
         behavior: 'smooth',
      });
   };
   const about = () => {
      window.scroll({
         top: 7100,
         behavior: 'smooth',
      });
   };

   return (
      <nav ref={navRef}>
         <div className="navBox">
            <ul className="subMenu">
               <li>
                  <Link to="/" onClick={Top}>
                     HOME
                  </Link>
               </li>
               <li>
                  <Link to="/project">PROJECT</Link>
               </li>
               <li>
                  <Link to="/" onClick={skillScroll}>
                     SKILLS
                  </Link>
               </li>
               <li>
                  <Link to="/" onClick={about}>
                     ABOUT
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default Navigation;
