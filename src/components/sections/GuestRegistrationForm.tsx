"use client"

import React from 'react';
import { useFormik } from 'formik';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Link from 'next/link';
import { GuestFormData } from '@/data/projectData';

const MySwal = withReactContent(Swal);

const GuestRegistrationForm: React.FC<{ locale: string }> = ({ locale }) => {
    const content = locale === 'tr' ? GuestFormData.tr : GuestFormData.en;

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

    const handleParticipationTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        formik.setFieldValue('participationType', value);
        const otherLabel = locale === 'tr' ? 'Diğer' : 'Other';
        if (value === otherLabel) {
            window.open('https://www.iucevents.com/international-insurance-summit', '_blank', 'noopener,noreferrer');
        }
    };

    const validationSchema = z.object({
        fullName: z.string().min(1, content.fullNameRequired),
        email: z.string().email(content.emailInvalid).min(1, content.emailRequired),
        phone: z.string().min(1, content.phoneRequired).min(11, content.phoneLength).max(11, content.phoneLength),
        company: z.string().min(1, content.companyRequired),
        title: z.string().min(1, content.titleRequired),
        participationType: z.string().min(1, content.participationTypeRequired),
        kvkkConsent: z.boolean().refine(val => val === true, { message: content.kvkkConsentRequired, path: ['kvkkConsent'] }),
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
        },
        validate: (values) => {
            try {
                validationSchema.parse(values);
            } catch (error) {
                if (error instanceof z.ZodError) {
                    return error.flatten().fieldErrors;
                }
                return { general: content.errorMessageGeneral };
            }
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
              // 1) EmailJS gönder
              const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
              const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
              const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
          
              emailjs.init(publicKey);
              await emailjs.send(serviceId, templateId, values);
          
              // 2) Mailchimp'e abone ekle + tag ver
              await fetch("/api/mailchimp/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  fullName: values.fullName,
                  email: values.email,
                  company: values.company,
                }),
              });
          
              MySwal.fire({
                icon: "success",
                title: content.successTitle,
                text: content.successMessage,
              });
          
              resetForm();
            } catch {
              MySwal.fire({
                icon: "error",
                title: content.errorTitle,
                text: content.errorMessageGeneral,
              });
            } finally {
              setSubmitting(false);
            }
          }
          
    });

    // KVKK metni içindeki bağlantı metnini tespit etmek için
    const kvkkLinkText = locale === 'tr' ? 'KVKK Aydınlatma Metni' : 'KVKK Privacy Notice';
    const kvkkTextParts = content.kvkkConsentText.split(kvkkLinkText);

    return (
        <section
            id="guest-registration-form"
            className="py-12 bg-cover bg-center"
            style={{ backgroundImage: 'url(\'/images/contact_form_bg.png\')' }}
        >
            <div className='max-w-[750px]! container'>
                <div className="bg-white md:py-[70px] py-[30px] md:px-[50px] px-[20px] rounded-[30px] shadow-lg  mx-auto">
                    <h2 className="sm:text-4xl text-3xl font-bold sm:mb-10 mb-5">{content.title}</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[25px] gap-[20px] md:mb-[25px] mb-[20px]">
                            <div>
                                <input
                                    type="text"
                                    placeholder={content.fullNamePlaceholder}
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
                                    placeholder={content.emailPlaceholder}
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
                                    placeholder={content.phonePlaceholder}
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
                                    placeholder={content.companyPlaceholder}
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
                                    placeholder={content.titlePlaceholder}
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
                                { /* Dile göre seçenekler */ }
                                {(() => {
                                    const participationOptions = locale === 'tr'
                                        ? [
                                            'Kamu',
                                            'TSB Üyesi Şirketler',
                                            'Birlikler',
                                            'Bağlı Kuruluşlar',
                                            'Akademisyenler',
                                            'Öğrenciler',
                                            'Diğer',
                                        ]
                                        : [
                                            'Public Sector',
                                            'TSB Member Companies',
                                            'Unions',
                                            'Affiliated Institutions',
                                            'Academics',
                                            'Students',
                                            'Other',
                                        ];
                                    return (
                                        <select
                                            id="participationType"
                                            name="participationType"
                                            className="placeholder:text-black w-full sm:p-[20px] p-[15px] rounded-md bg-[#E3F5F2]/70 text-base font-light  focus:outline-none "
                                            value={formik.values.participationType}
                                            onChange={handleParticipationTypeChange}
                                            onBlur={formik.handleBlur}
                                        >
                                            <option value="" disabled>
                                                {content.participationTypePlaceholder}
                                            </option>
                                            {participationOptions.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    );
                                })()}
                                
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
                                <span className="ml-2 text-gray-700 text-sm">
                                    {kvkkTextParts.length > 1 ? (
                                        <>
                                            {kvkkTextParts[0]}
                                            <Link href={`/${locale}/kvkk`} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                                                {kvkkLinkText}
                                            </Link>
                                            {kvkkTextParts.slice(1).join(kvkkLinkText)}
                                        </>
                                    ) : (
                                        content.kvkkConsentText
                                    )}
                                </span>
                            </label>
                            {formik.touched.kvkkConsent && formik.errors.kvkkConsent ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.kvkkConsent}</div>
                                ) : null}
                        </div>
                        <div className="mb-10">
                            <div className="mt-3  ">
                                <p className="text-xs text-gray-700">**{content.quotaNote}</p>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#01719D] text-white sm:p-[20px] py-[15px]! p-[15px] rounded-md hover:bg-[#01719D]/90 focus:outline-none focus:ring-2 focus:ring-[#01719D] focus:ring-offset-2 text-xl font-bold"
                            disabled={formik.isSubmitting}
                        >
                            {content.sendButton}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default GuestRegistrationForm;