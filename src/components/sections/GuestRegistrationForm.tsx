"use client"

import React from 'react';
import { useFormik } from 'formik';
import * as z from 'zod';
import emailjs from '@emailjs/browser';

const GuestRegistrationForm = () => {
    const validationSchema = z.object({
        fullName: z.string().min(1, 'Ad Soyad zorunludur'),
        email: z.string().email('Geçerli bir e-posta adresi girin').min(1, ' E-posta zorunludur'),
        phone: z.string().min(1, 'Telefon numarası zorunludur'),
        company: z.string().min(1, 'Şirket adı zorunludur'),
        title: z.string().min(1, 'Unvan zorunludur'),
        participationType: z.string().min(1, 'Katılım Türü zorunludur'),
        kvkkConsent: z.boolean().refine(val => val === true, { message: 'KVKK Gizlilik Bildirimini kabul etmelisiniz', path: ['kvkkConsent'] }),
        commercialMessageConsent: z.boolean().refine(val => val === true, { message: 'Ticari Elektronik İleti Metnini kabul etmelisiniz', path: ['commercialMessageConsent'] }),
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
            } catch (error: any) {
                if (error instanceof z.ZodError) {
                    return error.flatten().fieldErrors;
                }
                return { general: 'An unexpected error occurred.' };
            }
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                // EmailJS kimlik bilgilerinizi buraya veya .env dosyasına ekleyin
                const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
                const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
                const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

                if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
                    console.error("EmailJS kimlik bilgileri eksik. Lütfen .env.local dosyasını kontrol edin.");
                    alert("Form gönderilirken bir hata oluştu: EmailJS kimlik bilgileri eksik.");
                    setSubmitting(false);
                    return;
                }

                emailjs.init(publicKey);

                await emailjs.send(serviceId, templateId, values);

                alert('Form başarıyla gönderildi!');
                resetForm();
            } catch (error) {
                console.error('Email gönderme hatası:', error);
                alert('Form gönderilirken bir hata oluştu.');
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <section
            className="py-12 bg-cover bg-center"
            style={{ backgroundImage: 'url(\'/images/contact_form_bg.png\')' }}
        >
            <div className='max-w-[750px]! container'>
                <div className="bg-white md:py-[70px] py-[30px] md:px-[50px] px-[20px] rounded-[30px] shadow-lg  mx-auto">
                    <h2 className="sm:text-4xl text-3xl font-bold sm:mb-10 mb-5">Free Guest Registration Form</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-[20px] md:mb-[40px] mb-[20px]">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-lg font-light  focus:outline-none "
                                    id="fullName"
                                    name="fullName"
                                    onChange={formik.handleChange}
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
                                    className="w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-lg font-light  focus:outline-none "
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
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-[20px] md:mb-[40px] mb-[20px]">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-lg font-light  focus:outline-none "
                                    id="phone"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
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
                                    className="w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-lg font-light  focus:outline-none "
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
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[40px] gap-[20px] mb-[20px]">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    className="w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-lg font-light  focus:outline-none "
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
                                    className="w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-lg font-light  focus:outline-none "
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
                        <div className="mb-6">
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