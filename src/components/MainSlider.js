import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function MainSlider(){

	return (
		<section className="slider_section position-relative">
      <Carousel>
        <Carousel.Item>
          <div className="slider_item-box">
            <div className="slider_item-container">
              <div className="container-fluid">
                <div className="row">
                  <div className="offset-md-2 col-md-4">
                    <div className="slider_item-detail">
                      <div>
                        <h2 className="slider_heading">
                          50% OFF <br />
                          First order
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nis
                        </p>
                        <div className="d-flex">
                          <a href="" className="slider_btn">
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="hero_img-box">
                      <img src="/images/hero.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider_item-box">
            <div className="slider_item-container">
              <div className="container-fluid">
                <div className="row">
                  <div className="offset-md-2 col-md-4">
                    <div className="slider_item-detail">
                      <div>
                        <h2 className="slider_heading">
                          60% OFF <br />
                          First order
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nis
                        </p>
                        <div className="d-flex">
                          <a href="" className="slider_btn">
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="hero_img-box">
                      <img src="images/hero.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
	)
}