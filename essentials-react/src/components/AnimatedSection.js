import React from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  ...props 
}) => {
  const [ref, isVisible] = useAnimateOnScroll({ threshold });

  const animationClass = isVisible ? animation : '';
  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div 
      ref={ref} 
      className={`${className} ${animationClass} ${delayClass}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;