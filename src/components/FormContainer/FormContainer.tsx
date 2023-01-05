import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./FormContainer.module.scss";

const FormContainer = () => {
  return (
    <div className={styles.FormContainer}>
      <div className={styles.FormSidebar}>
        <Sidebar />
      </div>
      <div className={styles.FormContent}></div>
    </div>
  );
};

export default FormContainer;
