import React, { useState, useCallback } from "react";

import QuoteStep1 from "./quote-steps/step-1/quote-step-1";
import QuoteStep2 from "./quote-steps/step-2/quote-step-2";
import QuoteStep3 from "./quote-steps/step-3/quote-step-3";

export const Quote = () => {
  const [currentStep, stepFollower] = useState(1);

  const [formData, setFormData] = useState({
    finalServiceList: "",
    serviceList: {
      servicio1: false,
      servicio2: false,
      servicio3: false,
      servicio4: false,
      servicio5: false,
      servicio6: false,
      servicio7: false,
    },
    qualityOutput: "",
    videoLenght: "15",
    videoLengthInput: "",
    finaldate: "",
    date: "",
    finalLocation: "",
    marker: "",
    name: "",
    email: "",
    extraDetails: "",
  });

  const handleInputChange = useCallback((field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const renderStep = (step) => {
    switch (step) {
      case 1:
        return (
          <QuoteStep1
            currentStep={currentStep}
            stepFollower={stepFollower}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <QuoteStep2
            currentStep={currentStep}
            stepFollower={stepFollower}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <QuoteStep3
            currentStep={currentStep}
            stepFollower={stepFollower}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );

      default:
        return (
          <QuoteStep1
            currentStep={currentStep}
            stepFollower={stepFollower}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
    }
  };

  return (
    <form id="skyderForm" onSubmit={handleSubmit}>
      {renderStep(currentStep)}
    </form>
  );
};

export default Quote;
