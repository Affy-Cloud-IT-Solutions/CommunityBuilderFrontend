import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer'

export const AllCommunity = () => {
  const [truncatedText, setTruncatedText] = useState('');
  const maxCharacters = 155; // Maximum number of characters to display

  useEffect(() => {
    // Original full text
    const fullText = `Technology encompasses the application of scientific knowledge and skills for practical purposes, particularly in industries and everyday life. It involves the development, modification, usage, and knowledge of tools, machines, systems, techniques, and processes to solve problems, improve efficiency, and achieve specific objectives.`;

    // Slice the text to get only the first `maxCharacters` characters
    const slicedText = fullText.slice(0, maxCharacters);

    // Update the state with the truncated text
    setTruncatedText(slicedText);
  }, []); 
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <div className="container-fluid py-5 Community_header">
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h2 className="display-4 animated  fontt zoomIn">Here are Communities</h2>
              <p className='gather mt-3'><span className='px-3 py-1'>gather, share, and thrive.</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bbb" >
        <div class="container py-5">
          <div class="row g-3">
            <div class="col-lg-4 col-md-6  " >
              <div class="service-item0">
                <div class="service-icon d-flex justify-content-center align-items-center rounded-circle">
                  <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Are_The_Types_of_Technology.jpg" className=" w-100 h-100 mt-5 rounded" alt=""/>
                </div>
                <h4 className='mt-5 text-center'>Technology</h4>
                <p >{truncatedText}...</p>

              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div class="container-fluid last" >
        <div class="container py-5">
          <div class="row g-5">
            <div className='col-12'>
              <div class="star" style={{ textAlign: 'center' }}>
                <h1>Ready to grow your</h1>
                <p className="mt-4 p"><span className="px-4 ">Your community?</span></p>
                <p className="real mt-4">Provide real value to your audience. Talk with us to find out how.</p>
                <Link to="/contact"><button class="btn mt-3 py-md-3 px-md-5 me-3 rounded-pill quote_btn animated">Get In Touch</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
