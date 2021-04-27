import React from 'react';
import './experience-section.css';

function ExperienceSection() {
  return (
    <section>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="experience-addresss">
              <h6>NOW UPGRADED FOR</h6>
              <span>Best Experience</span>
            </div>
            <div className="experience-content progress-div">
              <h2>+ Increased storage</h2>
              <p>
                Lorem ipsum dolor sit amet, con
                <br />
                sectetur adipiscing elit. Mauris
              </p>
              <div className="progress">
                <div
                  id="one"
                  className="progress-bar progress-item1"
                  role="progressbar"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '30%' }}></div>
              </div>
              <div className="progress-text">30%</div>
            </div>

            <div className="experience-content progress-div">
              <h2>+ Battery life</h2>
              <p>
                Lorem ipsum dolor sit amet, con
                <br />
                sectetur adipiscing elit. Mauris
              </p>
              <div className="progress">
                <div
                  id="one"
                  className="progress-bar progress-item2"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '80%' }}></div>
              </div>
              <div className="progress-text">80%</div>
            </div>

            <div className="experience-content progress-div">
              <h2>+ Display surface</h2>
              <p>
                Lorem ipsum dolor sit amet, con
                <br />
                sectetur adipiscing elit. Mauris
              </p>
              <div className="progress">
                <div
                  id="one"
                  className="progress-bar progress-item3"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: '60%' }}></div>
              </div>
              <div className="progress-text">60%</div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div data-aos="flip-up" data-aos-duration="2000" className="experience-img aos-init aos-animate">
              <img
                className="img-fluid"
                src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Group-811211112-copy-71-1.jpg"
                alt="mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
