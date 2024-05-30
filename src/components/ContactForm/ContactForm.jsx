import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 - To short!")
    .max(50, "Max 50 - To long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Min 3 - To short!")
    .max(50, "Max 50 - To long!")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{ id: nanoid(), name: "", number: "" }}
      onSubmit={(values, actions) => {
        addContact(values);
        actions.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          type="text"
          name="name"
          id={nameFieldId}
          className={css.myInput}
        />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field
          type="phone"
          name="number"
          id={numberFieldId}
          className={css.myInput}
        />
        <ErrorMessage name="number" component="span" />

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
