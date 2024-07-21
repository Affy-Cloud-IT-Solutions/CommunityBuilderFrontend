import React, { useState } from 'react';
import { fetchWeb } from "../utils/utils";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Modal = ({ onClose }) => {
  const [description, setDescription] = useState("");

  let navigate = useNavigate("");

  const [isLoading, setIsLoading] = useState(true);
  const [networkError, setNetworkError] = useState("");

  // Profile picture and name (replace with actual data or props as needed)
  const profilePicUrl =
    "https://img.freepik.com/premium-photo/blue-circle-with-man-s-head-circle-with-white-background_745528-3499.jpg";
  const name = "Mohammad khalid";

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  const createPost = async () => {
    let token = localStorage.getItem("csf_token");
    try {
      setNetworkError("");
      setIsLoading(true);
      let headers = { Authorization: `Bearer ${token}` };
      const response = await fetchWeb(
        `/post/create`,
        "post",
        {
          textMessage: description,
          communityId: "id",
        },
        headers
      );
      console.log(response);
      setIsLoading(false);
      toast.success(response.data.message);
      navigate("/Community_dash");
      if (response.data.error) {
        setIsLoading(false);
        setNetworkError(response.data.error);
        return;
      } else {
        setIsLoading(false);
        // setIsLoading();
      }
    } catch (err) {
      console.log("catch", err);
      setIsLoading(false);
      const errorMessage =
        err.response?.data?.message ||
        "Something Went Wrong. Please Try Again Later.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>Create a post</h2>
        <div className="d-flex align-items-center mb-3">
          <img
            src={profilePicUrl}
            alt="Profile"
            className="rounded-circle"
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          <h4>{name}</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Write Here
            </label>
            <textarea
              className="form-control"
              placeholder="Share your experience or get advice from other professionals ."
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
