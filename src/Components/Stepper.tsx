import { Stepper, Step, StepLabel } from "@material-ui/core";
import React, { useState } from "react";
import Form1 from "./forms/form1";
import Form2 from "./forms/form2";
import Form3 from "./forms/form3";

const getStep = () => {
  return ["step 1 out of 3", "step 2 out of 3", "step 3 out of 3"];
};

const getContent = (Step: number, handleNext: () => void) => {
  switch (Step) {
    case 0: {
      return <Form1 handleNext={handleNext} />;
    }
    case 1: {
      return <Form2 handleNext={handleNext} />;
    }
    case 2: {
      return <Form3 handleNext={handleNext} />;
    }
  }
};

export default function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);
  const Steplabel = getStep();
  const handleNext = () => {
    console.log("Next");
    setActiveStep((step) => step + 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {Steplabel.map((label) => {
          <Step key={label}>
            <StepLabel>{Steplabel}</StepLabel>
          </Step>;
        })}
      </Stepper>
      {getContent(activeStep, handleNext)}
    </div>
  );
}
