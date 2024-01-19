"use client"
import React, { useState } from 'react';


// Define the RippleButton component
function RippleButton({ text, buttonClasses, onClick, type, icon, isLoading }) {
  // State to manage ripples
  const [ripples, setRipples] = useState([]);

  // Function to add a ripple
  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rippleContainer.width, rippleContainer.height);
    const x = event.clientX - rippleContainer.left - size / 2;
    const y = event.clientY - rippleContainer.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(), // Generate a unique ID for each ripple
    };
    setRipples((prevRipples) => prevRipples.concat(newRipple));

    if (onClick) {
      onClick(event);
    }
  };

  // Function to handle ripple animation end
  const handleAnimationEnd = (id) => {
    setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.id !== id));
  };

  // Determine the button type (default is "button")
  const buttonType = type || 'button';


  // Render the RippleButton component
  return (
    <div className="relative">
      <button
        type={buttonType}
        className={`relative overflow-hidden  h-12 text-skin-inverted ${buttonClasses}`}
        onClick={addRipple}
      >
        {/* Render the icon if it exists in the props */}
        {icon && !isLoading &&(
          <div className="icon-container">{icon}</div>
        )}
        {!isLoading ? text :
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
          </div>}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-slate-100 opacity-70"
            style={{
              left: ripple.x + 'px',
              top: ripple.y + 'px',
              width: ripple.size + 'px',
              height: ripple.size + 'px',
              transform: 'scale(0)',
              animation: 'ripple 600ms linear',
            }}
            onAnimationEnd={() => handleAnimationEnd(ripple.id)}
          ></span>
        ))}
      </button>
    </div>
  );
}

// Export the RippleButton component
export default RippleButton;