import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "../styles/ContactForm.module.css";
import Modal from "./Modal";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState(null); 

  const validationSchema = yup.object().shape({
    name: yup.string().min(3, "Min length is 3").max(15, "Max length is 15").required("Name is required"),
    email: yup.string().trim().email("Invalid email address").required("Email is required."),
    message: yup.string().trim().required("Message is required."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);
      setTimeout(() => {
        setFormData(values);
        setIsSuccess(true);
        resetForm();
        setIsSubmitting(false);
      }, 1500);
    },
  });

  return (
    <div > 
    <div className={styles.container}>
      <h2 className={styles.title}>Contact Us</h2>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className="{styles.inputGroup}">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.input}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && <p className={styles.error}>{formik.errors.name}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={styles.input}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && <p className={styles.error}>{formik.errors.email}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className={styles.textarea}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && <p className={styles.error}>{formik.errors.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} >
          {isSubmitting ? <div className={styles.loader}></div> : "Submit"}
        </button>
      </form>

      {isSuccess && formData && <Modal data={formData} onClose={() => setIsSuccess(false)} />}
    </div>
    </div>
  );
};

export default ContactForm;
