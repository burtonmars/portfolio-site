import React from 'react';
import './contact.scss';

import { useFormik } from 'formik';
import * as Yup from "yup";

const Contact = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Name must be 30 characters or less")
        .required("Name is required"),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      message: Yup.string()
        .max(10000, "Message too long")
        .trim().required("Email body cannot be empty")
    }),
    onSubmit: (values) => {

    }
  });

  return (
    <div className='contact-container background-tint' id="contact">
      <div className="contact-form-container h-screen flex items-center justify-center">
        <form onSubmit={formik.handleSubmit} className='bg-white flex items-center justify-center rounded-lg w-4/5 max-w-screen-lg'>
          <div className='contact-info flex-1 p-10 text-sm leading-8'>
            <p className='font-bold'>Contact Info</p>
            <p>Phone: 604-446-4461</p>
            <p>email: <a href="mailto:marshal.t.burton@gmail.com">marshal.t.burton@gmail.com</a></p>
          </div>
          <div className='dividing-bar border-gray-500'></div>
          <div className='flex-[2_2_0%] text-gray-700 p-20'>
            <h1 className='title text-3xl pb-2 font-bold'>Contact</h1>
            <p className='sub-title text-lg text-gray-500'>send me and email if you want to connect</p>
            <div className='mt-6'>
              {/* name input */}
              <div className='pb-4'>
                <label className={`block font-bold text-sm pb-2 ${formik.touched.name && formik.errors.name ? "text-red-500" : ""}`} 
                  htmlFor="name">
                  {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
                </label>
                <input className='border-2 border-gray-500 p-2 rounded-md w-full' 
                        type="text" 
                        name="name" 
                        placeholder='Enter your name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
              </div>
              {/* email input */}
              <div className='pb-4'>
                <label className={`block font-bold text-sm pb-2 ${formik.touched.email && formik.errors.email ? "text-red-500" : ""}`} htmlFor="email">
                  {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
                </label>
                <input className='border-2 border-gray-500 p-2 rounded-md w-full' 
                        type="email" 
                        name="email" 
                        placeholder='Enter your email address'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
              </div>
              {/* message input */}
              <div className='pb-4'>
                <label className={`block font-bold text-sm pb-2 ${formik.touched.message && formik.errors.message ? "text-red-500" : ""}`} htmlFor="message">
                  {formik.touched.message && formik.errors.message ? formik.errors.message : "Message"}
                </label>
                <textarea className='border-2 border-gray-500 p-2 rounded-md w-full' 
                        type="message" 
                        name="message" 
                        placeholder='Enter your email body' 
                        value={formik.values.message}
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        />
              </div>
            </div>
            <div className="button-container w-full flex justify-center items-center">
              <button type='submit' className='send-button text-md'>Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Contact;