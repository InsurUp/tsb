"use client"

import React from 'react';
import { useFormik } from 'formik';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const GuestRegistrationForm = () => {
    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const filteredValue = value.replace(/[^a-zA-ZğĞİıÖöŞşÜüÇç\s]/g, '');
        formik.setFieldValue(name, filteredValue);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const filteredValue = value.replace(/[^0-9]/g, '');
        formik.setFieldValue(name, filteredValue);
    };

    const handlePhoneFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value === '') {
            formik.setFieldValue('phone', '0');
        }
    };


    const validationSchema = z.object({
        fullName: z.string().min(1, 'Full Name is required'),
        email: z.string().email('Please enter a valid email address').min(1, 'Email is required'),
        phone: z.string().min(1, 'Phone number is required').min(11, 'Phone number must be 11 digits long').max(11, 'Phone number must be 11 digits long'),
        company: z.string().min(1, 'Company name is required'),
        title: z.string().min(1, 'Title is required'),
        participationType: z.string().min(1, 'Participation Type is required'),
        kvkkConsent: z.boolean().refine(val => val === true, { message: 'You must accept the KVKK Privacy Notice', path: ['kvkkConsent'] }),
        commercialMessageConsent: z.boolean().refine(val => val === true, { message: 'You must accept the Commercial Electronic Message Text', path: ['commercialMessageConsent'] }),
    });

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
            company: '',
            title: '',
            participationType: '',
            kvkkConsent: false,
            commercialMessageConsent: false,
        },
        validate: (values) => {
            try {
                validationSchema.parse(values);
            } catch (error) {
                if (error instanceof z.ZodError) {
                    return error.flatten().fieldErrors;
                }
                return { general: 'An unexpected error occurred.' };
            }
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                // Add your EmailJS credentials here or in the .env file
                const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
                const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
                const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

                if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
                    console.error("EmailJS credentials missing. Please check the .env.local file.");
                    MySwal.fire({
                        icon: 'error',
                        title: 'Hata!',
                        text: 'Form gönderilirken bir hata oluştu: EmailJS kimlik bilgileri eksik.',
                    });
                    setSubmitting(false);
                    return;
                }

                emailjs.init(publicKey);

                await emailjs.send(serviceId, templateId, values);

                MySwal.fire({
                    icon: 'success',
                    title: 'Başarılı!',
                    text: 'Form başarıyla gönderildi!',
                });
                resetForm();
            } catch (error) {
                console.error('Email sending error:', error);
                MySwal.fire({
                    icon: 'error',
                    title: 'Hata!',
                    text: 'Form gönderilirken bir hata oluştu.',
                });
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <section
            id="guest-registration-form"
            className="py-12 bg-cover bg-center"
            style={{ backgroundImage: 'url(\'/images/contact_form_bg.png\')' }}
        >
            <div className='max-w-[750px]! container'>
                <div className="bg-white md:py-[70px] py-[30px] md:px-[50px] px-[20px] rounded-[30px] shadow-lg  mx-auto">
                    <h2 className="sm:text-4xl text-3xl font-bold sm:mb-10 mb-5">Free Guest Registration Form</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[25px] gap-[20px] md:mb-[25px] mb-[20px]">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="placeholder:text-black w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-base font-light  focus:outline-none "
                                    id="fullName"
                                    name="fullName"
                                    onChange={handleFullNameChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.fullName}
                                />
                                {formik.touched.fullName && formik.errors.fullName ? (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.fullName}</div>
                                ) : null}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="placeholder:text-black   w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-base font-light  focus:outline-none "
                                    id="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[25px] gap-[20px] md:mb-[25px] mb-[20px]">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="placeholder:text-black w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-base font-light  focus:outline-none "
                                    id="phone"
                                    name="phone"
                                    maxLength={11}
                                    onChange={handlePhoneChange}
                                    onBlur={formik.handleBlur}
                                    onFocus={handlePhoneFocus}
                                    value={formik.values.phone}
                                />
                                {formik.touched.phone && formik.errors.phone ? (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                                ) : null}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="placeholder:text-black w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-base font-light  focus:outline-none "
                                    id="company"
                                    name="company"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.company}
                                />
                                {formik.touched.company && formik.errors.company ? (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.company}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[25px] gap-[20px] mb-[20px]">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    className="placeholder:text-black w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-base font-light  focus:outline-none "
                                    id="title"
                                    name="title"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.title}
                                />
                                {formik.touched.title && formik.errors.title ? (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.title}</div>
                                ) : null}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Participation Type"
                                    className="placeholder:text-black w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-base font-light  focus:outline-none "
                                    id="participationType"
                                    name="participationType"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.participationType}
                                />
                                {formik.touched.participationType && formik.errors.participationType ? (
                                    <div className="text-red-500 text-sm mt-1">{formik.errors.participationType}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded"
                                    id="kvkkConsent"
                                    name="kvkkConsent"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.kvkkConsent}
                                />
                                <span className="ml-2 text-gray-700 text-sm">I have read and accept the KVKK Privacy Notice.</span>
                            </label>
                            {formik.touched.kvkkConsent && formik.errors.kvkkConsent ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.kvkkConsent}</div>
                            ) : null}
                        </div>
                        <div className="mb-10">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded"
                                    id="commercialMessageConsent"
                                    name="commercialMessageConsent"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.commercialMessageConsent}
                                />
                                <span className="ml-2 text-gray-700 text-sm">I have read and agree to the Commercial Electronic Message Text.</span>
                            </label>
                            {formik.touched.commercialMessageConsent && formik.errors.commercialMessageConsent ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.commercialMessageConsent}</div>
                            ) : null}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#01719D] text-white sm:p-[20px] py-[15px]! p-[15px] rounded-md hover:bg-[#01719D]/90 focus:outline-none focus:ring-2 focus:ring-[#01719D] focus:ring-offset-2 text-xl font-bold"
                            disabled={formik.isSubmitting}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default GuestRegistrationForm;