import React from 'react'
import { FaCheck } from 'react-icons/fa'

type Props = {}

const AboutUs = (props: Props) => {
  const services = [
    { name: 'Experienced Team' },
    { name: 'You get 24/7 assistance' },
    { name: 'Top-Quality Materials' },
  ]
  return (
    <div className='about py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-44'>
      <div className='layout flex items-center'>
        <div className='w-full md:w-1/2 md:pr-8 xl:pr-20 flex flex-col gap-6 md:gap-8 xl:gap-10'>
          <h4 className='uppercase text-base font-medium text-white'>About us -</h4>
          <h2 className='section-heading !text-left text-white'>Our Commitment <br /> to Excellence</h2>
          <p className='text-base leading-snug text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <ul className='flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6'>
            {services.map((item, index) => (
              <li key={index} className='flex gap-2 md:gap-3 items-center text-white text-base md:text-lg lg:text:xl xl:text-2xl !leading-none font-medium'>
                <FaCheck className='text-white xl:text-2xl' />
                {item?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export { AboutUs }