"use client";

import React, { useState, useEffect } from "react";
import { speakers, Speaker } from "@/data/projectData";
import SpeakerCard from "@/components/ui/SpeakerCard";
import { Modal, Box, Typography, Backdrop, styled } from "@mui/material";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";

/**
 * Gün ayracı – mavi etiket ve iki yanda ince çizgi
 * bg: #00539B, text: #fff, font-size: 10px, bold
 * çizgi: rgba(0,83,155,0.17)
 */
const DayDivider: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="flex items-center w-full my-10">
      <div className="flex-grow h-px bg-[rgba(0,83,155,0.17)]" />
      <span className="bg-[#00539B] text-white font-bold text-[10px] px-5 py-3 rounded-full mx-2">
        {label}
      </span>
      <div className="flex-grow h-px bg-[rgba(0,83,155,0.17)]" />
    </div>
  );
};

const SPEAKERS_PER_ROW_MOBILE = 2;
const INITIAL_ROWS_MOBILE = 3;
const INITIAL_DISPLAY_COUNT_MOBILE = INITIAL_ROWS_MOBILE * SPEAKERS_PER_ROW_MOBILE;

const SpeakersSection: React.FC<{ locale: string }> = ({ locale }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [openModal, setOpenModal] = useState(false);

  // Her gün için ayrı sayacı tut
  const [displayCountDay1, setDisplayCountDay1] = useState(INITIAL_DISPLAY_COUNT_MOBILE);
  const [displayCountDay2, setDisplayCountDay2] = useState(INITIAL_DISPLAY_COUNT_MOBILE);

  // Günlere göre filtre
  const day1 = speakers.filter((s) => s.day === 1);
  const day2 = speakers.filter((s) => s.day === 2);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setDisplayCountDay1(Math.min(INITIAL_DISPLAY_COUNT_MOBILE, day1.length));
      setDisplayCountDay2(Math.min(INITIAL_DISPLAY_COUNT_MOBILE, day2.length));
    } else {
      setDisplayCountDay1(day1.length);
      setDisplayCountDay2(day2.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, speakers.length]);

  const handleShowMoreDay1 = () => setDisplayCountDay1(day1.length);
  const handleShowMoreDay2 = () => setDisplayCountDay2(day2.length);

  const handleCardClick = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedSpeaker(null);
  };

  const StyledBackdrop = styled(Backdrop)`
    background: radial-gradient(circle, rgba(11, 169, 213, 1) 30%, rgba(18, 172, 124, 1) 30%);
    max-width: 750px;
    max-height: 750px;
    border-radius: 50%;
    filter: blur(200px);
    margin: auto;
  `;

  const gridCls =
    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-x-[80px] gap-x-[20px] sm:gap-y-[30px] gap-y-[10px] justify-items-center";

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Arkaplan şekilleri (varsa) */}
      <Image
        src="/images/module_shape.png"
        alt="Speakers Background"
        className="md:block hidden absolute top-0 left-[50%] -translate-x-1/2"
        width={1450}
        height={1250}
        objectFit="cover"
      />
      <Image
        src="/images/module_shape.png"
        alt="Speakers Background"
        className="md:block hidden absolute bottom-0 left-[50%] -translate-x-1/2"
        width={1450}
        height={1250}
        objectFit="cover"
      />

      <div className="container max-w-[900px]! mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-10">
          {locale === "tr" ? "Konuşmacılar" : "Speakers"}
        </h2>

        {/* 1. Gün */}
        {day1.length > 0 && (
          <div className="mb-12">
            <DayDivider label={locale === "tr" ? "1. GÜN" : "DAY 1"} />
            <div className={gridCls}>
              {(isMobile ? day1.slice(0, displayCountDay1) : day1).map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} onClick={handleCardClick} locale={locale} />
              ))}
            </div>
            {isMobile && displayCountDay1 < day1.length && (
              <div className="text-center mt-6">
                <button onClick={handleShowMoreDay1} className="text-dark font-bold text-lg cursor-pointer">
                  {locale === "tr" ? "Devamını Gör" : "Show More"}
                  <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. Gün */}
        {day2.length > 0 && (
          <div>
            <DayDivider label={locale === "tr" ? "2. GÜN" : "DAY 2"} />
            <div className={gridCls}>
              {(isMobile ? day2.slice(0, displayCountDay2) : day2).map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} onClick={handleCardClick} locale={locale} />
              ))}
            </div>
            {isMobile && displayCountDay2 < day2.length && (
              <div className="text-center mt-6">
                <button onClick={handleShowMoreDay2} className="text-dark font-bold text-lg cursor-pointer">
                  {locale === "tr" ? "Devamını Gör" : "Show More"}
                  <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Modal */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="speaker-details-title"
          aria-describedby="speaker-details-description"
          BackdropComponent={StyledBackdrop}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: 400, md: 550 },
              bgcolor: "background.paper",
              p: "40px",
              borderRadius: "30px",
              outline: "none",
              textAlign: "center",
            }}
          >
            {selectedSpeaker && (
              <>
                <div
                  className="absolute top-[30px] right-[30px] w-5 h-5 p-1 rounded-full flex items-center justify-center cursor-pointer"
                  style={{ backgroundColor: "#00539B" }}
                  onClick={handleCloseModal}
                >
                  <FontAwesomeIcon icon={faTimes} style={{ color: "#fff" }} />
                </div>

                <div className="relative w-[200px] mx-auto min-h-[250px] overflow-hidden mb-4 rounded-tl-[70px] rounded-tr-[70px] rounded-bl-0 rounded-br-0 bg-gradient-to-br from-[#00709E] to-[#27A156]">
                  <Image src={selectedSpeaker.image} alt={selectedSpeaker.name} layout="fill" objectFit="cover" />
                </div>

                <Typography id="speaker-details-title" component="p" className="font-semibold! text-base!">
                  {selectedSpeaker.name}
                </Typography>
                <Typography id="speaker-details-description" sx={{ mt: 1 }} className="text-[#000] text-sm!">
                  {selectedSpeaker.title[locale as keyof typeof selectedSpeaker.title]}
                </Typography>
                <Typography sx={{ mt: 2 }} className="text-[#000] text-xs! font-light!">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedSpeaker.bio[locale as keyof typeof selectedSpeaker.bio],
                    }}
                  />
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
