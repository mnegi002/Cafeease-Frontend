import React, { createContext, useState } from 'react';

// Create a context for managing animation state
const AnimationContext = createContext();

// Create a provider component
export const AnimationProvider = ({ children }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  // Function to toggle animation state
  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
  };

  // Define animation styles
  const animationStyles = {
    background: isAnimated ? 'linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%)' : 'none',
    backgroundSize: '200% 100%',
    animation: 'bg 1s linear infinite',
  };

  return (
    <AnimationContext.Provider value={{ isAnimated, toggleAnimation, animationStyles }}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationContext;
