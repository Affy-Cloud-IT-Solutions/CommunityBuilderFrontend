import React, { useEffect } from 'react';
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer'

export const Tech = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
return (
    <div>
        <div className="container-fluid position-relative p-0">
            <Navbar />
            <div className="container-fluid md-py-5 bg-header text-center">
                <div className="row py-5">
                    <div className="col-12 pt-lg-5  md-p-5">
                        <h2 className='proj'>A great forum can help customers find and use your product</h2>
                        <p className='dev1 mt-3'>Social media and real-time chat apps such as Discord are great for connecting with your community, but forums can provide a level of deep engagement as well as SEO benefits that can’t be matched by the transient nature of conversations in those environments.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid bb ">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <div className="">
                            <p className="foster">
                            Support</p>
                        </div>
                        <p className="at">Customers helping customers. Community members help one another, increasing customer satisfaction and reducing your support costs.</p>
                    </div>
                    <div className="col-lg-6" style={{ minHeight: '400px' }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100  h-100 rounded " src="https://nodebb.org/wp-content/uploads/2021/09/Group-3703-2.png" alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid bb">
            <div className="container md-py-5">
                <div className="row flex-lg-row-reverse">
                    <div className="col-lg-6 order-lg-2" style={{ minHeight: '400px' }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100 rounded" src="https://nodebb.org/wp-content/uploads/2021/09/Group-3675-1536x902.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 order-lg-1">
                        <div>
                            <p className="foster">
                            Content</p>
                        </div>
                        <p className="at">User generated content made easy. Forums provide a great way to grow organic content on your own domain, driving traffic and increasing SEO rankings.</p>
                    </div>

                </div>
            </div>
        </div>
        <div className='container'>
            <h3 className='text-center mt-5'>Ready to move to OneConnect?</h3>
            <p className='text-center h3 mb-5'><span className='help px-3 py-1'>We can help!</span></p>
            <div className='row g-5 mb-5'>
                <div class="col-lg-4 col-md-6 " >
                    <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon1">
                            <img className='w-100 h-75' src="https://nodebb.org/wp-content/uploads/2022/10/icon-migration.png" alt='' />
                            <h4 className='mx-3'>Migration</h4>
                        </div>
                        <p className="p-2 let">Let us export your old bulletin board to a shinny new OneConnect forum</p>

                    </div>
                </div>
                <div class="col-lg-4 col-md-6" >
                    <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon1">
                            <img className='w-100 h-75' src="https://nodebb.org/wp-content/uploads/2022/10/icon-design.png" alt='' />
                            <h4 className='mx-1'>Design</h4>
                        </div>

                        <p class="p-2 let">We can provide full branding and design to create a seamless user experience</p>

                    </div>
                </div>
                <div class="col-lg-4 col-md-6" >
                    <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon1">
                            <img className='w-100 h-75' src="https://nodebb.org/wp-content/uploads/2022/10/icon-development.png" alt='' />
                            <h4 className='mx-2'>Development</h4>
                        </div>
                        <p class="p-2 let">Our experts can provide SSO login integration and other customization</p>

                    </div>
                </div>
            </div>
        </div>
        <Footer />

    </div>
)
}