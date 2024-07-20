import React, { useState } from 'react';

const Modal = ({ onClose }) => {
  const [description, setDescription] = useState('');

  // Profile picture and name (replace with actual data or props as needed)
  const profilePicUrl = "https://img.freepik.com/premium-photo/blue-circle-with-man-s-head-circle-with-white-background_745528-3499.jpg";
  const name = "Mohammad khalid";

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>        
        <h2>Create a post</h2>
        <div className="d-flex align-items-center mb-3">
          <img src={profilePicUrl} alt="Profile" className="rounded-circle" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          <h4>{name}</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Write Here</label>
            <textarea
              className="form-control"
              placeholder='Share your experience or get advice from other professionals .'
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
