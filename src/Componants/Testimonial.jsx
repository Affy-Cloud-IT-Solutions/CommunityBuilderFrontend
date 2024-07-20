import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const Testimonial = () => {
    return (
        <Carousel data-bs-theme="dark" className='mt-5'>
            <Carousel.Item>
                <div className='container'>
                    <div className='col-12'>
                        <h2 className='soft mt-2 mx-2'>Why OneConnect <span className='px-1'> forum software?</span></h2>
                        <p className=' second mt-5 text-center'>"We have considerable prior experience with several other well-known forums, and OneConnect beats all of them for our needs, including safety and security for minors, simplicity of use, reliability for academic records, stability under heavy load, and richness of features sufficient to even engage media-saturated teens.<span> Schools are not big money customers, but the OneConnect team always treats us like we are important to them."</span></p>
                        <div className='profile_section mb-5'>
                            <div className='pro'>
                                <img className=' pro_img' src='https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg' alt=''/>
                            </div>
                            <p className='name1'>Artur Matczak <span>Opera, Software Engineer</span></p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='container'>
                    <div className='col-12'>
                        <h2 className='soft mt-2 mx-2'>Why OneConnect <span className='px-2'>forum software?</span></h2>
                        <p className=' second mt-5 text-center px-2'>“When we decided it was time to revamp our community we contemplated several possible solutions. We opted for OneConnect, and we couldn't be happier.Working with the fantastic team at OneConnect (highly recommended, by the way), we quickly spun up a new Q&A using our existing database <span> Numbers confirm that our user engagement skyrocketed. There was not a single comment from our users that would say that the old forums were better which, I think, speaks for itself.”</span></p>
                        <div className='profile_section mb-5'>
                            <div className='pro'>
                                <img className=' pro_img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qefgZF-DmdD3uJFFx9anoM9LxchS0oNUfQ&s' alt=''/>
                            </div>
                            <p className='name1'>Christina Patchell​, <span>MAXON</span></p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='container'>
                    <div className='col-12'>
                        <h2 className='soft mt-2 mx-2'>Why OneConnect <span className='px-2'>forum software?</span></h2>
                        <p className=' second mt-5 text-center px-2'>"We have considerable prior experience with several other well-known forums, and OneConnect beats all of them for our needs, including safety and security for minors, simplicity of use, reliability for academic records, stability under heavy load, and richness of features sufficient to even engage media-saturated teens.<span> Schools are not big money customers, but the OneConnect team always treats us like we are important to them."</span></p>
                        <div className='profile_section mb-5'>
                            <div className='pro'>
                                <img className=' pro_img' src='https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg' alt=''/>
                            </div>
                            <p className='name1'>Jeff Gilbert , <span>The Potter's School</span></p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>


        </Carousel>
    );
}
