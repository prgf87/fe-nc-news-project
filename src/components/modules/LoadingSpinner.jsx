import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

function LoadingSpinner() {
  return (
    <div className="w-full h-[20rem] flex justify-center items-center">
      <AiOutlineLoading size={50} className="animate-spin" />
    </div>
  );
}

export default LoadingSpinner;
