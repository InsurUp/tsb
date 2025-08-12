import React from 'react'
import { ArticleData } from '@/data/projectData';

function Article({ locale }: { locale: string }) {
    const content = locale === 'tr' ? ArticleData.tr : ArticleData.en;
    return (
        <section className='md:py-[100px] py-12 text-center'>
            <div className='container max-w-[850px]!'>
                <div className='flex flex-col items-center justify-center space-y-8'>
                    <h2 className='text-2xl sm:text-3xl md:text-5xl font-semibold max-w-7xl leading-tight'>
                        <span className='text-[#01729C]'>{content.titlePart1}</span> {content.titlePart2} <span className='text-[#27A156]'>{content.titlePart3}</span>
                    </h2>
                    <p className='text-base text-[#000]'>
                        {content.paragraph1}           </p>
                    <div dangerouslySetInnerHTML={{ __html: content.paragraph2 }} />
                </div>
            </div>
        </section>
    )
}

export { Article }  