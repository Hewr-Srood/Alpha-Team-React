import React from "react";
import WatchCarousel from "./WatchCarousel";
import { motion } from "framer-motion";
import "./about-watches.css";
export default function AboutWatchhSection() {
  return (
    <section className=" h-100  about-section ">
      <div className=" about-container pb-2 text-center mx-auto  d-flex flex-column align-content-around justify-content-around">
        <h2 className="font-weight-bolder small row-wrap text-light-silver ">
          ABOUT OUR WATCHES
        </h2>
        <div className="container">
          <h1 className=" text-container mx-auto  font-weight-bolder text-cem d-flex justify-content-center flex-wrap">
            <motion.div
              style={{ display: "inline" }}
              animate={{ color: ["#60F", "#09F", "#FA0"] }}
              transition={{ duration: 2, yoyo: Infinity }}
            >
              {" "}
              New
            </motion.div>
            ,<span className="text-purple pl-2"> Improved</span>
            <span className="pl-2">Design and</span>
            <span className="pl-2">Performance </span>
          </h1>
        </div>
        <p className="  text-center mx-auto text-container" color="#3f3849">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          doloribus quia! Ratione quos cupiditate repellendus veritatis velit
          rerum. Nihil repellat illum ipsa odit beatae praesentium dicta
          suscipit corrupti totam pariatur.
        </p>
        <WatchCarousel />
      </div>
    </section>
  );
}
