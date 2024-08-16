import { socials } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type Props = {}

const Footer = (props: Props) => {



  return (
    <footer className='bg-primary pt-16 md:pt-20 lg:pt-24 xl:pt-[120px] text-white'>
      <div className='layout'>
        <div className='pb-9 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24'>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-y-10 gap-x-8'>
            <div>
              <Link href='/' passHref>
                <Image src='/images/logo-white.svg' width={223} height={66} alt='Apex Autos' className='w-auto xl:w-[223px]' />
              </Link>
              <p className='text-white text-sm md:text-base mt-5 md:mt-6 xl:mt-8 max-w-[500px] lg:max-w-[630px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.</p>
            </div>
            <div>
              <div className='flex justify-start md:justify-end items-center gap-3 md:gap-4'>
                {socials.map((item, index) => (
                  <Link key={index} href={item.link} passHref>
                    <span className='bg-white/10 border border-white/10 rounded-full text-white text-base md:text-lg flex justify-center items-center w-10 md:w-12 aspect-square hover:bg-white/30 hover:border-white/50 transition duration-300'>{item?.icon}</span>
                  </Link>
                ))}
              </div>
              <div className='flex items-center gap-4 mt-5 md:mt-6 xl:mt-8'>
                <Link href='https://'>
                  <Image
                    src='/images/common/appstore-white.svg'
                    alt='location'
                    width={243}
                    height={70}
                    className='w-auto h-[40px] md:h-auto xl:h-[70px]'
                  />
                </Link>
                <Link href='https://'>
                  <Image
                    src='/images/common/playstore-white.svg'
                    alt='playstore'
                    width={243}
                    height={70}
                    className='w-auto h-[40px] md:h-auto xl:h-[70px]'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[1px] w-full bg-white/10'>
        </div>
        <div className='py-4 md:py-5 xl:py-6'>
          <p className='text-sm md:text-base text-white leading-normal text-center'>Copyright © {new Date().getFullYear()} Apex Autos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }