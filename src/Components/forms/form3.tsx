import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Props {
  handleNext: () => void;
}

const form3: React.FC<Props> = ({ handleNext }) => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={() => {
          setTimeout(() => {
            console.log("Form 3 submitted");
            handleNext();
          }, 400);
        }}
        validationSchema={Yup.object({
          email: Yup.string().required("Required !"),
        })}
      >
        <Form>
          <Field type="text" name="email" />
          <ErrorMessage name="email" />
          <button type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  );
};

export default form3;