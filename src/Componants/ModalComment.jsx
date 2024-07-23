import React, { useState } from 'react';


const ModalComment = ({ onClose }) => {  
  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>Post Comment</h2>
        <div className="d-flex align-items-center mb-3">
          <img
            src="https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg"
            alt="Profile"
            className="rounded-circle"
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          <h5>Ambreen Bano</h5>
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

export default ModalComment;
