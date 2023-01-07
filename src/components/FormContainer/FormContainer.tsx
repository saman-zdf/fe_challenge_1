import FirstStep from "../Form/FirstStep";
import { Formik, Form, FormikHelpers, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./FormContainer.module.scss";
import { Button, TextField } from "@mui/material";

interface Values {
  name: string;
  email: string;
  phoneNumber: string;
}

const FormContainer = () => {
  const [firstStepValues, setFirstStepValues] = useState<Values | null>(null);

  console.log(firstStepValues);

  const getFirstStepFormValues = (values: any) => {
    setFirstStepValues(values);
  };

  const handleNextStep = () => {};

  return (
    <div className={styles.FormContainer}>
      <div className={styles.FormSidebar}>
        <Sidebar />
      </div>
      <div className={styles.FormContent}>
        <FirstStep onFirstStepSuccess={getFirstStepFormValues} />
      </div>
      <div className={styles.FormAction}>
        <Button onClick={handleNextStep}></Button>
      </div>
    </div>
  );
};

export default FormContainer;
