import { ReactElement, useState } from "react";

const useMultiStepForm = (formSteps: ReactElement[]) => {
  const [idx, setIdx] = useState<number>(0);

  const handleNextStep = () => {
    setIdx((prev: number) => {
      if (prev >= formSteps.length - 1) return prev;

      return prev + 1;
    });
  };

  const handleStepBack = () => {
    setIdx((prev: number) => {
      if (prev <= 0) return prev;

      return prev - 1;
    });
  };

  const handleGoTo = (i: number) => {
    setIdx(i);
  };

  return {
    idx,
    formSteps,
    formStep: formSteps[idx],
    isOnInitialStep: idx === 0,
    isOnLastStep: idx === formSteps.length - 1,
    handleNextStep,
    handleStepBack,
    handleGoTo,
  };
};

export default useMultiStepForm;
