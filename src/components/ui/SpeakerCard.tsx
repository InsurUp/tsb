import React from 'react';
import Image from 'next/image';
import { Speaker } from '@/data/projectData';

interface SpeakerCardProps {
    speaker: Speaker;
    onClick: (speaker: Speaker) => void;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, onClick }) => {
    return (
        <div 
            className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105 w-full md:w-[250px] min-h-[350px]"
            onClick={() => onClick(speaker)}
        >
            <div className="relative text-center flex items-center justify-center w-full min-h-[250px] overflow-hidden mb-1 rounded-tl-[70px] rounded-tr-[70px] rounded-bl-0 rounded-br-0 bg-gradient-to-br from-[#00709E] to-[#27A156]">
                <Image 
                    src={speaker.image}
                    alt={speaker.name}
                    layout="fill"
                    className='object-contain w-full h-full '
                    objectFit="contain"
                />
            </div>
            <h3 className="text-lg font-semibold text-dark text-center mb-1">{speaker.name}</h3>
            <p className="text-base text-dark text-center">{speaker.title}</p>
        </div>
    );
};

export default SpeakerCard;
