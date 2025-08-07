import Image from 'next/image'
import React from 'react'
import { BannerData } from '@/data/projectData' // BannerData'yı import et

function Header() {
    return (
        <header className='sm:py-5 py-3'> {/* py-10 burada test edilecek */}
            <div className="container max-w-[1750px]!">
                <div className="flex items-center justify-between">
                    <Image src={BannerData.tsbLogo} alt="TSB Logo" layout="fill" objectFit="contain" className=" relative! sm:w-[220px]! h-[65px]! w-[120px]!" />
                    <Image src={BannerData.menuLogo} alt="Menu Logo" layout="fill" objectFit="contain" className=" relative! sm:w-[260px]! h-[65px]! w-[140px]!" />
                </div>
            </div>
        </header>
    )
}

export default Header
