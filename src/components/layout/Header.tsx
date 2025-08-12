"use client"
import Image from 'next/image'
import React from 'react'
import { BannerData } from '@/data/projectData' // BannerData'yı import et
import Link from 'next/link'
import { useParams } from 'next/navigation'


function Header() {
    const params = useParams();
    const locale = params.locale as string;
    // const router = useRouter();
    // const pathname = usePathname();

    // const changeLanguage = (lang: string) => {
    //     const newPathname = `/${lang}${pathname.startsWith(`/${locale}`) ? pathname.substring(`/${locale}`.length) : pathname}`;
    //     router.push(newPathname);
    // };
    return (
        <header className='sm:py-5 py-3'> {/* py-10 burada test edilecek */}
            <div className="container max-w-[1750px]!">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image src={locale === 'tr' ? BannerData.tr.tsbLogo : BannerData.en.tsbLogo} alt="TSB Logo" layout="fill" objectFit="contain" className=" relative! sm:w-[220px]! h-[65px]! w-[120px]!" />
                    </Link>
                    <div className="flex items-center gap-4">

                        <Image src={locale === 'tr' ? BannerData.tr.menuLogo : BannerData.en.menuLogo} alt="Menu Logo" layout="fill" objectFit="contain" className=" relative! sm:w-[260px]! h-[65px]! w-[140px]!" />
                        {/* <nav className="flex items-center gap-2 text-sm font-medium">
                            <button
                                type="button"
                                onClick={() => changeLanguage('en')}
                                className={`${locale === 'en' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'} uppercase`}
                                aria-current={locale === 'en' ? 'true' : undefined}
                            >
                                EN
                            </button>

                            <span className="text-gray-300">/</span>
                            <button
                                type="button"
                                onClick={() => changeLanguage('tr')}
                                className={`${locale === 'tr' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'} uppercase`}
                                aria-current={locale === 'tr' ? 'true' : undefined}
                            >
                                TR
                            </button>
                        </nav> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
