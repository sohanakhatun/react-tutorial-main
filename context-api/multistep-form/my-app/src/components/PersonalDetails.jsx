import React, { useState, useEffect } from "react";
import useForm from "../contexts/FormDataContext";

const PersonalDetails = () => {
  const { nextStep, updateFormDetails, formData } = useForm();

  // Extract existing personal details from context
  const personalDetails = formData.personalDetails || {
    name: "",
    email: "",
    phone: "",
  };

  // Local state for form inputs
  const [name, setName] = useState(personalDetails.name || "");
  const [email, setEmail] = useState(personalDetails.email || "");
  const [phoneNumber, setPhoneNumber] = useState(personalDetails.phone || "");

  // Sync state with context when personalDetails changes
  useEffect(() => {
    setName(personalDetails.name || "");
    setEmail(personalDetails.email || "");
    setPhoneNumber(personalDetails.phone || "");
  }, [personalDetails]);

  // Form submit handler
  const personalDetailsFormSubmitHandler = (e) => {
    e.preventDefault();
    updateFormDetails("personalDetails", { name, email, phone: phoneNumber });
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Personal Details</h2>
      <form onSubmit={personalDetailsFormSubmitHandler}>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="input-field"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="button bg-indigo-700 p-2 text-white mt-4 text-center rounded-md"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
