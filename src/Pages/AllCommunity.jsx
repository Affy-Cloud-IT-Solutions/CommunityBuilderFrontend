import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer'
import { fetchWeb } from "../utils/utils";
import { ScaleLoader } from "react-spinners";

export const AllCommunity = () => {
  const [truncatedText, setTruncatedText] = useState("");
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

  const [isLoading, setIsLoading] = useState(true);
  const [networkError, setNetworkError] = useState("");
  const [communities, setCommunities] = useState([]);

  const getAllCommunities = async () => {
    try {
      setNetworkError("");
      setIsLoading(true);
      const response = await fetchWeb("/community/display", "get", null);
      console.log(response);
      setIsLoading(false);
      if (response.data.error) {
        setIsLoading(false);
        setNetworkError(response.data.error);
        return;
      } else {
        setCommunities(response.data.meta);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      const errorMessage =
        err.response?.data?.message ||
        "Something Went Wrong. Please Try Again Later.";
      setNetworkError(errorMessage);
    }
  };
  console.log(networkError);

  useEffect(() => {
    getAllCommunities();
  }, []);

  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <div className="container-fluid py-5 Community_header">
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h2 className="display-4 animated  fontt zoomIn">
                Here are our Communities
              </h2>
              <p className="gather mt-3">
                <span className="px-3 py-1">gather, share, and thrive.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {isLoading && !networkError && (
        <div
          className="loader-container container-fluid"
          style={{ backgroundColor: "#dce0fd" }}
        >
          <ScaleLoader color="#0f185d" />
        </div>
      )}
      {!isLoading && networkError && (
        <div
          className="loader-container container-fluid"
          style={{ backgroundColor: "#dce0fd" }}
        >
          <p style={{ color: "red" }}>{networkError}</p>
        </div>
      )}
      {!isLoading && !networkError && (
        <div class="container-fluid bbb">
          {communities &&
            communities.length > 0 &&
            communities.map((community) => {
              return (
                <div class="container py-5">
                  <div class="row g-3">
                    <div class="col-lg-4 col-md-6  ">
                      <Link to={`/community/${community._id}`}>
                        {" "}
                        <div
                          class="service-item0"
                          style={{ textDecoration: "none" }}
                        >
                          <div class="service-icon d-flex justify-content-center align-items-center rounded-circle">
                            <img
                              src={community.images[0]}
                              className=" w-100 h-100 mt-5 rounded"
                              alt=""
                            />
                          </div>
                          <h4 className="mt-5 text-center">{community.name}</h4>
                          <p>{community.description}...</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      <div class="container-fluid last">
        {/*  */}
        <div class="container py-5">
          <div class="row g-5">
            <div className="col-12">
              <div class="star" style={{ textAlign: "center" }}>
                <h1>Ready to grow your</h1>
                <p className="mt-4 p">
                  <span className="px-4 ">Your community?</span>
                </p>
                <p className="real mt-4">
                  Provide real value to your audience. Talk with us to find out
                  how.
                </p>
                <Link to="/contact">
                  <button class="btn mt-3 py-md-3 px-md-5 me-3 rounded-pill quote_btn animated">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
