// Gallery.js
import React from 'react';

function Gallery({ imageUrls }) {
    return (
        <div className="gallery">
            {imageUrls.map((url, index) => (
                <img key={index} src={url} alt="" />
            ))}
        </div>
    );
}

export default Gallery;