import React from 'react';
import Image from 'next/image';
import { Speaker } from '@/data/projectData';

interface SpeakerCardProps {
    speaker: Speaker;
    onClick: (speaker: Speaker) => void;
    locale: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, onClick, locale }) => {
    const displayedTitle = speaker.title[locale as keyof typeof speaker.title];

    return (
        <div 
            className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105 w-full md:w-[250px] min-h-[350px] group"
            onClick={() => onClick(speaker)}
        >
            <div className="relative text-center flex items-center justify-center w-full min-h-[250px] overflow-hidden mb-1 rounded-tl-[70px] rounded-tr-[70px] rounded-bl-0 rounded-br-0 bg-gradient-to-br from-[#00709E] to-[#27A156]">
                <Image 
                    src={speaker.image}
                    alt={speaker.name}
                    layout="fill"
                    className='object-contain object-bottom w-full h-full'  
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#057696]/0 to-[#022630]/100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="rounded-full border-2 border-white p-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                </div>
            </div>
            <h3 className="text-lg font-semibold text-dark text-center mb-1">{speaker.name}</h3>
            <p className="text-base text-dark text-center line-clamp-2">{displayedTitle}</p>
        </div>
    );
};

export default SpeakerCard;
