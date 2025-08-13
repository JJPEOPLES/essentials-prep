import React, { useState } from 'react';
import useLazyLoad from '../hooks/useLazyLoad';

const LazyImage = ({ src, alt, className, ...props }) => {
  const [ref, isInView] = useLazyLoad();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={ref} 
      className={`lazy-image-container ${isLoaded ? 'loaded' : ''}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {!isLoaded && (
        <div 
          className="lazy-image-placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
          }}
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className || ''} ${isLoaded ? 'fade-in' : ''}`}
          onLoad={handleImageLoad}
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;