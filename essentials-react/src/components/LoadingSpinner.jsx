import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 flex items-center justify-center z-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="text-center text-white relative z-10">
        {/* Company Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl mb-4">
            <span className="text-white font-bold text-3xl">E3</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Essentials 3PL
          </h1>
          <p className="text-blue-200 text-sm mt-2">Owned by Hassan Nasir LLC</p>
        </div>
        
        {/* Loading Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-blue-100 text-lg font-medium">Loading your logistics solution...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;