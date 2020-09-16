import React from "react";
import { Nav, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { CartFill } from "react-bootstrap-icons";
export function FirstNav() {
  const navItems = [
    {
      name: "Gallery",
      link: "#",
    },
    {
      name: "Feauters",
      link: "#",
    },
    {
      name: "Reviews",
      link: "#",
    },
    {
      name: "Shop",
      link: "#",
    },
  ];
  return (
    <>
      {navItems.map((navItem, key) => (
        <Nav.Link
          className="mx-1 font-weight-bolder text-white"
          key={key}
          href={navItem.link}
        >
          <motion.div
            whileHover={{ scale: 1.1, color: "#741ee1" }}
            whileTap={{ scale: 0.9 }}
          >
            {navItem.name}
          </motion.div>
        </Nav.Link>
      ))}
    </>
  );
}
export function SeconNav() {
  return (
    <>
      <Nav className="d-flex justify-content-end " style={{ width: "33vw" }}>
        <Nav.Link
          className="mr-4 position-relative font-weight-bolder text-white"
          href="#"
        >
          <motion.div
            whileHover={{ scale: 1.1, color: "rgba(0, 0, 0, 0.61)" }}
            whileTap={{ scale: 0.9 }}
          >
            <CartFill size={35} />
          </motion.div>
          <p
            className="bg-purple position-absolute rounded-pill"
            style={{
              top: 15,
              right: -10,
              padding: "0 10px",
              fontSize: "13px",
            }}
          >
            0
          </p>
        </Nav.Link>
        <Nav.Link className="font-weight-bolder text-white" href="#">
          <Button className="btn-purple rounded-pill ">
            <h5 className="px-3 py-1 my-auto font-weight-bolder ">Buy Now</h5>
          </Button>
        </Nav.Link>
      </Nav>
    </>
  );
}
