import { BannerData } from '@/data/projectData'
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <section className='relative w-full py-10 sm:min-h-screen overflow-hidden flex items-center justify-center text-center text-white'>
            <Image
                src={BannerData.bgImage}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 z-0"
            />

            <div className='relative z-20 container max-w-[1750px] sm:py-10'>
                <div className='flex flex-col items-center justify-center space-y-8'>
                    <div className='flex flex-col items-center mb-4'>
                        <Image src={BannerData.summitLogo} alt="4th International Insurance Summit Logo" width={600} height={242} className='mb-5 w-full h-auto max-w-[600px]' />
                    </div>
                    <h1 className='text-2xl sm:text-3xl md:text-5xl font-extrabold max-w-7xl leading-tight'>
                        {BannerData.title}
                    </h1>
                    <button className='mb-0 bg-white/30 text-white font-semibold py-5 px-10 sm:px-18 rounded-[20px] text-2xl sm:text-4xl flex items-center justify-center'>
                        {BannerData.buttonText}
                    </button>

                    <div className='flex max-w-[600px] w-full justify-between mx-auto mt-8  px-12 py-5 rounded-[30px] bg-white'>
                        <div className='flex flex-col items-center'>
                            <span className='md:text-[50px] text-[30px] text-[#06074E] font-semibold'>{BannerData.countdownWeeks}</span>
                            <span className='text-base text-[#482F2F]/40 font-semibold  tracking-wider'>Week</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='md:text-[50px] text-[30px] text-[#06074E] font-semibold'>{BannerData.countdownDays}</span>
                            <span className='text-base text-[#482F2F]/40 font-semibold  tracking-wider'>Day</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='md:text-[50px] text-[30px] text-[#06074E] font-semibold'>{BannerData.countdownHours}</span>
                            <span className='text-base text-[#482F2F]/40 font-semibold  tracking-wider'>Hour</span>
                        </div>
                    </div>

                    <div className='text-lg sm:mt-8'>
                        <p className='text-[30px] text-[#60C1FF] font-semibold  tracking-wider'>{BannerData.eventStartDate}</p>
                        <p className='text-2xl text-[#fff] font-semibold  tracking-wider'>{BannerData.eventLocation}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Hero }