import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../Componants/Navbar";
import { Footer } from "../Componants/Footer";
import { fetchWeb } from "../utils/utils";
import { ScaleLoader } from "react-spinners";
import toast from "react-hot-toast";

export const CommunityById = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  let userData = localStorage.getItem("userData");

  const [isLoading, setIsLoading] = useState(true);
  const [networkError, setNetworkError] = useState("");
  const [community, setCommunity] = useState([]);

  const [joinLoading, setJoinLoading] = useState(false);
  const [joinError, setJoinError] = useState("");

  const getCommunityById = async () => {
    try {
      setNetworkError("");
      setIsLoading(true);
      const response = await fetchWeb(`/community/display/${id}`, "get", null);
      console.log(response);
      setIsLoading(false);
      if (response.data.error) {
        setIsLoading(false);
        setNetworkError(response.data.error);
        return;
      } else {
        setCommunity(response.data.meta.community);
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

  const joinCommunity = async (token) => {
    try {
      setJoinError("");
      setJoinLoading(true);
      let headers = { Authorization: `Bearer ${token}` };
      const response = await fetchWeb(
        `/community/join`,
        "post",
        { communityId: id },
        headers
      );
      console.log(response);
      setJoinLoading(false);
      toast.success(response.data.message);
      getCommunityById();
      navigate.push(`/${id}/Community_dash`);
      if (response.data.error) {
        setJoinLoading(false);
        setJoinError(response.data.error);
        return;
      } else {
        setCommunity(response.data.meta.community);
        setJoinLoading(false);
        // setIsLoading();
      }
    } catch (err) {
      console.log("catch", err);
      setJoinLoading(false);
      const errorMessage =
        err.response?.data?.message ||
        "Something Went Wrong. Please Try Again Later.";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      localStorage.setItem("communityId", id.toString());
      getCommunityById();
    }
  }, [id]);

  const joinGroup = () => {
    let token = localStorage.getItem("csf_token");
    console.log(token, id);
    if (token) {
      if (
        community &&
        community.members.includes(userData && JSON.parse(userData)?._id)
      ) {
        console.log("if");
        navigate(`/${id}/Community_dash`);
      } else {
        console.log("else");
        joinCommunity(token);
      }
    } else {
      console.log("send to login");
      navigate("/login");
    }
  };

  return (
    <>
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
        <div>
          <div className="container-fluid position-relative p-0">
            <Navbar />
            <div className="container-fluid py-5 Community_header">
              <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                  <h2 className="display-4 animated  fontt ">
                    Welcom to the community:
                    <br /> {community.name}
                  </h2>
                  <p className="tech_para mt-4">{community.description}</p>
                  {/* <Link to="#"> */}
                  <button
                    class="btn py-md-2 px-md-4 rounded-pill quote_btn1 animated text-black"
                    onClick={joinGroup}
                    // disabled={
                    //   community &&
                    //   community.members.includes("66989568273787338fb783e3")
                    // }
                  >
                    {community &&
                    community.members.includes(
                      userData && JSON.parse(userData)?._id
                    )
                      ? "Go to community"
                      : "Join Group"}
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid community_pic">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center align-items-center img_dec mb-5">
                  <img
                    src={community && community?.images && community?.images[0]}
                    className="w-100 h-100"
                    alt="community_image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid last">
            <div class="container py-5">
              <div class="row g-5">
                <div className="col-12">
                  <div class="star" style={{ textAlign: "center" }}>
                    <h1>Ready to Try the #1</h1>
                    <p className="mt-4 p">
                      <span className="px-4 ">Modern Discussion Platform</span>
                    </p>
                    <p className="real mt-4">
                      Provide real value to your audience. Talk with us to find
                      out how.
                    </p>
                    <Link to="/contact">
                      <button class="btn mt-3 py-md-3 px-md-5 me-3 rounded-pill quote_btn animated slideInLeft">
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
      )}
    </>
  );
};
