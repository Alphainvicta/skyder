import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import QuoteStep1 from "./quote-steps/step-1/quote-step-1";
import QuoteStep2 from "./quote-steps/step-2/quote-step-2";
import QuoteStep3 from "./quote-steps/step-3/quote-step-3";

export const Quote = () => {
  const navigate = useNavigate();
  const [currentStep, stepFollower] = useState(1);
  const [isSuccess, setSuccess] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.axolotelabs.com/skyder/form_mailer.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      if (response.status === 200) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    }
  };

  useEffect(() => {
    if (isSuccess != null) {
      const waitForDelay = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        navigate("/");
        window.scrollTo({
          top: 0,
        });
      };

      waitForDelay();
    }
  }, [isSuccess, navigate]);

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
            isSuccess={isSuccess}
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
