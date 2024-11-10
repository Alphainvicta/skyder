import React, { useState } from "react";
import "./quote.css";

import { ReactComponent as Calendar } from "../../icons/Calendar.svg";
import { ReactComponent as Map } from "../../icons/Map.svg";

import QuoteStep1 from "./quote-step-1";

export const Quote = () => {
  const [currentStep, stepFollower] = useState(1);

  const renderStep = (step) => {
    switch (step) {
      case 1:
        return (
          <QuoteStep1 currentStep={currentStep} stepFollower={stepFollower} />
        );
      case 2:
        return <div>The number is Two</div>;
      case 3:
        return <div>The number is Three</div>;
      default:
        return <div>The number is something else!</div>;
    }
  };

  return <form className="quote_cont">{renderStep(currentStep)}</form>;
};

export default Quote;
