import React, { useState, useEffect } from "react";
import useForm from "../contexts/FormDataContext";

const Address = () => {
  const { nextStep, prevStep, updateFormDetails, formData } =
    useForm();

  // Extract existing address data from context
  const address = formData.address || { street: "", city: "", zip: "" };

  // Local state for form inputs
  const [street, setStreet] = useState(address.street || "");
  const [city, setCity] = useState(address.city || "");
  const [zip, setZip] = useState(address.zip || "");

  // Sync state with context when address changes
  useEffect(() => {
    setStreet(address.street || "");
    setCity(address.city || "");
    setZip(address.zip || "");
  }, [address]);

  // Form submit handler
  const addressSubmitHandler = (e) => {
    e.preventDefault();
    updateFormDetails("address", { street, city, zip });
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Address</h2>
      <form onSubmit={addressSubmitHandler}>
        <div>
          <input
            type="text"
            placeholder="Street Address"
            className="input-field"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="City"
            className="input-field"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="ZIP Code"
            className="input-field"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={prevStep}
            className="button bg-gray-500 p-2 text-white rounded-md"
          >
            Go Back
          </button>
          <button
            type="submit"
            className="button bg-indigo-700 p-2 text-white rounded-md"
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
