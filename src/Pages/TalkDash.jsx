import React, { useEffect, useState } from "react";
import { Navbar } from "../Componants/Navbar";
import Modal from "../Componants/Modal";
import { Footer } from "../Componants/Footer";
import { fetchWeb } from "../utils/utils";
import { useParams } from "react-router-dom";
import ModalComment from "../Componants/ModalComment";

export const TalkDash = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalComment, setShowModalComment] = useState(false);

  const { comm_id } = useParams();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModalComment = () => {
    setShowModalComment(true);
  };

  const closeModalComment = () => {
    setShowModalComment(false);
  };

  const [isLoading, setIsLoading] = useState(true);
  const [networkError, setNetworkError] = useState("");
  const [posts, setPosts] = useState([]);

  const getPostsByCommunity = async () => {
    let token = localStorage.getItem("csf_token");
    try {
      let headers = { Authorization: `Bearer ${token}` };
      console.log(headers);
      setNetworkError("");
      setIsLoading(true);
      const response = await fetchWeb(
        `/post/display/${comm_id}`,
        "get",
        null,
        headers
      );
      console.log(response);
      setIsLoading(false);
      if (response.data.error) {
        setIsLoading(false);
        setNetworkError(response.data.error);
        return;
      } else {
        setPosts(response.data.meta);
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

  useEffect(() => {
    getPostsByCommunity();
  }, []);

  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <Navbar />
      </div>
      <div className="container-fluid talk_main">
        <div className="container-fluid py-lg-5">
          <div className="row g-3 px-lg-5 mt-lg-5">
            <div className="col-lg-2 px-3">
              <button
                class="btn mt-3 py-md-3 px-md-5 rounded-pill quote_btn3 text-black"
                onClick={openModal}
              >
                + Post
              </button>
            </div>
            <div class="col-lg-7">
              {/* -------------Repeat this section dynamic-------------- */}

              {posts && posts.length == 0 && (
                <div className="text-center font-weight-bold text-danger">
                  No posts in this community yet.
                </div>
              )}

              {posts &&
                posts.length > 0 &&
                posts.map((post) => {
                  return (
                    <div class="blog_section ">
                      <div class="row g-2">
                        <div className="col-12">
                          <div className="d-flex align-items-center">
                            <img
                              src={post && post.createdBy?.profilePicture}
                              alt="#"
                              style={{ width: "50px", height: "50px" }}
                              className="mr-3 profile_pic"
                            />
                            <div className="mx-3 mt-2">
                              <h6 className="card-title">
                                {post && post.createdBy.firstName}{" "}
                                {post && post.createdBy.lastName}
                              </h6>
                              <p></p>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <p class="card-text">{post && post.textMessage}</p>
                          <div>
                            <h6>
                              <i class="bi bi-heart"></i> 5
                            </h6>
                          </div>
                        </div>
                        <div className="col-6 mt-2 d-flex justify-content-between align-items-center">
                          <button type="button" class="btn btn-sm  comment">
                            <i class="bi bi-heart"></i> Like
                          </button>
                          <button
                            type="button"
                            class="btn btn-sm  comment"
                            onClick={openModalComment}
                          >
                            <i class="bi bi-chat-left-text"></i> Comment
                          </button>
                          <button type="button" class="btn btn-sm  comment">
                            {" "}
                            <i class="bi bi-heart"></i> Share
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-lg-3 event_section mb-3">
              <h4 className="text-center">Popular Events</h4>

              {/* -------------Repeat this section dynamic-------------- */}

              <div className="col-12 event_section1 mb-2">
                <div className="d-flex align-items-center ">
                  <img
                    src="https://www.oyorooms.com/blog/wp-content/uploads/2018/02/type-of-event.jpg"
                    alt="#"
                    style={{ maxWidth: "60px", height: "60px" }}
                    className="mr-3 profile_pic"
                  />
                  <div className="mx-3 mt-3 mb-3">
                    <h6 className="">Big 4 Discussions!</h6>
                    <p>
                      Originally this was Made for confessions. This Bowl is now
                    </p>
                    <button type="button" className="btn join_btn px-3">
                      View
                    </button>
                    <button type="button" className="btn join_btn px-4 mx-1">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal onClose={closeModal} getPostsByCommunity={getPostsByCommunity} />
      )}
      {showModalComment && <ModalComment onClose={closeModalComment} />}
      <div class="container-fluid last">
        <div class="container py-5">
          <div class="row g-5">
            <div className="col">
              <div class="star" style={{ textAlign: "center" }}>
                <h1>Ready to grow your</h1>
                <p className="mt-4 p">
                  <span className="px-4">OneConnect</span>
                </p>
                <p className="real mt-4">
                  Provide real value to your audience. Talk with us to find out
                  how.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
