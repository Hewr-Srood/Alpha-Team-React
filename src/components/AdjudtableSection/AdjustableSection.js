import React from 'react';
import './adjustable-section.css';

function AdjustableSection() {
  return (
    <div>
      <section className="adjustable-straps-section py-5">
        <div className="pt-5 adjustable-straps-wrapper d-flex flex-column justify-content-center text-center">
          <div data-aos-duration="1000" data-aos="fade-up" className="about-heading-container text-center mx-auto">
            <h2 className="small-main-heading small py-5  heading-2">ADJUSTABLE STRAPS</h2>
            <h2 className="text-white secondary-heading">Choose the best color for your activity</h2>
          </div>
          <div className="product-color-row row pl-4 mt-5 justify-content-around">
            <div className="watch watch-1 green-watch text-center py-3 col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="watch-wrapper pt-3 position-relative">
                <div className="position-absolute d-flex flex-column justify-content-center align-items-center w-100">
                  <h2 className="small product-main-header pt-5">WRIST BRAND</h2>
                  <h2>
                    <a className="product-color-header pt-2" href>
                      Mint Green
                    </a>
                  </h2>
                  <h2 className="product-price py-3">25.5$</h2>
                </div>

                <img
                  className="w-100"
                  src="http://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Group-8211-copy-2.jpg?id=600"
                  alt=""
                />
              </div>
            </div>

            <div className="watch watch-2 green-watch text-center py-3 col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="watch-wrapper pt-3">
                <div className="position-absolute d-flex flex-column justify-content-center align-items-center w-100">
                  <h2 className="small product-main-header pt-5">WRIST BRAND</h2>
                  <h2>
                    <a className="product-color-header pt-2" href>
                      Purple Berry
                    </a>
                  </h2>
                  <h2 className="product-price py-3">25.5$</h2>
                </div>
                <img
                  className="w-100"
                  src="http://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Group-8211-copy-3.jpg?id=601"
                  alt=""
                />
              </div>
            </div>

            <div className="watch watch-3 green-watch text-center py-3 col-xl-4 col-md-6 col-sm-12 col-12">
              <div className="watch-wrapper pt-3">
                <div className="position-absolute d-flex flex-column justify-content-center align-items-center w-100">
                  <h2 className="small product-main-header pt-5">WRIST BRAND</h2>
                  <h2>
                    <a className="product-color-header pt-2" href>
                      Mint Green
                    </a>
                  </h2>
                  <h2 className="product-price py-3">25.5$</h2>
                </div>
                <img
                  className="w-100"
                  src="http://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Group-82111-copy-4.jpg?id=598"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="btn product-color-btn mx-auto mt-5">
            <a href>SEE MORE</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdjustableSection;
