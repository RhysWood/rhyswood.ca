import React from "react";
import { MenuItems } from "./menuItems.jsx";
import "../Navigation/nav.scss";

const Nav = () => {

  return (
    <nav className="desktop-nav">
      <div className="nav-wrapper">
        <div className="nav-child">
          <a href="/">RW</a>
        </div>
        <div className="nav-options">
          <ul className="nav-menu">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
