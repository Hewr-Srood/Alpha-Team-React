import React from 'react';
import './second-section.css';
function SecondSection() {
  return (
    <section className="second-sec">
      <div className="container ">
        <div className="margin-element">
          <div>
            <h2 className="heading-2">HOW IT WORKS</h2>
          </div>
          <div className="">
            <h2 className="heading">
              <span className="span-content">See for yourself.</span>
              <span>Quick video introduction</span>
              <span> </span>
            </h2>
          </div>
          <div style={{ height: '1rem' }}></div>
          <div className="heading-paraph-contenet">
            <p></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae</p>
            <p>odales lectus, non ultrices nisi. In varius, leo non gravida.</p>
            <p></p>
          </div>
          <div style={{ height: '3rem' }}></div>

          <div className="video-play-container parent-div">
            <div className="video-play">
              <iframe
                title="Jevelin Theme - Getting Started (under 2 minutes)"
                src="https://www.youtube.com/embed/g4n2yVPnQzs?feature=oembed"
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>

            <div className="container">
              <div className="child-div image-play mx-auto">
                <img
                  src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/29/2018/03/Screenshot_21-1024x577.jpg"
                  alt=""
                />
                <i id="play-btn" className="fas fa-4x fa-play-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
