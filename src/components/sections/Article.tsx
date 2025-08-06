import { BannerData } from '@/data/projectData'
import React from 'react'

function Article() {
    return (
        <section className='md:py-[100px] py-12 text-center'>
            <div className='container max-w-[850px]!'>
                <div className='flex flex-col items-center justify-center space-y-8'>
                    <h2 className='text-2xl sm:text-3xl md:text-5xl font-semibold max-w-7xl leading-tight'>
                        <span className='text-[#01729C]'>What</span> Awaits You at the 2025 <span className='text-[#01729C]'>International</span> <span className='text-[#27A156]'>Insurance Summit?</span>
                    </h2>
                    <p className='text-base text-[#000]'>

                        The TSB Summit is a premier event dedicated to the insurance industry, bringing together experts, professionals, and key stakeholdThe International Insurance Summit brings together global leaders, experts, and decision-makers who are shaping the future of the insurance industry.
                        <br />
                        <br />
                        This year’s theme, <strong>“Digital Futures: How Technology is Transforming the Insurance Sector,”</strong> will delve into key topics such as artificial intelligence, data analytics, digital transformation, and emerging technologies.
                        <br />
                        <br />
                        The summit will provide a dynamic platform to exchange insights, explore global trends, and foster collaboration on sustainable solutions for the evolving insurance landscape. ers. It serves as a platform to discuss the latest trends, innovations, and challenges in insurance.
                    </p>
                </div>
           </div>
        </section>
    )
}

export { Article }  