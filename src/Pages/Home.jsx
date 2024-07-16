import { Navbar } from "../Componants/Navbar";
import { Footer } from "../Componants/Footer";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger from 'gsap/ScrollTrigger' (not destructured)
import "../App.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const heading1 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heading1.current,
      { x: 50 }, // Initial state: translateX 0
      {
        x: "-60%", // Final state: translateX to -100%
        scrollTrigger: {
          trigger: heading1.current,
          // Assuming #main is your scroll container
          scrub: 0.7
        }
      }
    );
  }, []);
  return (
    <div>
      <div className="container-fluid bg-white p-0">
        <Navbar />
        <div className="row kha">
          <div className="col-lg-6 col-md-6 left1 col-sm-12 px-5">
            <h1>A better community platform for the</h1>
            <p className="pp"><span className="px-3">modern web</span></p>
            <div className="w-100 line"></div>
            <p className="pp1">High quality and low latency streaming makes it feel like you're hanging out on the couch with friends while Chating with your Friend .</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="p-4 imghome">
              <img src="https://nodebb.org/wp-content/uploads/2021/09/Group-3681-1536x1346.png" className="w-100 h-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  aboutback ">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className=" pb-3">
                <h2 className="mb-0 retain">Retain <br />
                  Customers </h2>
                <p className="foster">& Foster Engagement</p>
              </div>
              <p className="at">
                At OneConnect, our mission is to provide forum software with the modern features and performance you’ve come to expect from the social and mobile web.
              </p>
              <a class="btn mt-3 py-md-3 px-md-5 me-3 rounded-pill quote_btn animated slideInLeft">Learn More</a>


            </div>
            <div className="col-lg-6 simg" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100 mt-5">
                <img className="position-absolute w-75  h-100 rounded wow zoomIn aboutus-image" src="https://nodebb.org/wp-content/uploads/2021/09/Group-3680-1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="name-div" className="mt-4" >
        <h4 className="power">Powering thousands<span> of community forums.</span></h4>
        <div className=" img_div" ref={heading1}>
          <img src="https://nodebb.org/wp-content/uploads/2021/08/Group-3425.png" />
          <img src="https://nodebb.org/wp-content/uploads/2021/09/b7e67bd1951c09018e6a851fb2e7d9ca-15.png" />
          <img src="https://nodebb.org/wp-content/uploads/2023/01/ubisoftlogo-1.png" />
          <img src="https://nodebb.org/wp-content/uploads/2021/09/b7e67bd1951c09018e6a851fb2e7d9ca-15.png" />
          <img src="https://nodebb.org/wp-content/uploads/2023/01/ubisoftlogo-1.png" />
          <img src="https://nodebb.org/wp-content/uploads/2021/09/b7e67bd1951c09018e6a851fb2e7d9ca-15.png" />
          <img src="https://nodebb.org/wp-content/uploads/2021/09/flux-logo-lg-11.png" />
          <img src="https://nodebb.org/wp-content/uploads/2021/08/Group-3429.png" />
          <img src="https://nodebb.org/wp-content/uploads/2021/08/Group-3425.png" />
          <img src="https://nodebb.org/wp-content/uploads/2023/01/ubisoftlogo-1.png" />
          <img src="https://nodebb.org/wp-content/uploads/2021/09/b7e67bd1951c09018e6a851fb2e7d9ca-15.png" />
        </div>

      </div>
      <Footer />
    </div>
  );
};
