"use client"
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faqData } from '@/data/projectData';

const FAQSection: React.FC<{ locale: string }> = ({ locale }) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (
        panel: string
    ) => (
        event: React.SyntheticEvent,
        isExpanded: boolean
    ) => {
        setExpanded(isExpanded ? panel : false);
    };

    const currentFaqData = locale === 'tr' ? faqData.tr : faqData.en;

    return (
        <section className="md:py-12 py-5 bg-[#D0ECFB]/42 md:pb-[100px] pb-[50px]" id="faq-section">
            <div className="container max-w-[900px]! mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-10">{locale === 'tr' ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions"}</h2>
                <div className="faq-accordion">
                    {currentFaqData.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                            className="mb-4 rounded-[35px]! sm:py-[10px] py-[10px] bg-[#fff]! text-white"
                            elevation={0}
                            sx={{
                                '&.MuiAccordion-root:before': {
                                    display: 'none',
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: '#00539B' }}
                                    >
                                        <FontAwesomeIcon
                                            icon={expanded === `panel${index}` ? faMinus : faPlus}
                                            style={{ color: 'white' }}
                                        />
                                    </div>
                                }
                                aria-controls={`panel${index}bh-content`}
                                id={`panel${index}bh-header`}
                                className='relative   md:px-[65px]! px-[20px]!'
                            >
                                <Typography sx={{
                                    color: '#00539B',
                                    fontSize: '20px',
                                    margin: '0 !important',
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                }}>{faq.question[locale as keyof typeof faq.question]}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='md:px-[65px]! px-[20px]!'>
                                <div style={{ color: '#000', fontSize: '16px' }} dangerouslySetInnerHTML={{ __html: faq.answer[locale as keyof typeof faq.answer] }}></div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;