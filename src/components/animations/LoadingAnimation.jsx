"use client";

import Lottie from "lottie-react";
import animationData from "@/assets/loading.json";

const LoadingAnimation = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Lottie animationData={animationData} loop={true} className="w-64 h-64" />
     
    </div>
  );
};

export default LoadingAnimation;