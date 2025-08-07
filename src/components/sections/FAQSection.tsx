"use client"
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faqData } from '@/data/projectData';

const FAQSection: React.FC = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (
        event: React.SyntheticEvent,
        isExpanded: boolean
    ) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <section className="md:py-[100px] py-[50px] bg-[#E3F5F2]/53">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-10">FAQ</h2>
                <div className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                            className="mb-4 rounded-lg"
                            elevation={0}
                            sx={{
                                backgroundColor: 'transparent',
                                '&.MuiAccordion-root:before': {
                                    display: 'none',
                                },
                                borderBottom: '1px solid rgba(0,0,0,0.2)',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <div
                                        className="w-6 h-6 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: '#00539B' }}
                                    >
                                        <FontAwesomeIcon
                                            icon={expanded === `panel${index}` ? faMinus : faPlus}
                                            style={{ color: 'white' }}
                                        />
                                    </div>
                                }
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                                sx={{ paddingBlock: '15px' }}
                            >
                                <Typography variant="h3" className="font-medium! font-['Inter']! text-[#000]" sx={{ fontSize: '20px' }}>{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='font-["Inter"]!' dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;