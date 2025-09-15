"use client"
import React, { useState, useEffect } from 'react';
import { speakers, Speaker } from '@/data/projectData';
import SpeakerCard from '@/components/ui/SpeakerCard';
import { Modal, Box, Typography, Backdrop, styled } from '@mui/material';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

const SPEAKERS_PER_ROW_MOBILE = 2;
const INITIAL_ROWS_MOBILE = 3;
const INITIAL_DISPLAY_COUNT_MOBILE = INITIAL_ROWS_MOBILE * SPEAKERS_PER_ROW_MOBILE;

const SpeakersSection: React.FC<{ locale: string }> = ({ locale }) => {
    const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT_MOBILE);
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
    const [openModal, setOpenModal] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile) {
          setDisplayCount(speakers.length);
        } else {
          setDisplayCount(INITIAL_DISPLAY_COUNT_MOBILE);
        }
      }, [isMobile]);

    const handleShowMore = () => {
        setDisplayCount(speakers.length);
    };

    const handleCardClick = (speaker: Speaker) => {
        setSelectedSpeaker(speaker);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedSpeaker(null);
    };

    const StyledBackdrop = styled(Backdrop)` 
    background: radial-gradient(circle,rgba(11, 169, 213, 1) 30%, rgba(18, 172, 124, 1)30%);
    max-width: 750px;
    max-height: 750px;
    border-radius: 50%;
    filter: blur(200px);
    margin: auto;       
    `;

    const speakersToDisplay = isMobile ? speakers.slice(0, displayCount) : speakers;

    return (
        <section className="py-12 relative overflow-hidden">
            <Image src="/images/module_shape.png" alt="Speakers Background" className='md:block hidden absolute top-0 left-[50%] -translate-x-1/2' width={1450} height={1250} objectFit="cover" />
            <Image src="/images/module_shape.png" alt="Speakers Background" className='md:block hidden absolute bottom-0 left-[50%] -translate-x-1/2' width={1450} height={1250} objectFit="cover" />
            <div className="container max-w-[900px]! mx-auto px-4 relative">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-10">{locale === 'tr' ? "Konuşmacılar" : "Speakers"}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-x-[80px] gap-x-[20px] sm:gap-y-[30px] gap-y-[10px] justify-items-center">
                    {speakersToDisplay.map((speaker) => (
                        <SpeakerCard key={speaker.id} speaker={speaker} onClick={handleCardClick} locale={locale} />
                    ))}
                </div>
                {isMobile && displayCount < speakers.length && (
                    <div className="text-center mt-10">
                        <button
                            onClick={handleShowMore}
                            className="text-dark font-bold text-lg cursor-pointer"
                        >
                            {locale === 'tr' ? "Devamını Gör" : "Show More"}
                            <FontAwesomeIcon className='ml-2' icon={faChevronDown} />
                        </button>
                    </div>
                )}

                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="speaker-details-title"
                    aria-describedby="speaker-details-description"
                    BackdropComponent={StyledBackdrop}
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: 400, md: 550 },
                        bgcolor: 'background.paper',
                        p: "40px",
                        borderRadius: "30px",
                        outline: 'none',
                        textAlign: 'center',
                    }}>
                        {selectedSpeaker && (
                            <>
                                <div
                                    className="absolute top-[30px] right-[30px] w-5 h-5 p-1 rounded-full flex items-center justify-center cursor-pointer"
                                    style={{ backgroundColor: '#00539B' }}
                                    onClick={handleCloseModal}
                                >
                                    <FontAwesomeIcon icon={faTimes} style={{ color: '#fff' }} />
                                </div>
                                <div className="relative w-[200px] mx-auto min-h-[250px] overflow-hidden mb-4 rounded-tl-[70px] rounded-tr-[70px] rounded-bl-0 rounded-br-0 bg-gradient-to-br from-[#00709E] to-[#27A156]">
                                    <Image
                                        src={selectedSpeaker.image}
                                        alt={selectedSpeaker.name}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <Typography id="speaker-details-title" component="p" className="font-semibold! text-base!">
                                    {selectedSpeaker.name}
                                </Typography>
                                <Typography id="speaker-details-description" sx={{ mt: 1 }} className="text-[#000] text-sm!">
                                    {selectedSpeaker.title[locale as keyof typeof selectedSpeaker.title]}
                                </Typography>
                                <Typography sx={{ mt: 2 }} className="text-[#000] text-xs! font-light!">
                                    <div dangerouslySetInnerHTML={{ __html: selectedSpeaker.bio[locale as keyof typeof selectedSpeaker.bio] }} />
                                </Typography>
                            </>
                        )}
                    </Box>
                </Modal>
            </div>
        </section>
    );
};

export default SpeakersSection;