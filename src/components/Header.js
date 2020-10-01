import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

import { motion } from "framer-motion";
import { FirstNav, SeconNav } from "./Navs";
export default function Header() {
  const [showSecondNav, setShowSecondNav] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 992) {
      setShowSecondNav(false);
    } else {
      setShowSecondNav(true);
    }
  }, []);
  window.addEventListener("resize", function () {
    if (window.innerWidth < 992) {
      setShowSecondNav(false);
    } else {
      setShowSecondNav(true);
    }
  });

  return (
    <header
      style={{
        position: "sticky",
        zIndex: 9,
      }}
    >
      <Navbar
        style={{
          position: "absolute",
          width: "100%",
        }}
        bg="dark"
        className=" po px-5 w-100vw  p-4 "
        expand="lg"
      >
        <Navbar.Brand className="text-white" href="#home">
          <motion.img
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            alt="logo"
            src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end" style={{ width: "50vw" }}>
            <FirstNav />
          </Nav>
          {showSecondNav && <SeconNav />}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
