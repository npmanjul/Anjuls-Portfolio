import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-yellow-300/30 rounded-full animate-spin border-t-yellow-300" />

        {/* Inner Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-yellow-300/20 rounded-full animate-spin border-t-yellow-300 animate-[spin_1.5s_linear_infinite]" />

        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-300 rounded-full animate-pulse" />

        {/* Loading Text */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-yellow-300 font-medium tracking-wider text-lg">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loader;
