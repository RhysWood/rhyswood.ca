import { useState, useEffect, useCallback } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 900);
  }, []);

  useEffect(() => {
    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return isMobile ? <MobileNav /> : <DesktopNav />;
}

export default NavBar;