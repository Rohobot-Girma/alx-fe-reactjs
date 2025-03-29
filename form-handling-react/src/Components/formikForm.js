import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react"; // Required since React is used indirectly

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function FormikForm() {
  return React.createElement(
    Formik,
    {
      initialValues: { username: "", email: "", password: "" },
      validationSchema: validationSchema,
      onSubmit: (values, { resetForm }) => {
        console.log("Form submitted:", values);
        resetForm();
      },
    },
    ({ isSubmitting }) =>
      React.createElement(
        Form,
        null,
        React.createElement("div", null,
          React.createElement("label", null, "Username:"),
          React.createElement(Field, { type: "text", name: "username" }),
          React.createElement(ErrorMessage, { name: "username", component: "span" })
        ),
        React.createElement("div", null,
          React.createElement("label", null, "Email:"),
          React.createElement(Field, { type: "email", name: "email" }),
          React.createElement(ErrorMessage, { name: "email", component: "span" })
        ),
        React.createElement("div", null,
          React.createElement("label", null, "Password:"),
          React.createElement(Field, { type: "password", name: "password" }),
          React.createElement(ErrorMessage, { name: "password", component: "span" })
        ),
        React.createElement(
          "button",
          { type: "submit", disabled: isSubmitting },
          "Register"
        )
      )
  );
}

export default FormikForm;
