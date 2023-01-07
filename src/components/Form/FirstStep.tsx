import React, { FC, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import styles from "./Form.module.scss";
import { Button } from "@mui/material";

interface Values {
  name: string;
  email: string;
  phoneNumber: string;
}

interface FirstStepProps {
  onFirstStepSuccess: (date: Values) => void;
}

const FirstStep: FC<FirstStepProps> = ({ onFirstStepSuccess }) => {
  const [initialValues] = useState<Values>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const formValidationSchema = Yup.object({
    name: Yup.string().required("Name is required, please add your name."),
    email: Yup.string()
      .email()
      .required("Email is required, please add your email address."),
    phoneNumber: Yup.string().required(
      "Phone number is required, please add your phone number"
    ),
  });

  const handleSubmitFirstStep = (values: Values) => {
    onFirstStepSuccess(values);
  };

  return (
    <>
      <div className={styles.FirstStepContainer}>
        <Formik
          onSubmit={handleSubmitFirstStep}
          initialValues={initialValues}
          validationSchema={formValidationSchema}
        >
          {({ errors, touched, isSubmitting }) => (
            <div>
              <div className={styles.FirstStepHeader}>
                <h2 className={styles.FirstStep__title}>Personal info</h2>
                <p className={styles.FirstStep__subtitle}>
                  Please provide your name, email address and phone number.
                </p>
              </div>
              <Form className={styles.FormFieldWrapper}>
                <Field
                  as={TextField}
                  label='Name'
                  type='text'
                  name='name'
                  variant='outlined'
                  margin='dense'
                  helperText={<ErrorMessage name='name' />}
                  error={errors.name && touched.name}
                  className={styles.Input}
                />
                <Field
                  as={TextField}
                  label='Email Address'
                  type='text'
                  name='email'
                  variant='outlined'
                  margin='dense'
                  helperText={<ErrorMessage name='email' />}
                  error={errors.email && touched.email}
                  className={styles.Input}
                />
                <Field
                  as={TextField}
                  label='Phone Number'
                  type='text'
                  name='phoneNumber'
                  variant='outlined'
                  margin='dense'
                  helperText={<ErrorMessage name='phoneNumber' />}
                  error={errors.phoneNumber && touched.phoneNumber}
                  className={styles.Input}
                />
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FirstStep;
