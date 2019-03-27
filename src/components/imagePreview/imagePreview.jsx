import React from "react";

const ImagePreview = ({ imageUrl = "" }) => {
  return (
    <div key={imageUrl} className="render-preview">
      <div className="image-container">
        <img src={imageUrl} alt={imageUrl} width="300px" height="300px" />
      </div>
    </div>
  );
};

export default ImagePreview;
