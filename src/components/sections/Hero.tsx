"use client"
import { BannerData } from '@/data/projectData'
import Image from 'next/image'
import React from 'react'
import { useCountdown } from '@/hooks/useCountdown'

function Hero() {
    const [weeks, days, hours] = useCountdown(BannerData.eventTargetDate);

 

    return (
        <section className='relative w-full py-10 sm:min-h-[calc(100vh-100px)] overflow-hidden flex items-center justify-center text-center text-white'>
            <Image
                src={BannerData.bgImage}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 z-0"
            />

            <div className='relative z-20 container max-w-[1750px]!  '>
                <div className='flex flex-col items-center justify-center space-y-8'>
                    <div className='flex flex-col items-center mb-4'>
                        <Image src={BannerData.summitLogo} alt="4th International Insurance Summit Logo" width={500} height={242} className='mb-5 w-full h-auto max-w-[500px]!' />
                    </div>
                    <h1 className='text-2xl sm:text-3xl md:text-5xl font-extrabold max-w-7xl leading-tight'>
                        {BannerData.title}
                    </h1>
                    <button className='mb-0 bg-white/30 text-white font-semibold py-5 px-10 sm:px-18 rounded-[20px] text-2xl sm:text-4xl flex items-center justify-center'>
                        {BannerData.buttonText}
                    </button>

                    <div className='flex max-w-[500px] w-full justify-between mx-auto mt-8  px-12 py-5 rounded-[30px] bg-white'>
                        <div className='flex flex-col items-center'>
                            <span className='md:text-[50px] text-[30px] text-[#06074E] font-semibold leading-none'>{weeks}</span>
                            <span className='text-base text-[#482F2F]/40 font-semibold  tracking-wider'>Hafta</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='md:text-[50px] text-[30px] text-[#06074E] font-semibold leading-none'>{days}</span>
                            <span className='text-base text-[#482F2F]/40 font-semibold  tracking-wider'>Gün</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='md:text-[50px] text-[30px] text-[#06074E] font-semibold leading-none'>{hours}</span>
                            <span className='text-base text-[#482F2F]/40 font-semibold  tracking-wider'>Saat</span>
                        </div>
                    </div>

                    <div className='text-lg '>
                        <p className='text-[30px] text-[#60C1FF] font-semibold  tracking-wider'>{BannerData.eventStartDate}</p>
                        <p className='text-2xl text-[#fff] font-semibold  tracking-wider'>{BannerData.eventLocation}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Hero }