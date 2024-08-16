import React from 'react'
import { FaCheck } from 'react-icons/fa'

type Props = {}

const AboutUs = (props: Props) => {
  const services = [
    {title: "Handpicked Mechanics:", description: "We vet and select only the best mechanics, ensuring your vehicle is in expert hands."},
    {title: "Convenience at Your Fingertips:", description: "Book services, choose drop-off times, and track progress—all through our easy-to-use app."},
    {title: "24/7 Assistance: ", description: "Car troubles don’t follow a 9-to-5 schedule, and neither do we. Get the help you need, anytime, anywhere."},
  ]
  return (
    <div id='about' className='about py-16 md:py-24 lg:py-32 xl:py-40 2xl:py-44'>
      <div className='layout flex items-center'>
        <div className='w-full md:w-1/2 md:pr-8 xl:pr-20 flex flex-col gap-6 md:gap-8 xl:gap-10'>
          <h4 className='uppercase text-base font-medium text-white'>About us -</h4>
          <h2 className='section-heading !text-left text-white'>Our commitment to an effortless auto repair experience</h2>
          <p className='text-base leading-snug text-white'>At Apex Auto, we believe in revolutionizing the way car owners connect with repair shops and mechanics. Our mission is to provide a seamless, trustworthy, and efficient experience for every car owner. Whether you need a routine service or emergency repairs, Apex Auto is here to make sure you find the best service with just a few taps.</p>
          <ul className='flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6'>
            {services.map((item, index) => (
              <p key={index} className='flex gap-2 md:gap-3 items-center text-white text-base md:text-lg lg:text:xl xl:text-2xl !leading-none  whit'>
                <FaCheck className='text-white xl:text-2xl' />
                {/* <span className='inline font-bold'>{item?.title}</span> 
                <span className='inline'>{item?.description}</span> */}

                {item?.title} {item?.description}

              </p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export { AboutUs }