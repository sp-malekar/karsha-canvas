import React from 'react';
import ImageGrid from './ImageGrid';
import logo from '../images/logo.png'
import child from '../images/child.jpg'

const ImageGallery = () => {
  const images = [
    {
      src: logo,
      children: [
        { src: child },
        { src: logo },
      ],
    },
    {
      src: logo,
      children: [
        { src: child },
        { src: logo },
        // ... more child images
      ],
    },
  ];

return (
  <div>
    {/* Your header and other content here */}
    <ImageGrid images={images} />
  </div>
);
};


export default ImageGallery;
