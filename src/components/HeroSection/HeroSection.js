import React from "react";
import { motion } from "framer-motion";
import "./hero-section.css";
export default function HeroSection() {
  return (
    <motion.div
      className="hero-container pb-2 text-center mx-auto  d-flex  align-items-center justify-content-around flex-wrap"
      initial={{
        scaleY: 1,
        scaleX: 0,
      }}
      animate={{
        scaleX: 1,
      }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 className="display-3 font-weight-bolder Hero-Header text-white">
          Lifetyle <br />
          Smart
          <motion.div
            style={{ display: "inline" }}
            animate={{ color: ["#60F", "#09F", "#FA0"] }}
            transition={{ duration: 2, yoyo: Infinity }}
            className="text-purple mr-5"
          >
            {" "}
            Watch
          </motion.div>
        </h1>
        <h6 className="text-white font-weight-bold">
          TECHNOLOGY OF THE FUTURE
        </h6>
        <p className="text-secondary font-weight-bold">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit. Mauris
        </p>
      </div>
      <div>
        <div className=" hero-img-container mx-auto">
          <img
            className="img-fluid mx-auto"
            alt="watch"
            src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Vector-Smart-Object-copy-3.png"
          />
        </div>
      </div>
    </motion.div>
  );
}
