import React, { useState, useEffect } from "react";
import useForm from "../contexts/FormDataContext";

const PaymentInfo = () => {
  const { prevStep, updateFormDetails, formData, nextStep } =
    useForm();

  // Extract existing payment data from context
  const paymentInfo = formData.paymentInfo || { cardNumber: "", expiry: "", cvv: "" };

  // Local state for form inputs
  const [cardNumber, setCardNumber] = useState(paymentInfo.cardNumber || "");
  const [expiry, setExpiry] = useState(paymentInfo.expiry || "");
  const [cvv, setCVV] = useState(paymentInfo.cvv || "");

  // Sync state with context when paymentInfo changes
  useEffect(() => {
    setCardNumber(paymentInfo.cardNumber || "");
    setExpiry(paymentInfo.expiry || "");
    setCVV(paymentInfo.cvv || "");
  }, [paymentInfo]);

  // Form submit handler
  const paymentInfoSubmitHandler = (e) => {
    e.preventDefault();
    updateFormDetails("paymentInfo", { cardNumber, expiry, cvv });
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Payment Information</h2>
      <form onSubmit={paymentInfoSubmitHandler}>
        <div>
          <input
            type="text"
            placeholder="Card Number"
            className="input-field"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            className="input-field"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="CVV"
            className="input-field"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentInfo;
