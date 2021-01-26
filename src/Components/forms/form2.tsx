import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Props {
  handleNext: () => void;
}

const form2: React.FC<Props> = ({ handleNext }) => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={() => {
          setTimeout(() => {
            console.log("Form 2 submitted");
            handleNext();
          }, 400);
        }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Required !"),
        })}
      >
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
          <button type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  );
};

export default form2;
