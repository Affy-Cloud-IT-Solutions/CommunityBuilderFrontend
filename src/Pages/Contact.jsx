import React, { useEffect } from 'react';
import "../App.css"
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer'

export const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="container-fluid position-relative p-0 bg-header1">
                <Navbar />
                <div className="container py-5 ">
                    <h1 className='text-center us'>Contact Us</h1>
                    <div className='row'>
                        <div className="col-lg-12 px-5">
                            <form>
                                <div className="row g-4 md-mt-5">
                                    <div className="col-md-6">
                                        <label className='mb-2 lab'>Name :</label>
                                        <input type="text" className="form-control border-0 name px-4" placeholder="Your Name" style={{ height: '50px' }} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className='mb-2 lab'>Email :</label>
                                        <input type="email" className="form-control border-0 name  px-4" placeholder="Your Email" style={{ height: '50px' }} />
                                    </div>

                                    <div className="col-12">
                                        <label className='lab mb-2'>Inquiry Type :</label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="technical" id="checkTechnical" />
                                            <label className="form-check-label" for="checkTechnical">
                                                Technical/support issue
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="hosting" id="checkHosting" />
                                            <label className="form-check-label" for="checkHosting">
                                                Hosting, including startup/nonprofit pricing
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="custom" id="checkCustom" />
                                            <label className="form-check-label" for="checkCustom">
                                                Custom design, development, enterprise pricing
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="other" id="checkOther" />
                                            <label className="form-check-label" for="checkOther">
                                                Other, not sure
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label className='lab mb-2'>Message :</label>
                                        <textarea className="form-control border-0  px-4 py-3 name " rows="4" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-12 d-flex justify-content-end">
                                        {/* <button className="btn py-3" type="submit">Send Message</button> */}
                                        <button class="btn mt-3 py-md-3 px-md-4 me-3 rounded-pill quote_btn2 animated slideInLeft">Send Message</button>

                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container-fluid last" >
            <div class="container py-5">              
                <div class="row g-5"> 
                <div className='col'>
                        <div class="star" style={{ textAlign: 'center' }}>
                          <h1>Ready to grow your</h1>   
                          <p className="mt-4 p"><span className="px-4">forum community?</span></p>    
                          <p className="real mt-4">Provide real value to your audience. Talk with us to find out how.</p>  
                          <button class="btn mt-3 py-md-3 px-md-5 me-3 rounded-pill quote_btn animated slideInLeft">Get In Touch</button>
                        </div>
                    </div>             
                                                   
                    
                </div>
            </div>
        </div>
            <Footer />
        </div>

    )
}
