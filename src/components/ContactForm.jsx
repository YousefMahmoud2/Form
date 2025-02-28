import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
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
    <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] w-[60%] p-9">
      <h2 className="mb-5 text-2xl font-bold">Contact Us</h2>

      <form onSubmit={formik.handleSubmit} className="flex flex-col w-full">
        <div className="mb-[15px] flex flex-col">
          <label className="font-bold mb-1.5" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-none outline-none rounded-2xl p-2.5 bg-[#ccc] shadow-[inset_2px_5px_10px_rgba(0,0,0,0.3)] 
              duration-300	ease-in-out focus:bg-white focus:scale-105 focus:shadow-[10px_10px_100px_#969696,-10px_-10px_100px_#ffffff]"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && <p className="text-red-600 text-[12px] mt-1.5">{formik.errors.name}</p>}
        </div>

        <div className="mb-[15px] flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-none outline-none rounded-2xl p-2.5 bg-[#ccc] shadow-[inset_2px_5px_10px_rgba(0,0,0,0.3)] duration-300	ease-in-out focus:bg-white focus:scale-105 focus:shadow-[10px_10px_100px_#969696,-10px_-10px_100px_#ffffff]"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && <p className="text-red-600 text-[12px] mt-1.5">{formik.errors.email}</p>}
        </div>

        <div className="mb-[15px] flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="border-none outline-none rounded-2xl p-2.5 bg-[#ccc] shadow-[inset_2px_5px_10px_rgba(0,0,0,0.3)] duration-300	ease-in-out focus:bg-white focus:scale-105 focus:shadow-[10px_10px_100px_#969696,-10px_-10px_100px_#ffffff] h-24"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && <p className="text-red-600 text-[12px] mt-1.5">{formik.errors.message}</p>}
        </div>

        <button className="relative px-5 py-2.5 rounded-[7px] border border-[rgb(61,106,255)] border-solid text-[16px] uppercase font-bold tracking-widest	bg-transparent text-black overflow-hidden shadow-none transition-all duration-200 ease-in 
          hover:bg-[rgb(33,199,69)] hover:shadow-[0_0_30px_5px_rgba(46,192,41,0.815)] hover:transition-all hover:duration-200 hover:ease-out hover:text-white
          " type="submit" disabled={isSubmitting} >
          {isSubmitting ? <div className="spin"></div> : "Submit"}
        </button>
      </form>

      {isSuccess && formData && <Modal data={formData} onClose={() => setIsSuccess(false)} />}
    </div>
  );
};

export default ContactForm;
