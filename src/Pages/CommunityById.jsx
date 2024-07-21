import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../Componants/Navbar'
import img from "../img/faceBubbles (1).webp"
import { Footer } from '../Componants/Footer';

export const CommunityById = () => {
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
                            <h2 className="display-4 animated  fontt ">Tech Groups and Events: Connect Over Technology with OneConnect</h2>
                            <p className='tech_para mt-4'>Meet people who share your love of technology by joining tech OneConnect groups and tech events.  <br />Technology activities range from coding to fintech, and cloud security.</p>
                            <Link to=""><button class="btn py-md-2 px-md-4 rounded-pill quote_btn1 animated text-black">Join Group</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid community_pic">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-lg-12 d-flex justify-content-center align-items-center py-5">
                            <img src={img} className='w-100 h-100' />

                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid last" >
        <div class="container py-5">
          <div class="row g-5">
            <div className='col-12'>
              <div class="star" style={{ textAlign: 'center' }}>
                <h1>Ready to Try the #1</h1>
                <p className="mt-4 p"><span className="px-4 ">Modern Discussion Platform</span></p>
                <p className="real mt-4">Provide real value to your audience. Talk with us to find out how.</p>
                <Link to="/contact"><button class="btn mt-3 py-md-3 px-md-5 me-3 rounded-pill quote_btn animated slideInLeft">Get In Touch</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
            <Footer/>
        </div>
    )
}
