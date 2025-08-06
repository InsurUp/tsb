import React from 'react'
import { Hero } from './Hero'
import { Article } from './Article'
import SpeakersSection from './SpeakersSection'
import GuestRegistrationForm from './GuestRegistrationForm'
import SponsorsModule from './SponsorsModule'
import FAQSection from './FAQSection';

function MainPageLayout() {
    return (
        <main>
            <Hero />
            <Article />
            <SpeakersSection />
            <GuestRegistrationForm />
            <SponsorsModule />
            <FAQSection />
        </main>
    )
}

export default MainPageLayout   