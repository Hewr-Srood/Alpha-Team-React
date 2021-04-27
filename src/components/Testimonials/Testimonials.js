import React from 'react';
import './testimonials.css';
import Carousel from 'react-bootstrap/Carousel';
function Testimonials() {
  return (
    <div>
      <section className="silder-area">
        <div className="container">
          <Carousel>
            <Carousel.Item>
              <div className="img-area">
                <img
                  src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/tyler-nix-626668-unsplash.jpg"
                  alt="..."
                />
              </div>
              <Carousel.Caption className="carousel-caption">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien leo, iaculis rutrum lacus sed,
                  fermentum tempor odio. Integer in ipsum eleifend ipsum mattis pulvinar at vitae magna.
                </p>
                <h3>Maggie Wilson</h3>
                <span>99</span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="img-area">
                <img
                  src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/tyler-nix-626668-unsplash2.jpg"
                  alt="..."
                />
              </div>
              <Carousel.Caption className="carousel-caption">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sapien leo, iaculis rutrum lacus sed,
                  fermentum tempor odio. Integer in ipsum eleifend ipsum mattis pulvinar at vitae magna.
                </p>
                <h3>Ella Jonson</h3>
                <span>99</span>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
