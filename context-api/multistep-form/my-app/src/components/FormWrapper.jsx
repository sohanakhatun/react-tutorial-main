import React, { useContext } from "react";
import ProgressBar from "./ProgressBar";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import PaymentInfo from "./PaymentInfo";
import ShowDetails from "./ShowDetails";
import { FormDataContext } from "../contexts/FormDataContext";

const FormWrapper = () => {
  const { currentStep, formData } = useContext(FormDataContext);

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Multi-Step Form
      </h1>
      {currentStep < 4 && <ProgressBar />}
      <div className="p-4">
        {currentStep === 1 && <PersonalDetails />}
        {currentStep === 2 && <Address />}
        {currentStep === 3 && <PaymentInfo />}
        {currentStep === 4 && <ShowDetails formData={formData} />}
      </div>
    </div>
  );
};

export default FormWrapper;
