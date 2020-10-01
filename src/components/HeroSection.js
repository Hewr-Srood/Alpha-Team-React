import React from "react";

export default function HeroSection() {
  return (
    <div
      style={{
        paddingTop: "6.5rem",
        height: "90vh",
      }}
    >
      <div className=" h-100 container-fluid ">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-6 my-cloumn flex-warp ">
            <h1 className="hero-font-size  text-white">
              Lifetyle <br />
              Smart
              <span className="text-purple mr-5"> Watch</span>
            </h1>
            <h6 className="text-white font-weight-bold">
              TECHNOLOGY OF THE FUTURE
            </h6>
            <p className="text-secondary font-weight-bold">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit. Mauris
            </p>
          </div>
          <div className="col-12 col-md-4 col-lg-4 my-cloumn mt-5">
            <img
              className="img-fluid"
              alt="watch-image"
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Vector-Smart-Object-copy-3.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
