'use client'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Button } from './core'
import Link from 'next/link'

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
        <div className='layout-hero flex flex-col gap-y-10 md:flex-row justify-between pt-16'>
          <div className='w-full md:w-[55%]'>
            <div className='pb-6 md:p-10 lg:p-12 xl:p-16 !pr-2'>
              {/* <h1 className='text-[64px] font-bold text-white !leading-none'>Trusted Repair Shops, Instant Booking. </h1> */}
              <h1 className='text-[34px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold text-white !leading-none'>Trusted Repair Shops, <br /> Instant Booking. </h1>
              <p className='text-white text-base md:text-lg lg:text:xl xl:text-2xl font-medium mt-8 sm:mt-10 md:mt-12 xl:mt-14'>Frustrated with repair shops that never pick up the phone?</p>
              <ul className='flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-5 md:mt-7 lg:mt-9 max-w-[90%]'>
                {services.map((item, index) => (
                  <li key={index} className='flex gap-2 md:gap-3 xl:gap-4 items-center text-white text-base md:text-lg lg:text:xl xl:text-2xl !leading-none font-medium'>
                    <FaCheck className='text-white xl:text-2xl min-w-[40px]' />
                    <p className='leading-tight'>
                      {item?.name}
                    </p>
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
              <Link href="#">
                <Image
                  src='/images/common/playstore-white.svg'
                  width={165}
                  height={48}
                  alt='play store'
                  className='w-auto h-12'
                />
              </Link>
              <Link href="#"  >
                <Image
                  src='/images/common/appstore-white.svg'
                  width={165}
                  height={48}
                  alt='app store'
                  className='w-auto h-12'
                />
              </Link>

            </div>
          </div>

          {/* <div className='bg-red-500 flex items-end'>
            <Image
              src='/images/final-2.png'
              alt='Car'
              width={500}
              height={760}
              className='w-full h-[1200px] aspect-[2878/3104]'
            />
          </div> */}

          <div className='w-auto bg-green-500 relative shrink-1 flex justify-center items-end -translate-x-[10%] md:translate-x-0 translate-y-1'>
            <Image
              src='/images/hero/ss-1.png'
              alt='Car'
              width={500}
              height={500}
              className='object-cover absolute bottom-0 right-0 max-w-[360px] translate-x-[-70%] z-[0] rounded-t-[25px] md:rounded-t-[32px] lg:rounded-t-[42px] xl:rounded-t-[50px]'
            />
            <Image
              src='/images/hero/ss-2.png'
              alt='Car'
              width={500}
              height={500}
              className='object-cover max-w-[380px] absolute right-0 bottom-0 z-10 rounded-t-[25px] md:rounded-t-[32px] lg:rounded-t-[42px] xl:rounded-t-[50px]'
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export { Hero }