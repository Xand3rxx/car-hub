import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/constants'

const Footer = () => {
    const year = new Date().getFullYear() as number;
    
  return (
    <footer className='flex flex-col mt-5 border border-t text-black-100-gray-100'>
        <div className='flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16'>
            <div className='flex flex-col items-start justify-start gap-6'>
            <Image src='/logo.svg' alt='Car Hub logo' width={118} height={18} className='object-contain' />
            <p className='text-base text-gray-700'>CarHub {year} <br /> All rights reserved &copy;</p>
            </div>

            <div className='footer__links'>
                {footerLinks.map((link) => (
                    <div key={link.title} className='footer__link'>
                        <h3 className='font-bold'>{link.title}</h3>
                        {link.links.map((item) => (
                            <Link key={item.title} href={item.url} className='text-gray-500'>{item.title}</Link>
                        ))}
                    </div>
                ))}
            </div>
            </div>

            <div className='flex flex-wrap items-center justify-between px-6 py-10 mt-10 border-t border-gray-100 sm:px-16'>
                <p>&copy;{year} CarHub. All rights reserved.</p>
                <div className='footer__copyrights-link'>
                    <Link href='/' className='text-gray-500'>Privacy Policy</Link>
                    <Link href='/' className='text-gray-500'>Terms of Use</Link>
                </div>
            </div>
    </footer>
  )
}

export default Footer