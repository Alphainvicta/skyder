import React, { useState } from "react";

import QuoteStep1 from "./quote-steps/step-1/quote-step-1";
import QuoteStep2 from "./quote-steps/step-2/quote-step-2";
import QuoteStep3 from "./quote-steps/step-3/quote-step-3";

export const Quote = () => {
  const [currentStep, stepFollower] = useState(1);

  const renderStep = (step) => {
    switch (step) {
      case 1:
        return (
          <QuoteStep1 currentStep={currentStep} stepFollower={stepFollower} />
        );
      case 2:
        return (
          <QuoteStep2 currentStep={currentStep} stepFollower={stepFollower} />
        );
      case 3:
        return (
          <QuoteStep3 currentStep={currentStep} stepFollower={stepFollower} />
        );
    }
  };

  return <form>{renderStep(currentStep)}</form>;
};

export default Quote;
