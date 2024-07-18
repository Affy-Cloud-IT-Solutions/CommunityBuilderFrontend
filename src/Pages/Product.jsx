import React, { useEffect } from 'react';
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer'
import { Link } from 'react-router-dom';

export const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <div className="container-fluid py-5 bg-header2">
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h2 className="display-4 animated  fontt zoomIn">Never worry about</h2>
              <p className='gather mt-3'><span className='px-3 py-1'>performance and scalability again.</span></p>
              <p className='fast mt-5'>Our high-performance community discussion platform offers fast and dependable performance that will support even the biggest and most active community.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bb">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center align-items-center">
              <img src='https://nodebb.org/wp-content/uploads/2021/09/Microsoft-Surface-Studio-768x621.png' className='img-fluid' alt='' />

            </div>
            <h2 className='text-center mt-5 sm-col-6'>Customizable <span className='open px-3 py-2'>Open Source Forums</span></h2>
            <p className=' mt-4 great'>OneConnect forums look great on all devices – phone, tablet, or desktop. Customize colors, icons, layout, and more with a few clicks.<br /><br />Need an even more customized look? No problem, we provide full in-house design services for our Enterprise clients, contact us for more details.</p>
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
                <img className='w-75 h-50' src="https://nodebb.org/wp-content/uploads/2021/09/Group-3517-1.png" alt='' />
                <h5 className='mx-4'>User-created Groups</h5>
              </div>
              <p className="p-2 ">Keep your users engaged and connected with each other via groups. Each group page has an activity feed and plugins can extend functionality with features such as a calendar and a photo gallery.</p>

            </div>
          </div>
          <div class="col-lg-4 col-md-6" >
            <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon1">
                <img className='w-75 h-50' src="https://nodebb.org/wp-content/uploads/2021/09/Group-3516-1.png" alt='' />
                <h4 className='mx-4'>Tags</h4>
              </div>

              <p class="p-2 ">Users can tag topics, adding an extra dimension beyond categorization and making it easy to find related content.</p>

            </div>
          </div>
          <div class="col-lg-4 col-md-6" >
            <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon1">
                <img className='w-75 h-50' src="https://nodebb.org/wp-content/uploads/2021/09/Group-3518.png" alt='' />
                <h4 className='mx-2'>Development</h4>
              </div>
              <p class="p-2 ">Grant privileges to individual users or groups, allowing you to create read-only categories or hide them altogether. Give forum members elevated roles such as “Moderator” so they can police your community.</p>

            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bb0 ">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 mt-5">
              <div className="">
                <p className="foster">Be in Control</p>
              </div>
              <p className="at">OneConnect's administration system makes it easy to control all aspects of your forum. Create an unlimited number of administrator and moderator accounts. Set permissions on each account according to your needs.</p>
            </div>
            <div className="col-lg-6" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100  h-100 rounded " src="https://nodebb.org/wp-content/uploads/2021/09/Group-3707-2.png" alt=''/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bb0 bb00">
                <div className="container md-py-5">
                    <div className="row flex-lg-row-reverse">
                        <div className="col-lg-6 order-lg-2" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src="https://nodebb.org/wp-content/uploads/2021/09/Group-3673-2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 order-lg-1">
                            <div>
                                <p className="foster">
                                Real-time Analytics Dashboard</p>
                            </div>
                            <p className="at">Be in control with access to trending content, user activity, and other forum metrics. Create custom reports for any user actions. Then export the data into your favourite analytics software.</p>
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
                <p className="mt-4 p"><span className="px-4 ">Modern Discussion Platform?</span></p>
                <p className="real mt-4">Provide real value to your audience. Talk with us to find out how.</p>
                <Link to="/contact"><button class="btn mt-3 py-md-3 px-md-5 me-3 rounded-pill quote_btn animated slideInLeft">Get In Touch</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
