import React, { useState } from "react";

import QuoteStep1 from "./quote-steps/step-1/quote-step-1";
import QuoteStep2 from "./quote-steps/step-2/quote-step-2";
import QuoteStep3 from "./quote-steps/step-3/quote-step-3";

export const Quote = () => {
  const [currentStep, stepFollower] = useState(1);

  // State to store all form data
  const [formData, setFormData] = useState({
    serviceList: "",
    qualityOutput: "",
    videoLenght: "15 segundos",
    date: "",
    location: "",
    name: "",
    email: "",
    extraDetails: "",
  });

  // Function to handle input changes
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Function to handle form submission
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
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        );
      case 3:
        return (
          <QuoteStep3
            currentStep={currentStep}
            stepFollower={stepFollower}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
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

  return <form>{renderStep(currentStep)}</form>;
};

export default Quote;
