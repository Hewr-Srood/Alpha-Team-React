import React from 'react';
import './feauture.css';
import { FaMicrophone, FaMobile, FaRss } from 'react-icons/fa';

const Feauture = () => {
  return (
    <section id="feauture-sec" className="p-5">
      <div className="container ">
        <div className="row">
          <div className="col col-out">
            <div data-aos="flip-down" data-aos-duration={2000}>
              <img
                className="img-fluid"
                src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Replace-screen-inside-this-SO3-1.jpg"
                alt="Replace-screen-inside-this-SO3"
              />
            </div>
          </div>
          <div className="col element-margin col-out">
            <div>
              <h2 className="heading-2">MEET WITH OUR</h2>
            </div>
            <div>
              <h2 className="heading">
                <span>Splendid Features</span>
                <span> </span>
              </h2>
            </div>
            <div className="empty" />
            <div className="row" data-aos="fade-right">
              <div className="col-1 icon-container">
                <FaMicrophone size={25} />
              </div>
              <div className="col-11 col-11-content">
                <h3>Voice Recognition</h3>
                <div className="col-content">
                  Lorem ipsum dolor sit amet, con
                  <br />
                  sectetur adipiscing elit. Mauris
                </div>
              </div>
            </div>
            <div className="empty" />
            <div className="row" data-aos="fade-right">
              <div className="col-1 icon-container">
                <FaMobile size={25} />
              </div>
              <div className="col-11 col-11-content">
                <h3>Connect with your phone</h3>
                <div className="col-content">
                  Lorem ipsum dolor sit amet, con
                  <br />
                  sectetur adipiscing elit. Mauris
                </div>
              </div>
            </div>
            <div className="empty" />
            <div className="row" data-aos="fade-right">
              <div className="col-1 icon-container">
                <FaRss size={25} />
              </div>
              <div className="col-11 col-11-content">
                <h3>Any task at hand</h3>
                <div className="col-content">
                  Lorem ipsum dolor sit amet, con
                  <br />
                  sectetur adipiscing elit. Mauris
                </div>
              </div>
            </div>
            <div className="empty" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feauture;
