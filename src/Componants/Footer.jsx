import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom';
import logo from "../img/affy_logo.png"


export const Footer = () => {
    return (
        <div>
            <footer class="text-center text-lg-start bg-body-tertiary text-muted footer-bg pt-5">
                <section class="">
                    <div class="container text-center text-md-start">

                        <div class="row">

                            <div class="col-md-3 col-lg-4 col-xl-3 m-4 mx-auto">

                                <img class="footer-logo" src={logo} alt=''/>
                                <p className='mt-3'>
                                    We craft the future, not simply websites
                                </p>
                                <p className='mt-5'>
                                    Stay tuned with us on social networks!
                                </p>

                                {/* <!------------- Start  khalid---------------> */}

                                <div class="social-icons ">
                                    {/* <!-- Instagram --> */}
                                    <a href="https://www.instagram.com/affy_cloud/?igsh=MXE1YXpuN3VrOTZwYw%3D%3D" target="_blank" rel='noreferrer' class="me-4 insta">
                                        <i class="fab fa-instagram"></i>
                                    </a>

                                    {/* <!-- WhatsApp --> */}
                                    <a  target="_blank" class="me-4 whatsapp">
                                        <i class="fab fa-whatsapp"></i>
                                    </a>
                                    {/* <!-- LinkedIn --> */}
                                    <a href="https://www.linkedin.com/in/affy-cloud-2b6137309/" rel='noreferrer' target="_blank" class='linkdlin'>
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://www.youtube.com/@affycloud" rel='noreferrer' target="_blank" class='youtube'>
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </div>
                                {/* <!-- -------- End ---------------------- --> */}
                            </div>



                            <div class="col-md-3 col-lg-3 col-xl-3 ">
                                <div className=" position-relative pb-3 mb-3 mx-auto" style={{ maxWidth: '400px' }}>
                                    <h2 className="mb-0 "><span className='color'>Let's </span>Talk</h2>
                                </div>
                                <p>
                                    <Link to="/sap_hxm"><a class="text-reset mt-3 talk1 talk">SAP SuccessFactors HXM</a></Link>
                                </p>
                                <p>
                                   <Link to="/customer"> <a class="text-reset talk1 talk">SAP Customer Experience (CX)HXM</a></Link>
                                </p>
                                <p>
                                   <Link to="/cloud"> <a class="text-reset talk1  talk">SAP Analytics Cloud</a></Link>
                                </p>
                                <p>
                                    <Link to="/hana"><a class="text-reset talk1 talk">SAP S/4 HANA</a></Link>
                                </p>
                                <p>
                                    <Link to="/business"><a class="text-reset talk1 talk">SAP Business Platform</a></Link>
                                </p>
                                <p>
                                    <Link to="/cloud"><a class="text-reset talk1 talk">SAP Cloud Platform </a></Link>
                                </p>
                                <p>
                                    <Link to="/Sales_force "><a class="text-reset talk1 talk">Sales Force</a></Link>
                                </p>
                                <p>
                                    <Link to="/Sales_cloud "><a class="text-reset talk1 talk">SAP Sales Cloud</a></Link>
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h2 className="mb-4 "><span className='color'></span>Link</h2>
                                <Link to="/" ><a><p  className='talk'>Home</p></a></Link>

                                <Link to="/about" > <a><p className='talk'>About</p></a></Link>
                                <a href='https://affyclouditsolutions.com/' target="_blank"><p className='talk'>IT Solutions</p></a>
                                <Link to="/contact"><a><p className='talk'>Contact Us</p></a></Link>
                                <Link to="/"><a><p className='talk'>Solutions</p></a></Link>

                              
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h2 className="mb-4 "><span className='color'></span>Contact</h2>
                                <p><i class="fas fa-home me-3"></i>104, Nasheman Firoza Apartments, Koh-e-fiza, Bhopal Madhya
                                    Pradesh,
                                    462030</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    info@affycloudsolution .com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> +91-8349113331</p>
                                <p><i class="fas fa-phone me-3"></i> +91-87703 06617</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="text-center text-white px-4 py-3 border-white bg-black" >
                    © 2024
                    <a class="fw-bold text-affy" > Affy Cloud Solution.</a> All Rights
                    Reserved
                </div>
            </footer>
        </div>
    )
}
