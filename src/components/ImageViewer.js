import React from 'react';

const ImageViewer = ({ imageUrl, onClose }) => {
  return (
    <div className="viewer-container">
      {/* Display the image */}
      <img src={imageUrl} alt="Artwork" className="img-fluid" />

      {/* Add a close button or any other controls */}
      <button onClick={onClose} className="btn btn-secondary mt-3">
        Close
      </button>
    </div>
  );
};

export default ImageViewer;
