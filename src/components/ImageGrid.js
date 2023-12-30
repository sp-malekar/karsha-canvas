import React, { useState } from 'react';

const ImageGrid = ({ images }) => {
  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);

  const openImageView = (parentIndex, childIndex) => {
    setSelectedParent(parentIndex);
    setSelectedChildIndex(childIndex);
  };

  const closeImageView = () => {
    setSelectedParent(null);
    setSelectedChildIndex(0);
  };


  const selectedImages = selectedParent !== null ? images[selectedParent]?.children : [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {images.map((parent, parentIndex) => (
        <div key={parentIndex} className="border p-2 aspect-w-1 aspect-h-1" onClick={() => openImageView(parentIndex, 0)}>
          <div className="h-full overflow-y-auto">
            <img
              src={parent.src}
              alt={`parent-pic ${parentIndex + 1}`}
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        </div>
      ))}

      {/* Modal for larger image view */}
      {selectedParent !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="max-w-full max-h-full overflow-hidden">
            <div className="flex flex-col items-center">
              <button className="text-white px-4 py-2 absolute top-4 right-4" onClick={closeImageView}>
                Close
              </button>
              {/* Image with navigation arrows */}
              <div className="relative w-full">
                {selectedChildIndex > 0 && (
                  <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl lg:text-5xl xl:text-6xl"
                    onClick={() => setSelectedChildIndex((prevIndex) => prevIndex - 1)}
                  >
                    &#8249;
                  </button>
                )}
                {selectedChildIndex < selectedImages.length - 1 && (
                  <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl lg:text-5xl xl:text-6xl"
                    onClick={() => setSelectedChildIndex((prevIndex) => prevIndex + 1)}
                  >
                    &#8250;
                  </button>
                )}
                <img
                  src={selectedImages[selectedChildIndex]?.src}
                  alt={`child-pic ${selectedChildIndex + 1}`}
                  className="w-full h-auto object-contain"
                  style={{ maxWidth: '80vw', maxHeight: '80vh', width: 'auto', height: 'auto' }}
                />
              </div>
              {/* Dots for indicating current position */}
              <div className="flex mt-4">
                {selectedImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 mx-2 rounded-full ${
                      index === selectedChildIndex ? 'bg-white' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;