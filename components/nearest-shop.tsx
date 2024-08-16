'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { LuMapPin } from 'react-icons/lu'
import { Button } from './core'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { nearestShops } from '@/data'

type Props = {}

const NearestShop = (props: Props) => {
  


  const [loading, setLoading] = useState(true)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? nearestShops[0].images.length - 1 : prevIndex - 1
    )
    setLoading(true)
  }

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === nearestShops[0].images.length - 1 ? 0 : prevIndex + 1
    )
    setLoading(true)
  }


  // const [currentImageIndexes, setCurrentImageIndexes] = useState(
  //   nearestShops.map(() => 0)
  // )

  // const showPrevImage = (index: number) => {
  //   setCurrentImageIndexes(prevIndexes => {
  //     const newIndexes = [...prevIndexes]
  //     newIndexes[index] = (newIndexes[index] > 0) 
  //       ? newIndexes[index] - 1 
  //       : nearestShops[index].images.length - 1
  //     return newIndexes
  //   })
  // }

  // const showNextImage = (index: number) => {
  //   setCurrentImageIndexes(prevIndexes => {
  //     const newIndexes = [...prevIndexes]
  //     newIndexes[index] = (newIndexes[index] < nearestShops[index].images.length - 1) 
  //       ? newIndexes[index] + 1 
  //       : 0
  //     return newIndexes
  //   })
  // }

  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    nearestShops.map(() => 0)
  )
  const [loadingStates, setLoadingStates] = useState(
    nearestShops.map(() => true)
  )

  const showPrevImage = (index: number) => {
    setCurrentImageIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes]
      newIndexes[index] = (newIndexes[index] > 0)
        ? newIndexes[index] - 1
        : nearestShops[index].images.length - 1
      setLoadingStates(prevLoadingStates => {
        const newLoadingStates = [...prevLoadingStates]
        newLoadingStates[index] = true
        return newLoadingStates
      })
      return newIndexes
    })
  }

  const showNextImage = (index: number) => {
    setCurrentImageIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes]
      newIndexes[index] = (newIndexes[index] < nearestShops[index].images.length - 1)
        ? newIndexes[index] + 1
        : 0
      setLoadingStates(prevLoadingStates => {
        const newLoadingStates = [...prevLoadingStates]
        newLoadingStates[index] = true
        return newLoadingStates
      })
      return newIndexes
    })
  }

  const handleLoadingComplete = (index: number) => {
    setLoadingStates(prevLoadingStates => {
      const newLoadingStates = [...prevLoadingStates]
      newLoadingStates[index] = false
      return newLoadingStates
    })
  }
  return (
    <div id='shops' className='bg-[#EBEBEB] py-16 md:py-20 lg:py-24 xl:py-[120px]'>
      <div className='layout flex flex-col gap-8 md:gap-12 lg:gap-14 xl:gap-[60px]'>
        <h2 className='section-heading text-black-1'> Find Your Nearest <br />
          Automotive Restyling Shop</h2>
        <div className='flex flex-col gap-10'>
          {nearestShops.map((shop, index) => (
            <div key={index} className='bg-white rounded-2xl flex flex-col md:flex-row h-full'>

              <div className='md:w-[40%] min-h-full aspect-[520/543] relative'>
                <button
                  className='size-9 flex items-center justify-center bg-white absolute left-4 top-1/2 -translate-y-1/2 rounded-xl'
                  onClick={() => showPrevImage(index)}
                >
                  <BsChevronLeft className='text-black-1 text-xl' />
                </button>
                {loadingStates[index] && (
                  <div className='absolute inset-0 flex items-center justify-center h-full w-full bg-gray-100 border border-white   rounded-t-2xl md:rounded-t-none lg:rounded-tl-2xl lg:rounded-bl-2xl'>
                    <AiOutlineLoading3Quarters className='absolute inset-0 m-auto text-4xl text-gray-500 animate-spin' />
                  </div>
                )}
                <Image
                  src={shop.images[currentImageIndexes[index]]}
                  alt='shop'
                  width={520}
                  height={543}
                  className={`w-full md:w-auto md:h-full aspect-[520/543] object-cover rounded-s-none rounded-t-2xl lg:rounded-t-none lg:rounded-tl-2xl lg:rounded-bl-2xl ${loadingStates[index] ? 'opacity-0' : 'opacity-100'}`}
                  onLoadingComplete={() => handleLoadingComplete(index)}
                />

                <button
                  className='size-9 flex items-center justify-center bg-white absolute right-4 top-1/2 -translate-y-1/2 rounded-xl'
                  onClick={() => showNextImage(index)}
                >
                  <BsChevronRight className='text-black-1 text-xl' />
                </button>
              </div>

              <div className='md:w-[60%] px-4 py-5 md:p-6 md:py-7 xl:px-8 xl:py-10 flex flex-col gap-6 xl:gap-10'>
                <div className='flex flex-col gap-5'>
                  <h3 className='text-black-1 text-lg lg:xl xl:text-2xl !leading-none font-semibold'>{shop?.name}</h3>
                  <p className='text-gray-1 text-[12px] md:text-sm'>{shop?.description}</p>
                </div>

                <div className=''>
                  <h3 className='text-black-1 text-lg lg:xl xl:text-2xl !leading-none font-semibold'>Services</h3>
                  <div className='flex gap-2 md:gap-4 overflow-x-auto'>
                    {shop.services.map((service, index) => (
                      <div key={index} className='flex flex-col gap-2 items-center mt-5'>
                        <Image
                          src={service.icon}
                          alt='service'
                          width={40}
                          height={40}
                          className='h-10 xl:h-14'
                        />
                        <p dangerouslySetInnerHTML={{ __html: service.name }} className='text-gray-1 text-[10px] md:text-[12px] xl:text-sm text-center font-medium whitespace-nowrap'></p>

                      </div>
                    ))}
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-2'>
                  <div>
                    <h3 className='text-black-1 text-lg lg:xl xl:text-2xl !leading-none font-semibold'>Hours</h3>
                    <div className='flex gap-1 md:gap-2 items-start mt-4'>
                      <IoTimeOutline className='min-w-4 md:w-5 text-gray-1' />
                      <div className='space-y-[14px] xl:mt-1'>
                        {shop.hours.map((hour, index) => (
                          <p key={index} className='text-gray-1 text-[12px] md:text-sm font-medium !leading-none'>{hour}</p>
                        ))}
                        <p className='text-gray-1 text-[12px] md:text-sm font-medium !leading-none'>Sunday - <span className='text-red-500'>Closed</span></p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className='text-black-1 text-lg lg:xl xl:text-2xl !leading-none font-semibold'>Location</h3>
                    <div className='flex gap-1 md:gap-2 mt-4'>
                      <LuMapPin className='min-w-4 xl:w-5 text-gray-1' />
                      <Link href={shop.location} className='text-gray-1 mt-1 text-[12px] md:text-sm font-medium !leading-none hover:underline underline-offset-2 transition'>View on google map</Link>
                    </div>
                  </div>
                </div>

                <div>
                  <Button buttonText='Book Your Appointment' />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center gap-4'>
          <Link href='https://'>
            <Image
              src='/images/common/appstore-black.svg'
              alt='location'
              width={242}
              height={70}
              className='w-auto h-10 md:h-auto xl:h-[70px]'
            />
          </Link>
          <Link href='https://'>
            <Image
              src='/images/common/playstore-black.svg'
              alt='location'
              width={242}
              height={70}
              className='w-auto h-10 md:h-auto xl:h-[70px]'
            />
          </Link>
        </div>
      </div>
    </div >
  )
}

export { NearestShop }