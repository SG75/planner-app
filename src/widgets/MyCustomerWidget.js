import React, { useEffect, useState } from "react";
import "../styles/styles.css";

export default function MyCustomWidget() {
  const [photos, setPhotos] = useState([
    "https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    "https://images.unsplash.com/photo-1549633030-89d0743bad01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1544764200-d834fd210a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1552508744-1696d4464960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  ]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const slideshowTimer = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => {
        if (prevIndex === photos.length - 1) {
          return 0; // If it's the last photo, loop back to the first photo
        } else {
          return prevIndex + 1; // Transition to the next photo
        }
      });
    }, 6000); // Change the duration (in milliseconds) between transitions

    return () => {
      clearInterval(slideshowTimer);
    };
  }, [photos]);

  //   return (
  //     <div>
  //       <div style={{ minWidth: 300 }}>
  //         <img src={photos[currentPhotoIndex]} alt="Current Photo" />
  //       </div>
  //     </div>
  //   );
  // }

  const widgetContainerStyle = {
    minWidth: 300,
    maxWidth: "100%", // Set maximum width to ensure it doesn't exceed the container
  };

  return (
    <div>
      <div style={widgetContainerStyle}>
        <img
          src={photos[currentPhotoIndex]}
          alt="Current Photo"
          style={{ maxWidth: "100%", height: "auto" }} // Adjust the image style
        />
      </div>
    </div>
  );
}
