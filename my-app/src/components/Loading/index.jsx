import React from 'react';

const Loader = ({ size = 'md'}) => {
  const dimensions = {
    sm: 'h-5 w-5 border-2',
    md: 'h-10 w-10 border-[3px]',
    lg: 'h-16 w-16 border-4',
  };


  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`
          ${dimensions[size]} 
          border-t-red-500
          rounded-full 
          animate-spin
        `}
        style={{ animationDuration: '0.8s', animationTimingFunction: 'cubic-bezier(0.5, 0, 0.5, 1)' }}
      />
    </div>
  );
};

export default Loader;