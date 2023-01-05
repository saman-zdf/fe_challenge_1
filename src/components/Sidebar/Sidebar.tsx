import React from "react";
import styles from "./Sidebar.module.scss";

interface Steps {
  id: number;
  stepTitle: string;
  step: string;
}

const Sidebar = () => {
  const STEPS: Steps[] = [
    {
      id: 1,
      stepTitle: "Your info",
      step: "Step-1",
    },
    {
      id: 2,
      stepTitle: "Select plan",
      step: "Step-2",
    },
    {
      id: 3,
      stepTitle: "Add-ons",
      step: "Step-3",
    },
    {
      id: 4,
      stepTitle: "Summary",
      step: "Step-4",
    },
  ];

  return (
    <div className={styles.SidebarContainer}>
      {STEPS.map((step: Steps) => (
        <div key={step.id} className={styles.SidebarSteps__container}>
          <div className={styles.SidebarSteps__Wrapper}>
            <div className={styles.StepNumberWrapper}>
              <span className={styles.SidebarSteps__stepNumber}>{step.id}</span>
            </div>
            <div className={styles.SidebarSteps__textContent}>
              <p className={styles.StepsSubText}>{step.step}</p>
              <p className={styles.StepsText}>{step.stepTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
