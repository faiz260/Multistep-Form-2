import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Props {
    handleNext: () => void
}

const form1: React.FC<Props> = ({handleNext})  => {
  return (
    <div>
      <Formik
        initialValues={{ firstName: "" }}
        onSubmit={() => {
          setTimeout(() => {
            console.log("Form Submitted");
            handleNext();
          }, 400);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required !"),
        })}
      >
        <Form>
          <Field type="text" name="firstName" />
          <ErrorMessage name="firstName" />
          <button type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  );
}

export default form1;
