import { useSelector, useDispatch } from "react-redux";
import { barClick } from "../actions/bar";
import logo from "../images/logo.svg";
import { useState } from "react";

const Header = (props) => {
  const dispatch = useDispatch();
  const isBarClicked = useSelector((state) => state.barToggler);

  //Page-active routes handler
  const [activePage, setActivePage] = useState("about");

  const pageHandler = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="menu-bar">
      <div className="logo">
        <img src={logo} />
      </div>
      <div
        className={isBarClicked ? "change" : "bar"}
        onClick={() => dispatch(barClick())}
      >
        <div className="humberger">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <div className={isBarClicked ? "open menus menu-list" : "mobile menus"}>
        <a
          href="#"
          className={activePage === "about" && "active"}
          onClick={() => pageHandler("about")}
        >
          About
        </a>
        <a
          href="#"
          className={activePage === "serivices" && "active"}
          onClick={() => pageHandler("serivices")}
        >
          Services
        </a>
        <a
          href="#"
          className={activePage === "project" && "active"}
          onClick={() => pageHandler("project")}
        >
          Project
        </a>
        <a
          href="#"
          className={activePage === "contact" && "active"}
          onClick={() => pageHandler("contact")}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
