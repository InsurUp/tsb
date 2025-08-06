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
        <section className="py-12" style={{ backgroundColor: '#E3F5F2' }}>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Sıkça Sorulan Sorular</h2>
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
                                        className="w-8 h-8 rounded-full flex items-center justify-center"
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
                                <Typography variant="h3" className="font-semibold text-gray-700" sx={{ fontSize: '20px', fontWeight: 'medium' }}>{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="text-gray-600">
                                    {item.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;