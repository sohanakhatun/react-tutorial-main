import { createContext } from "react";
import { useContext } from "react";

export const FormDataContext = createContext({
  formData: {
    personalDetails: { name: "", email: "", phone: "" },
    address: { street: "", city: "", zip: "" },
    paymentInfo: { cardNumber: "", expiry: "", cvv: "" },
  },
  updateFormDetails: (key, newData) => {},
  currentStep: 1,
  nextStep: () => {},
  prevStep: () => {},
});

export const FormDataProvider = FormDataContext.Provider;

export default function useForm() {
  return useContext(FormDataContext);
}
