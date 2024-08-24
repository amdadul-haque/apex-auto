import React from 'react'
import { FaCheck } from 'react-icons/fa'

type Props = {}

const AboutUs = (props: Props) => {
  const services = [
    { title: "Handpicked Mechanics: ", description: "We vet and select only the best mechanics, ensuring your vehicle is in expert hands." },
    { title: "Convenience at Your Fingertips: ", description: "Book services, choose drop-off times, and track progress—all through our easy-to-use app." },
    { title: "24/7 Assistance: ", description: "Car troubles don’t follow a 9-to-5 schedule, and neither do we. Get the help you need, anytime, anywhere." },
  ]
  return (
    <div id='about' className='about py-16 md:py-24 lg:py-32'>
      <div className='layout flex items-center'>
        <div className='w-full md:w-1/2 md:pr-8 xl:pr-20 flex flex-col gap-6 md:gap-8 xl:gap-10'>
          <h4 className='uppercase text-base font-medium text-white'>About us -</h4>
          <h2 className='section-heading !text-left text-white'>Our commitment to an effortless auto repair experience</h2>
          
          <ul className='flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6'>
            {services.map((item, index) => (
              <li key={index} className='flex gap-2 md:gap-3 items-center text-white text-base md:text-lg lg:text:xl xl:text-[22px] !leading-tight'>
                <FaCheck className='text-white text-sm md:text-base xl:text-xll min-w-8' />
                <p className='font-normal'>
                  <span className='font-bold'>{item?.title}</span>{item?.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export { AboutUs }