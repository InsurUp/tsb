"use client"
import React from 'react'
import { Hero } from './Hero'
import { Article } from './Article'
import SpeakersSection from './SpeakersSection'
import GuestRegistrationForm from './GuestRegistrationForm'
import SponsorsModule from './SponsorsModule'
import FAQSection from './FAQSection';
import AgendaSection from './AgendaSection';
import { useParams } from 'next/navigation';

function MainPageLayout() {
    const params = useParams();
    const locale = params.locale as string;
    console.log(locale);
    return (
        <main>
            <Hero locale={locale} />
            <Article locale={locale} />
            <AgendaSection locale={locale} />
            <SpeakersSection locale={locale} />
            <GuestRegistrationForm locale={locale} />
            <SponsorsModule locale={locale} />
            <FAQSection locale={locale} />
        </main>
    )
}

export default MainPageLayout   