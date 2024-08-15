'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './core'
import { FaCheck } from 'react-icons/fa'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

type Props = {}

const RestyleShop = (props: Props) => {

  const benefits = [
    {
      id: 1,
      name: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here."
    },
    {
      id: 2,
      name: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here."
    },
    {
      id: 3,
      name: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here."
    },
    {
      id: 4,
      name: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here."
    },
    {
      id: 5,
      name: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using content here."
    },
  ]

  const tabOptions = [
    {
      title: "Book appointments",
      image: "/images/restyle/1.png",
    },
    {
      title: "Message mechanics",
      image: "/images/restyle/2.png",
    },
    {
      title: "Request estimates",
      image: "/images/restyle/3.png",
    },
    {
      title: "Track your vehicle",
      image: "/images/restyle/4.png",
    },
    {
      title: "Track vehicle service history",
      image: "/images/restyle/5.png",
    },
  ]

  const [currentTabItem, setCurrentTabItem] = useState<{ title: string, image: string }>(tabOptions[0])
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <div className='bg-white py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-[120px]'>
      <div className='layout flex flex-col gap-8 md:gap-12 lg:gap-14 xl:gap-[60px]'>
        <div>
          <h2 className='section-heading text-black-1'>
            Find Your Nearest <br /> Automotive Restyling Shop
          </h2>
        </div>
        <div className='flex flex-col gap-5 md:gap-6 lg:gap-8 xl:gap-10'>
          <div className='w-full mx-auto flex gap-2 xl:justify-center items-center overflow-x-auto pb-3'>
            {tabOptions.map((item, index) => (
              <button key={index}
                className={`px-4 py-3 xl:px-[30px] xl:py-5 border border-gray-400 rounded-full text-sm md:text-base font-medium transition whitespace-nowrap ${currentTabItem.title == item.title ? 'bg-primary text-white' : 'bg-transparent'}`}
                onClick={() => { setCurrentTabItem(item) }}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className='flex flex-col-reverse md:flex-row gap-y-10 md:justify-between items-center'>
            <div className='w-full md:w-1/2 xl:w-[55%]'>
              <div className='flex flex-col gap-5 md:gap-[25px] xl:gap-[30px]'>
                <h3 className='text-black-1 text-2xl md:text-[28px] lg:text-[32px] font-semibold !leading-none'>Benefits of application</h3>
                <ul className='space-y-6'>
                  {benefits.map((item, index) => (
                    <li key={index} className='text-gray-1 text-sm flex gap-2'>
                      <FaCheck className='w-5 min-w-[20px] mt-[3px]' />
                      {item?.name}
                    </li>
                  ))}
                </ul>
                <div>
                  <Button
                    buttonText='Book appointment'
                    className='mt-2'
                  />
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 xl:w-[45%] '>
              <div className='flex justify-center items-center bg-[#EBEBEB] rounded-2xl relative'>
                {loading && (
                  <div className='w-[70%] h-[80%] absolute left-0 right-0 bottom-0 m-auto bg-gray-300 border rounded-t-2xl'>
                    <AiOutlineLoading3Quarters className='absolute inset-0 m-auto text-4xl text-gray-500 animate-spin' />
                  </div>

                )}
                <Image
                  src={currentTabItem.image}
                  alt={currentTabItem.title}
                  width={400}
                  height={700}
                  className={`w-[90%] lg:max-w-[452px] aspect-[452/636] rounded-2xl ${loading ? 'opacity-0' : 'opacity-100'}`}
                  onLoadingComplete={() => setLoading(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { RestyleShop }