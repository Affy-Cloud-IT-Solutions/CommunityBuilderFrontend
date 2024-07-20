import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../App.css"



gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
    const heading = useRef(null);



    useEffect(() => {
        gsap.fromTo(
            heading.current,
            { scale: 0.7 },
            {
                scale: 1,
                duration: 2,  // Longer duration for smoother transition
                ease: 'power2.out',  // Smooth easing function
                scrollTrigger: {
                    trigger: heading.current,
                    start: 'top 80%',  // Adjusting start point
                    end: 'top 20%',  // Adjusting end point
                    scrub: 1,  // Scrub for smoother animation
                },
            }
        );

    }, []);
    return (
        <div class="container-fluid bbb" >
            <div class="container py-5">
               
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6  zoomIn1" >
                        <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon0">
                                <img className='w-75 h-75' src="https://nodebb.org/wp-content/uploads/2021/08/Group-3390.png" alt='' />
                            </div>
                            <h4>Mobile-first responsive</h4>
                            <p class="p-2">Enjoy a perfect experience on every device and screen with snappy mobile-first software.</p>
                           
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  zoomIn1" >
                        <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon0">
                                <img className='w-75 h-75' src="https://nodebb.org/wp-content/uploads/2021/08/Group-3394.png" alt='' />
                            </div>
                            <h4>Internationalization</h4>
                            <p class="p-2">Get built-in localization support with over 10 languages actively translated.</p>
                           
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6  zoomIn1" >
                        <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon0">
                                <img className='w-75 h-75' src="https://nodebb.org/wp-content/uploads/2021/08/Group-3398.png" alt='' />
                            </div>
                            <h4>Search optimized</h4>
                            <p class="p-2">Enhance your rankings with human-readable URLs, semantic HTML with embedded microdata, and more.</p>
                           
                        </div>
                    </div>   
                    <div class="col-lg-4 col-md-6  zoomIn1" >
                        <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon0">
                                <img className='w-75 h-75' src="https://nodebb.org/wp-content/uploads/2021/08/Group-3447.png" alt='' />
                            </div>
                            <h4>Social media integration</h4>
                            <p class="p-2">Bring more visitors to your community by sharing content to Facebook, Google, and Twitter.</p>
                            
                        </div>
                       
                    </div>                  
                    <div class="col-lg-4 col-md-6  zoomIn1" >
                        <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon0">
                                <img className='w-75 h-75' src="https://nodebb.org/wp-content/uploads/2021/08/Group-3399.png" alt='' />
                            </div>
                            <h4>Interact in real-time</h4>
                            <p class="p-2">Connect faster with instant notifications, streaming posts, and real-time chats.</p>
                           
                        </div>
                    </div>  
                    <div class="col-lg-4 col-md-6  zoomIn1" >
                        <div class="service-item d-flex flex-column align-items-center justify-content-center text-center">
                            <div class="service-icon0">
                                <img className='w-75 h-75' src="https://nodebb.org/wp-content/uploads/2021/08/Vector-1.png" alt='' />
                            </div>
                            <h4>Native analytics</h4>
                            <p class="p-2">Know what content your users enjoy most with real-time analytics dashboard.</p>
                           
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}
