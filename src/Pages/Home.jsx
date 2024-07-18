import { Navbar } from "../Componants/Navbar";
import { Footer } from "../Componants/Footer";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger from 'gsap/ScrollTrigger' (not destructured)
import "../App.css";
import { Testimonial } from "../Componants/Testimonial";
import { Services } from "../Componants/Services";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const heading1 = useRef(null);
  const heading10 = useRef(null);
  const img = useRef(null);
  const head = useRef(null);
  const img2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      img2.current,
      { scale: 0.8 },
      {
          scale: 1.1,
          duration: 1,  // Longer duration for smoother transition
          ease: 'power2.out',  // Smooth easing function
          scrollTrigger: {
              trigger: img2.current,
              start: 'top 80%',  // Adjusting start point
              end: 'top 20%',  // Adjusting end point
              scrub: 1,  // Scrub for smoother animation
          },
      }
  );
    
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
    gsap.fromTo(
      heading10.current,
      { scale: 0.4, opacity: 0 }, 
      {
        scale: 1, // Final state: normal size
        opacity: 1,
        duration: 1, // Animation duration
      }
    );
    gsap.fromTo(
      img.current,
      { scale: 0.4, opacity: 0 }, 
      {
        scale: 1, // Final state: normal size
        opacity: 1,
        duration: 1, // Animation duration
      }
    );
    gsap.fromTo(
      head.current,
      { scale: 0.4, opacity: 0 }, 
      {
        scale: 1, // Final state: normal size
        opacity: 1,
        duration: 1, // Animation duration
      }
    );
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container-fluid bg-white p-0">
        <Navbar />
        <div className="row kha">
          <div className="col-lg-6 col-md-6 left1 col-sm-12 px-5">
            <h1 ref={heading10}>A better community platform for the</h1>
            <p className="pp"><span className="px-3">modern web</span></p>
            <div className="w-100 line"></div>
            <p className="pp1" ref={head}>High quality and low latency streaming makes it feel like you're hanging out on the couch with friends while Chating with your Friend .</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="p-4 imghome">
              <img ref={img} src="https://nodebb.org/wp-content/uploads/2021/09/Group-3681-1536x1346.png" className="w-100 h-100" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
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
              <button class="btn mt-3 py-md-3 px-md-5 me-3 rounded-pill quote_btn1 animated slideInLeft">Learn More</button>
            </div>
            <div className="col-lg-6 simg" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100 mt-5">
                <img className="position-absolute w-75  h-100 rounded wow zoomIn aboutus-image" ref={img2} src="https://nodebb.org/wp-content/uploads/2021/09/Group-3680-1.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="name-div" className="mt-4" >
        <h4 className="power">Powering thousands<span> of community forums.</span></h4>
        <div className=" img_div" ref={heading1}>
          <img src="https://nodebb.org/wp-content/uploads/2021/08/Group-3425.png" alt=""/>
          <img src="https://nodebb.org/wp-content/uploads/2021/09/b7e67bd1951c09018e6a851fb2e7d9ca-15.png" alt=""/>
          <img src="https://nodebb.org/wp-content/uploads/2023/01/ubisoftlogo-1.png" alt=""/>
          <img src="https://nodebb.org/wp-content/uploads/2021/09/b7e67bd1951c09018e6a851fb2e7d9ca-15.png" alt=""/>
          <img src="https://nodebb.org/wp-content/uploads/2023/01/ubisoftlogo-1.png" alt=""/>
          <img src="https://nodebb.org/wp-content/uploads/2021/09/b7e67bd1951c09018e6a851fb2e7d9ca-15.png" alt=""/>
          <img src="https://nodebb.org/wp-content/uploads/2021/09/flux-logo-lg-11.png" alt=""/>
          <img src="https://nodebb.org/wp-content/uploads/2021/08/Group-3429.png" alt=""/>
          <img src="https://nodebb.org/wp-content/uploads/2021/08/Group-3425.png" alt="" />
          <img src="https://nodebb.org/wp-content/uploads/2023/01/ubisoftlogo-1.png" alt=""/>
          <img src="https://nodebb.org/wp-content/uploads/2021/09/b7e67bd1951c09018e6a851fb2e7d9ca-15.png" alt=""/>
        </div>
      </div>
      <Services />
      <Testimonial />
      <div class="container-fluid last" >
        <div class="container py-5">
          <div class="row g-5">
            <div className='col-12'>
              <div class="star" style={{ textAlign: 'center' }}>
                <h1>Ready to grow your</h1>
                <p className="mt-4 p"><span className="px-4 ">forum community?</span></p>
                <p className="real mt-4">Provide real value to your audience. Talk with us to find out how.</p>
                <button class="btn mt-3 py-md-3 px-md-5 me-3 rounded-pill quote_btn animated slideInLeft">Get In Touch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
