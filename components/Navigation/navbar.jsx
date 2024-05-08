import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    isMobile ? <MobileNav /> : <DesktopNav />
  );
}

export default NavBar;
