"use client"
import React, { useState, useEffect } from 'react';
import { speakers, Speaker } from '@/data/projectData';
import SpeakerCard from '@/components/ui/SpeakerCard';
import { Modal, Box, Typography, Backdrop, styled } from '@mui/material';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SPEAKERS_PER_ROW_MOBILE = 2;
const INITIAL_ROWS_MOBILE = 3; // İlk 3 sıra, yani 3 * 2 = 6 kart
const INITIAL_DISPLAY_COUNT_MOBILE = INITIAL_ROWS_MOBILE * SPEAKERS_PER_ROW_MOBILE;

const SpeakersSection: React.FC = () => {
    const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT_MOBILE);
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
    const [openModal, setOpenModal] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // State to track mobile view

    useEffect(() => {
        const checkMobile = () => {
            // Tailwind's md breakpoint is 768px
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile(); // Initial check
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Adjust displayCount when isMobile changes
    useEffect(() => {
        if (!isMobile) {
            setDisplayCount(speakers.length); // Show all on desktop
        } else {
            setDisplayCount(INITIAL_DISPLAY_COUNT_MOBILE); // Reset to initial on mobile
        }
    }, [isMobile, speakers.length]); // speakers.length'i bağımlılık olarak ekle

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
        <section className="py-12 bg-gray-50">
            <div className="container max-w-[850px]! mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Speakers</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
                    {speakersToDisplay.map((speaker) => (
                        <SpeakerCard key={speaker.id} speaker={speaker} onClick={handleCardClick} />
                    ))}
                </div>
                {isMobile && displayCount < speakers.length && (
                    <div className="text-center mt-10">
                        <button
                            onClick={handleShowMore}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300"
                        >
                            Devamını Gör
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
                                    {selectedSpeaker.title}
                                </Typography>
                                <Typography sx={{ mt: 2 }} className="text-[#000] text-xs! font-light!">
                                    {selectedSpeaker.bio}
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