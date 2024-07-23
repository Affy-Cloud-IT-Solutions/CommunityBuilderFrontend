import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom';
import logo from "../img/logoo.png"


export const Footer = () => {
    return (
      <div>
        <footer class="text-center text-lg-start text-muted footer-bg pt-5">
          <section class="">
            <div class="container text-center text-md-start">
              <div class="row">
                <div class="col-md-3 col-lg-3 col-xl-3 m-4 mx-auto">
                  <img class="footer-logo" src={logo} alt="" />
                </div>

                <div class="col-md-3 col-lg-3 col-xl-3 ">
                  <div
                    className=" position-relative pb-3 mb-3 mx-auto"
                    style={{ maxWidth: "400px" }}
                  >
                    <h4 className="mb-0 "> Showcase</h4>
                  </div>
                  <p>
                    <Link to="/sap_hxm">
                      <a class="text-reset mt-3 talk1 talk">
                        Developer communities
                      </a>
                    </Link>
                  </p>
                  <p>
                    <Link to="/customer">
                      {" "}
                      <a class="text-reset talk1 talk">Education & Finance</a>
                    </Link>
                  </p>
                  <p>
                    <Link to="/cloud">
                      {" "}
                      <a class="text-reset talk1  talk">Tech & Startups</a>
                    </Link>
                  </p>
                  <p>
                    <Link to="/cloud">
                      {" "}
                      <a class="text-reset talk1  talk">Gaming Communities</a>
                    </Link>
                  </p>
                </div>

                <div class="col-md-3 col-lg-3 col-xl-3 mb-4">
                  <h4 className="mb-4 ">
                    <span className="color"></span>Useful Links
                  </h4>
                  <Link to="/">
                    <a>
                      <p className="talk">Home</p>
                    </a>
                  </Link>

                  <Link to="/about">
                    {" "}
                    <a>
                      <p className="talk">About</p>
                    </a>
                  </Link>
                  <a href="https://OneConnect.com/" target="_blank">
                    <p className="talk">Product</p>
                  </a>
                  <Link to="/contact">
                    <a>
                      <p className="talk">Contact Us</p>
                    </a>
                  </Link>
                </div>

                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h4 className="mb-4 ">
                    <span className="color"></span>Contact
                  </h4>
                  <p>
                    <i class="fas fa-home me-3"></i>104, Nasheman Firoza
                    Apartments, Koh-e-fiza, Bhopal Madhya Pradesh, 462030
                  </p>
                  <p>
                    <i class="fas fa-envelope me-3"></i>
                    info@OneConnect.com
                  </p>
                  <p>
                    <i class="fas fa-phone me-3"></i> +91-8349110000
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div class="text-center lastf">
            <p class="text-black my-2">
              © 2024
              <a href="#" class="fw-bold text-affy">
                {" "}
                OneConnect org.
              </a>{" "}
              All Rights Reserved
            </p>
            <div class="social-icons d-flex justify-content-center">
              <a
                href="https://www.instagram.com/affy_cloud/?igsh=MXE1YXpuN3VrOTZwYw%3D%3D"
                target="_blank"
                rel="noreferrer"
                class="me-4 insta"
              >
                <i class="fab fa-instagram text-black"></i>
              </a>
              <a target="_blank" class="me-4 whatsapp">
                <i class="fab fa-whatsapp text-black"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/affy-cloud-2b6137309/"
                rel="noreferrer"
                target="_blank"
                class="me-4 linkdlin"
              >
                <i class="fab fa-linkedin text-black"></i>
              </a>
              <a
                href="https://www.youtube.com/@affycloud"
                rel="noreferrer"
                target="_blank"
                class="youtube"
              >
                <i class="fab fa-youtube text-black"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
}
