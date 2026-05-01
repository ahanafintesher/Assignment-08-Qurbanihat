
"use client";

import Lottie from "lottie-react";
import animationData from "@/assets/animation.json"; 

const Animation = () => {
  return (
    <div className="w-72 h-72">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Animation;