import React from "react";

const ShowDetails = ({ formData }) => {
  if (!formData) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4 text-blue-600">
        Here are your details!
      </h2>

      <div className="space-y-4">
        {/* Personal Details */}
        <div className="border-b pb-2">
          <h3 className="text-lg font-semibold text-gray-700">
            Personal Details
          </h3>
          <p className="text-gray-600">
            <strong>Name:</strong> {formData.personalDetails?.name || "N/A"}
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {formData.personalDetails?.email || "N/A"}
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> {formData.personalDetails?.phone || "N/A"}
          </p>
        </div>

        {/* Address */}
        <div className="border-b pb-2">
          <h3 className="text-lg font-semibold text-gray-700">Address</h3>
          <p className="text-gray-600">
            <strong>Street:</strong> {formData.address?.street || "N/A"}
          </p>
          <p className="text-gray-600">
            <strong>City:</strong> {formData.address?.city || "N/A"}
          </p>
          <p className="text-gray-600">
            <strong>ZIP Code:</strong> {formData.address?.zip || "N/A"}
          </p>
        </div>

        {/* Payment Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Payment Info</h3>
          <p className="text-gray-600">
            <strong>Card Number:</strong> **** **** ****{" "}
            {formData.paymentInfo?.cardNumber?.slice(-4) || "N/A"}
          </p>
          <p className="text-gray-600">
            <strong>Expiry:</strong> {formData.paymentInfo?.expiry || "N/A"}
          </p>
          <p className="text-gray-600">
            <strong>CVV:</strong> ***
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
