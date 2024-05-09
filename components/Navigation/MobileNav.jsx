'use client';
import { useEffect, useRef } from "react";
import { MenuItems } from "./menuItems.jsx";
import "../Navigation/mobilenav.scss";

const MobileNav = () => {
  const element = useRef(null);

  return (
    <nav className="nav-wrapper" ref={element}>
      <div className="nav-child-mobile">
        <a href="/">RW</a>
      </div>

        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          {/* <span></span> */}
          <span></span>

          <ul id="menu">
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
    </nav>
  );
};

export default MobileNav;