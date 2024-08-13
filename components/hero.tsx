'use client'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='hero flex items-center'>
      <div className='layout flex justify-between'>
        <div className='max-w-[563px]'>
          <h1 className='text-[100px] font-bold text-white leading-none'>Expert Mechanics</h1>
          <p className='text-white'>Frustrated with repair shops that never pick up the phone?</p>
          <ul>
            <li className='flex gap-2 items-center text-white'><FaCheck className='text-white' /> Expert Auto Repair Services</li>
            <li className='flex gap-2 items-center text-white'><FaCheck className='text-white' /> Book Your Appointment Online</li>
            <li className='flex gap-2 items-center text-white'><FaCheck className='text-white' /> Multiple Convenient Locations</li>
          </ul>
        </div>
        <div className='border flex'>
          <div>
            <Image
              src='/images/hero/ss-1.png'
              alt='Car'
              width={500}
              height={500}
              className='object-cover'
            />
          </div>
          <div>
            <Image
              src='/images/hero/ss-2.png'
              alt='Car'
              width={500}
              height={500}
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }