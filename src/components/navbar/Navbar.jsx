import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
const Navbar = () => {
  const Menu = () => {
    return (
      <>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#home">What is GPT ??</a>
        </li>
        <li>
          <a href="#home">Open Ai</a>
        </li>
        <li>
          <a href="#home">Case Studies</a>
        </li>
        <li>
          <a href="#home">Library</a>
        </li>
      </>
    );
  };
  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <div className="gbt3_navbar">
      <div className="gbt3_navbar_links">
        <div className="gbt3_navbar_logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="gbt3_navbar_list">
          <ul>
            <Menu />
          </ul>
        </nav>
      </div>
      <div className="gbt3_navbar_sing">
        <button className="Sign-in">Sign in</button>
        <button className="Sign-up">Sign up</button>
      </div>
      <div className="gbt3_navbar_menu">
        {toggleMenu ? (
          <RiCloseLine
            color="white"
            size={27}
            onClick={() => settoggleMenu(false)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <RiMenu3Line
            color="white"
            size={27}
            onClick={() => settoggleMenu(true)}
            style={{ cursor: "pointer" }}
          />
        )}
        {toggleMenu && (
          <div className="gbt3_navbar_container scale-up-center">
            <div className="gbt3_navbar_container_links">
              <ul>
                <Menu />
              </ul>
              <div className="gbt3_navbar_container_menu">
                <button className="Sign-in">Sign in</button>
                <button className="Sign-up">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
