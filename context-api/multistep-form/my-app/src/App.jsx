import { useState } from "react";
import { FormDataProvider } from "./contexts/FormDataContext";
import FormWrapper from "./components/FormWrapper";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: { name: "", email: "", phone: "" },
    address: { street: "", city: "", zip: "" },
    paymentInfo: { cardNumber: "", expiry: "", cvv: "" },
  });

  // Function to update specific form section
  const updateFormDetails = (section, newFormData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: {
        ...prevFormData[section], // Keep previous data intact
        ...newFormData, // Merge new data
      },
    }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <>
      <h1 className="text-4xl text-orange-700 text-center font-bold">
        Multi-Step Form
      </h1>
      <FormDataProvider
        value={{
          formData,
          updateFormDetails,
          currentStep,
          nextStep,
          prevStep,
        }}
      >
        <FormWrapper />
      </FormDataProvider>
    </>
  );
}

export default App;
