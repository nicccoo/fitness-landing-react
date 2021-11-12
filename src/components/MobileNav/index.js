import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io'
import { MobileMenu } from "./MobileNav.elements";

const MobileNav = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (

    <MobileMenu>
     { isMobile ? <FaBars/> : <IoMdClose />}
    </MobileMenu>
  );
};

export default MobileNav;
