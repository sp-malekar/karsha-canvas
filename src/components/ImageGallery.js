import React from 'react';
import ImageGrid from './ImageGrid';
import logo from '../images/logo.png'
import Forest from '../images/Forest.jpg'
import Monument from '../images/Monument.jpg'
import Mountains from '../images/Mountains.jpg'
import Krishna from '../images/Krishna.jpg'
import Ganesh from '../images/Ganesh.jpg'
import Ranges from '../images/Ranges.jpg'
import Vally from '../images/Vally.jpg'
import Vikendi from '../images/Vikendi.jpg'
import Temple from '../images/Temple.jpg'
import City from '../images/City.jpg'
import Himalayas from '../images/Himalayas.jpg'
import japan from '../images/japan.jpg'
import SunFlowers from '../images/SunFlowers.jpg'
import Shiva from '../images/Shiva.jpg'


const ImageGallery = () => {
  const images = [
    {
      src: Shiva,
      children: [
        { src: Temple },
        { src: Monument },
      ],
    },
    {
      src: Mountains,
      children: [
        { src: City },
        { src: Forest },
        // ... more child images
      ],
    },
    {
      src: Krishna,
      children: [
        { src: Temple },
        { src: logo },
        // ... more child images
      ],
    },
    {
      src: Himalayas,
      children: [
        { src: japan },
        { src: SunFlowers },
        // ... more child images
      ],
    },
    {
      src: SunFlowers,
      children: [
        { src: Vikendi },
        { src: Vally },
        // ... more child images
      ],
    },
    {
      src: Ganesh,
      children: [
        { src: Ranges },
        { src: Temple },
        // ... more child images
      ],
    },
    {
      src: Ranges,
      children: [
        { src: Mountains },
        { src: Krishna },
        // ... more child images
      ],
    },
    {
      src: Forest,
      children: [
        { src: Mountains },
        { src: Krishna },
        // ... more child images
      ],
    },
    {
      src: City,
      children: [
        { src: Shiva },
        { src: Krishna },
        // ... more child images
      ],
    },
    {
      src: japan,
      children: [
        { src: Mountains },
        { src: SunFlowers },
        // ... more child images
      ],
    }
  ];

return (
  <div>
    {/* Your header and other content here */}
    <ImageGrid images={images} />
  </div>
);
};


export default ImageGallery;
