import Image from 'next/image'
import React from 'react'
import { BannerData } from '@/data/projectData' // BannerData'yı import et

function Header() {
    return (
        <header className='py-4'> {/* py-10 burada test edilecek */}
            <div className="container max-w-[1750px]!">
                <div className="flex items-center justify-between">
                    <Image src={BannerData.tsbLogo} alt="TSB Logo" width={225} height={65} />
                    <Image src={BannerData.menuLogo} alt="Menu Logo" width={260} height={65} />
                </div>
            </div>
        </header>
    )
}

export default Header
