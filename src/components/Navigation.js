import { Link } from "react-router-dom";
import "./navigation.scss";
import "../assets/style/reset.css";
import { useEffect, useRef } from "react";

function Navigation() {
  const navRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 900) {
      navRef.current.className = "on";
    } else {
      navRef.current.className = "";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef}>
      <div className="navBox">
        <ul className="subMenu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/project">PROJECT</Link>
          </li>
          <li>
            <Link to="/skills">SKILLS</Link>
          </li>
          <li>
            <Link to="/">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
