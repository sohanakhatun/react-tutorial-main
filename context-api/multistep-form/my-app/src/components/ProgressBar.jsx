import React, { useContext } from "react";
import { FormDataContext } from "../contexts/FormDataContext";

const ProgressBar = () => {
  const { currentStep } = useContext(FormDataContext);
  
  return (
    <div className="flex justify-between items-center mb-6">
    {[1, 2, 3].map((step) => (
      <div
        key={step}
        className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition-all
          ${currentStep >= step ? "bg-blue-500" : "bg-gray-300"}`}
      >
        {step}
      </div>
    ))}
  </div>
  );
};

export default ProgressBar;
