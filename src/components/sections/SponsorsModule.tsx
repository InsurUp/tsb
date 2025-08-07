import React from 'react';
import Image from 'next/image';
import { sponsorData } from '../../data/projectData';

const SponsorsModule = () => {
  return (
    <section className="md:py-[110px] sm:py-[70px] py-[30px]">
      <div className="container max-w-[600px]! mx-auto px-4">
        {sponsorData.map((categoryData, index) => (
          <div key={index} className="md:mb-10 mb-5 md:pb-10 pb-5 border-b border-solid border-gray-300 last:mb-0 last:pb-0 last:border-b-0">
            <h2 className="md:text-5xl text-4xl font-bold text-center mb-8">{categoryData.category}</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {categoryData.sponsors.map((sponsor, sponsorIndex) => (
                <div key={sponsorIndex} className="relative flex justify-center items-center sm:p-4 ">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={sponsor.width}
                    height={sponsor.height}
                    objectFit="contain"
                    className='w-full h-full'
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsModule;