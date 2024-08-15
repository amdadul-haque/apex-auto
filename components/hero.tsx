'use client'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Button } from './core'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  const services = [
    { name: 'Expert Auto Repair Services' },
    { name: 'Book Your Appointment Online' },
    { name: 'Multiple Convenient Locations' },
  ]
  return (
    <div className='hero '>
      <div className='flex flex-col md:flex-row items-center overflow-hidden'>
        <div className='layout-hero flex flex-col gap-y-10 md:flex-row justify-between pt-16'>
          <div className=''>
            <div className='pb-6 md:p-10 lg:p-12 xl:p-16 max-w-[663px]'>
              <h1 className='text-[54px] md:text-[70px] lg:text-[90px] xl:text-[90px] 2xl:[100px] font-bold text-white !leading-none'>Expert Mechanics</h1>
              <p className='text-white text-base md:text-lg lg:text:xl xl:text-2xl font-medium mt-8 sm:mt-10 md:mt-12 xl:mt-14'>Frustrated with repair shops that never pick up the phone?</p>
              <ul className='flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-5 md:mt-7 lg:mt-9'>
                {services.map((item, index) => (
                  <li key={index} className='flex gap-2 md:gap-3 xl:gap-4 items-center text-white text-base md:text-lg lg:text:xl xl:text-2xl !leading-none font-medium'>
                    <FaCheck className='text-white xl:text-2xl' />
                    {item?.name}
                  </li>
                ))}
              </ul>
              <Button
                buttonText='Book Your Appointment'
                isSecondary
                handleOnlick={() => console.log('Button clicked')}
                className='mt-7 md:mt-9 xl:mt-[44px]'
              />
            </div>
            <div className='flex gap-3 pb-5 md:pb-6'>
              <Link href="#" passHref>
                <Image
                  src='/images/hero/paly-store-white.svg'
                  height={48}
                  width={132}
                  alt='play store'
                  className='w-auto h-12'
                />
              </Link>
              <Link href="#" passHref >
                <Image
                  src='/images/hero/app-store-white.svg'
                  height={48}
                  width={165}
                  alt='app store'
                  className='w-auto h-12'
                />
              </Link>

            </div>
          </div>

          <div className='w-full md:w-auto relative flex justify-center items-end -translate-x-[10%] md:translate-x-0 translate-y-1'>
            <Image
              src='/images/hero/ss-1.png'
              alt='Car'
              width={500}
              height={500}
              className='object-cover translate-x-[35%] z-[0] rounded-t-[25px] md:rounded-t-[32px] lg:rounded-t-[42px] xl:rounded-t-[50px]'
            />
            <Image
              src='/images/hero/ss-2.png'
              alt='Car'
              width={500}
              height={500}
              className='object-cover z-10 rounded-t-[25px] md:rounded-t-[32px] lg:rounded-t-[42px] xl:rounded-t-[50px]'
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export { Hero }