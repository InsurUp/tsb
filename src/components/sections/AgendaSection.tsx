"use client"
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { agendaData, AgendaDay, AgendaItem } from '@/data/projectData';
import { Box } from '@mui/material';

const AgendaSection: React.FC = () => {
    const [expandedDay, setExpandedDay] = React.useState<string | false>('day-panel-0');
    const [expandedItem, setExpandedItem] = React.useState<string | false>('item-panel-0-0');

    const handleDayChange = (panel: string) => (
        event: React.SyntheticEvent,
        isExpanded: boolean
    ) => {
        setExpandedDay(isExpanded ? panel : false);
        setExpandedItem(false); // Close inner accordions when day changes
    };

    const handleItemChange = (panel: string) => (
        event: React.SyntheticEvent,
        isExpanded: boolean
    ) => {
        setExpandedItem(isExpanded ? panel : false);
    };

    return (
        <section className="md:py-12 py-5" >
            <div className="container max-w-[1200px]!">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-10">Agenda</h2>
                <div >
                    {agendaData.map((day: AgendaDay, dayIndex: number) => (
                        <div key={`day-${day.day}`} className="mb-8">
                            {/* Day Accordion */}
                            <Accordion
                                expanded={expandedDay === `day-panel-${dayIndex}`}
                                onChange={handleDayChange(`day-panel-${dayIndex}`)}
                                className="mb-4 rounded-[35px]! sm:py-[25px] py-[20px] bg-[#D0ECFB]/42! text-white"
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
                                            style={{ backgroundColor: 'white' }}
                                        >
                                            <FontAwesomeIcon
                                                icon={expandedDay === `day-panel-${dayIndex}` ? faMinus : faPlus}
                                                style={{ color: '#00539B' }}
                                            />
                                        </div>
                                    }
                                    aria-controls={`day-panel-${dayIndex}-content`}
                                    id={`day-panel-${dayIndex}-header`}
                                    className='relative   md:px-[65px]! px-[20px]!'
                                >
                                   
                                    <Box sx={{
                                        backgroundColor: '#00539B',
                                        color: 'white',
                                        padding: '10px 50px',
                                        borderRadius: '23px',
                                        fontSize: '20px',
                                        fontWeight: 'bold', 
                                        textAlign: 'center',
                                    }}>
                                        {day.title}
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails className='md:px-[65px]! px-[20px]!'>
                                    {day.items.map((item: AgendaItem, itemIndex: number) => (
                                        item.content ? (
                                            <Accordion
                                                key={`item-${dayIndex}-${itemIndex}`}
                                                expanded={expandedItem === `item-panel-${dayIndex}-${itemIndex}`}
                                                onChange={handleItemChange(`item-panel-${dayIndex}-${itemIndex}`)}
                                                className="mb-2 p-0! rounded-lg"
                                                elevation={0}
                                                sx={{
                                                    backgroundColor: '#F0F8FF',
                                                    color: '#00539B',
                                                    '&.MuiAccordion-root:before': {
                                                        display: 'none',
                                                    },
                                                    borderBottom: '1px solid rgb(0, 83, 155,17%)',
                                                }}
                                            >
                                                <AccordionSummary
                                                    expandIcon={
                                                        <div
                                                            className="w-6 h-6 rounded-full flex items-center justify-center"
                                                            style={{ backgroundColor: '#00539B' }}
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={expandedItem === `item-panel-${dayIndex}-${itemIndex}` ? faMinus : faPlus}
                                                                style={{ color: 'white' }}
                                                            />
                                                        </div>
                                                    }
                                                    aria-controls={`item-panel-${dayIndex}-${itemIndex}-content`}
                                                    id={`item-panel-${dayIndex}-${itemIndex}-header`}
                                                    sx={{ 
                                                        paddingInline: '0 !important',
                                                        marginBlock: '0 !important',
                                                        backgroundColor: expandedItem === `item-panel-${dayIndex}-${itemIndex}` ? '' : '#F0F8FF',
                                                        color: expandedItem === `item-panel-${dayIndex}-${itemIndex}` ? 'white' : '#00539B',
                                                    }}
                                                    className='md:py-[28px]! py-[0]!'
                                                >
                                                    <Typography className='flex'>
                                                        <span className="mr-2 text-black text-lg md:mr-[40px]">{item.time}</span>
                                                        {item.href ? (
                                                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-bold text-black sm:text-xl!">{item.title}</a>
                                                        ) : (
                                                            <span className="font-bold text-black sm:text-xl!">{item.title}</span>
                                                        )}
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <div className='speaker-content' dangerouslySetInnerHTML={{ __html: item.content }}></div>
                                                </AccordionDetails>
                                            </Accordion>
                                        ) : (
                                            <Typography key={`item-${dayIndex}-${itemIndex}`} className="font-bold md:py-[40px]! py-[20px]!" sx={{   borderBottom: '1px solid rgb(0, 83, 155,17%)' }}>
                                                <span className="mr-2 text-black text-lg md:mr-[40px]">{item.time}</span>
                                                {item.href ? (
                                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-bold text-black text-xl!">{item.title}</a>
                                                ) : (
                                                    <span className="font-bold text-black text-xl!">{item.title}</span>
                                                )}
                                            </Typography>
                                        )
                                    ))}
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgendaSection;
