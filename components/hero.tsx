'use client'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Button } from './core'
import Link from 'next/link'
import { appLinks } from '@/data'

type Props = {}

const Hero = (props: Props) => {
  const services = [
    { name: 'Trustworthy, reliable mechanics at your fingertips' },
    { name: 'Choose from a variety of repair shops and services that suit your needs' },
    { name: 'Book your service, select a drop-off time, and request an appointment instantly—anytime, anywhere' },
  ]
  return (
    <div className='hero '>
      <div className='flex flex-col md:flex-row items-center overflow-hidden'>
        <div className='layout-hero flex flex-col gap-y-10 lg:flex-row justify-between pt-8'>
          <div className='w-full lg:w-[60%] xl:w-[55%]'>
            <div className='pb-6 xl:px-16 xl:pt-8 !pr-2'>
              <h1 className='text-[34px] md:text-[55px] lg:text-[62px] xl:text-[70px] 2xl:text-[80px] font-bold text-white leading-[1.1] lg:w-[150%]'>Trusted Repair Shops, <br /> Instant Booking. </h1>
              <p className='text-white text-base md:text-lg lg:text:xl xl:text-2xl font-medium mt-8 sm:mt-10 md:mt-12 xl:mt-14'>Frustrated with repair shops that never pick up the phone?</p>
              <ul className='flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-5 md:mt-7 lg:mt-9 max-w-[90%]'>
                {services.map((item, index) => (
                  <li key={index} className='flex gap-2 md:gap-3 xl:gap-4 items-center text-white text-base md:text-lg lg:text:xl xl:text-2xl !leading-none'>
                    <FaCheck className='text-white xl:text-xl min-w-[40px]' />
                    <p className='leading-tight'>
                      {item?.name}
                    </p>
                  </li>
                ))}
              </ul>
              <Button
                buttonText='Book Your Appointment'
                buttonLink='#shops'
                isSecondary
                className='mt-7 md:mt-9 xl:mt-[44px]'
                
              />
            </div>
            <div className='flex gap-3 pb-5 md:pb-6'>
              <Link href={appLinks.android} target='_blank'>
                <Image
                  src='/images/common/playstore-white.svg'
                  width={165}
                  height={48}
                  alt='play store'
                  className='w-auto h-12 hover:scale-[1.03] transition'
                />
              </Link>
              <Link href={appLinks.ios} target='_blank' >
                <Image
                  src='/images/common/appstore-white.svg'
                  width={165}
                  height={48}
                  alt='app store'
                  className='w-auto h-12 hover:scale-[1.03] transition'
                />
              </Link>

            </div>
          </div>

          <div className='w-auto shrink-1 flex justify-center lg:justify-center items-end -translate-x-[10%] md:translate-x-[-7%] lg:translate-x-0 translate-y-1'>
            <Image
              src='/images/hero/ss-1.png'
              alt='Car'
              width={500}
              height={500}
              className='object-cover w-[190px] sm:w-[260px] md:w-[330px] lg:w-[220px] xl:w-[360px] translate-x-[35%] z-[0] rounded-t-[25px] md:rounded-t-[32px] lg:rounded-t-[42px] xl:rounded-t-[50px]'
            />
            <Image
              src='/images/hero/ss-2.png'
              alt='Car'
              width={500}
              height={500}
              className='object-cover w-[200px] sm:w-[270px] md:w-[340px] lg:w-[230px] xl:w-[380px] z-10 rounded-t-[25px] md:rounded-t-[32px] lg:rounded-t-[42px] xl:rounded-t-[50px]'
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export { Hero }

