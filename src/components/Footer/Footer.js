import React from 'react';
import './footer.css';

import { CgFacebook } from 'react-icons/cg';
import { AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { FaCcVisa, FaCcAmex, FaCcPaypal, FaCcJcb, FaCcMastercard } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer>
        <div className="social-media-icons">
          <div>
            <AiOutlineInstagram className="icon-color mx-3" size={32} color="lightgray" />
            <AiOutlineTwitter className="icon-color mx-3" size={32} color="lightgray" />
            <CgFacebook className="icon-color mx-3" size={32} color="lightgray" />
            <AiFillYoutube className="icon-color mx-3" size={32} color="lightgray" />
          </div>
        </div>
        <div className="background-footer">
          <div className="big-container-cards-footer">
            <div className="footer-cards d-flex flex-column align-items-center">
              <div>
                <h3 id="jelevin">Jelevin</h3>
              </div>
              <p className="p-fonts-footer-sections wrap-it">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.
              </p>
              <div>
                <FaCcVisa className=" mx-1 icon-color" />
                <FaCcAmex className=" mx-1  icon-color" />
                <FaCcPaypal className=" mx-1  icon-color" />
                <FaCcJcb className=" mx-1  icon-color" />
                <FaCcMastercard className=" mx-1  icon-color" />
              </div>
              <div id="last-line-first-card">
                <i className="fas fa-lock"></i>
                <span className="p-fonts-footer-sections">Secure online payment</span>
              </div>
            </div>

            <div className="footer-cards d-flex flex-column align-items-center">
              <h6 className="p-fonts-footer-sections">BEST EXPERIENCE</h6>
              <div>
                <ul className="ul-footer text-center p-0">
                  <li>
                    <a href="#" className="a-fonts-footer-sections">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="a-fonts-footer-sections">
                      Shipment
                    </a>
                  </li>
                  <li>
                    <a href="#" className="a-fonts-footer-sections">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="a-fonts-footer-sections">
                      Gift cards
                    </a>
                  </li>
                  <li>
                    <a href="#" className="a-fonts-footer-sections">
                      Policies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-cards d-flex flex-column align-items-center">
              <h6 id="far-header" className="p-fonts-footer-sections">
                COMPANY
              </h6>
              <div>
                <ul className="ul-footer text-center p-0">
                  <li>
                    <a href="#" className="a-fonts-footer-sections">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="a-fonts-footer-sections">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="a-fonts-footer-sections">
                      Offices
                    </a>
                  </li>
                  <li>
                    <a href="#" className="a-fonts-footer-sections">
                      Affiliates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="a-fonts-footer-sections">
                      Giveaway
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div id="last-line-in-footer">
              <div className="last-div-footer">
                <span className="p-fonts-footer-sections last-span">
                  Copyright © 2018 JevelinTheme – Theme by Shufflehound
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
