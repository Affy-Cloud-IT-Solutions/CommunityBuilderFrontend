import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Navbar } from "../Componants/Navbar"
import { Footer } from '../Componants/Footer'

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="container-fluid position-relative p-0">
                <Navbar />
                <div className="container-fluid py-5 bg-header">
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h2 className="display-4 animated  fontt zoomIn">We help communities</h2>
                            <p className='gather mt-3'><span className='px-3 py-1'>gather, share, and thrive.</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid last" >
                <div class="container py-5">
                    <div class="row g-5">
                        <div className='col-12'>
                            <h2 className='soc'>Did you know that forums pre-date blogs, social networks and smartphones?</h2>
                            <p className='place mt-4'>They were the first places where communities first gathered and thrived on the Internet. And millions of them are still going strong. From brand communities to product support boards, forums continue to provide value for communities.</p>
                            <h2 className='mt-5 our'>“Our mission is to take the spirit and energy of those great forum platforms <span> and give them the features and performance you’ve come to expect from today’s online world.”</span></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid last">
    <div class="container py-5">
        <div class="row">
            <div class="col-md-6 para">
                <h2 class="are">Who we <span class="px-4">are</span></h2>
                <p class="mt-5">OneConnect was founded by developers with a passion for creating great software.</p>
                <p>This is made by <span class="affy">Affy Cloud IT Solutions</span>. Suddenly it occurred that the time was right to build a new community platform for the future. In 2024, OneConnect was born.</p>
                <p>We were extremely proud to be named winners of the 2024 Affy People’s Choice Awards for Best Forum Software.</p>
            </div>
            <div class="col-md-6 para">
                <h2 class="are">Our community <span class="px-4">motivates us</span></h2>
                <p class="mt-5">We want to give a shout-out to the pros in our very own community support forum. Every day our members help us improve our product and push us to find creative solutions. We wouldn’t be where we are today without their support.</p>
               <Link to="/all_community"> <button class="btn mt-3 py-md-3 px-md-4 me-3 rounded-pill quote_btn2 animated slideInLeft">Join the Community</button></Link>
            </div>
        </div>
    </div>
</div>

            <Footer/>
        </div>
    )
}
