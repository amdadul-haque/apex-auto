'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { BsEye, BsX, BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

type Props = {}

const Gallery = (props: Props) => {
  const galleryImages = [
    '/images/gallery/1.png',
    '/images/gallery/2.png',
    '/images/gallery/3.png',
    '/images/gallery/4.png',
    '/images/gallery/5.png',
    '/images/gallery/6.png',
    '/images/gallery/7.png',
    '/images/gallery/8.png',
  ]

  const [fullImageIndex, setFullImageIndex] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const closeModal = () => {
    setFullImageIndex(null)
  }

  // const showPrevImage = () => {
  //   if (fullImageIndex !== null) {
  //     setFullImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : galleryImages.length - 1))
  //   }
  // }

  // const showNextImage = () => {
  //   if (fullImageIndex !== null) {
  //     setFullImageIndex((prevIndex) => (prevIndex < galleryImages.length - 1 ? prevIndex + 1 : 0))
  //   }
  // }
  const showPrevImage = () => {
    if (fullImageIndex !== null) {
      const prevIndex = fullImageIndex > 0 ? fullImageIndex - 1 : galleryImages.length - 1
      setFullImageIndex(prevIndex)
    }
  }
  
  const showNextImage = () => {
    if (fullImageIndex !== null) {
      const nextIndex = fullImageIndex < galleryImages.length - 1 ? fullImageIndex + 1 : 0
      setFullImageIndex(nextIndex)
    }
  }

  
  return (
    <div className='bg-[#EBEBEB] py-16 md:py-20 lg:py-24 xl:py-[120px]'>
      <div className='layout flex flex-col gap-8 md:gap-12 lg:gap-14 xl:gap-[60px]'>
        <h2 className='section-heading text-black-1'>Gallery</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
          {galleryImages.map((image, index) => (
            <div key={index} className='relative group'>
              <Image
                src={image}
                alt='gallery'
                layout='responsive'
                width={1000}
                height={1000}
                className='object-cover rounded-xl lg:rounded-2xl'
              />
              <div className='hidden group-hover:flex absolute inset-0 bg-black bg-opacity-50 items-center justify-center rounded-xl lg:rounded-2xl transition duration-300 cursor-pointer'
                onClick={() => {
                  setLoading(true)
                  setFullImageIndex(index)
                }}
              >
                <button className='text-white text-3xl'>
                  <BsEye />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {fullImageIndex !== null && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
          <div className='relative flex items-center w-full max-w-[90vw] max-h-[90vh]'>
            <button
              className='absolute left-2 md:left-4 p-2 md:p-4 text-white text-4xl bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition z-50'
              onClick={showPrevImage}
            >
              <BsChevronLeft />
            </button>

            <div className='relative flex justify-center items-center w-full h-[90vh]'>
              {loading && (
                <div className='absolute inset-0 flex items-center justify-center'>
                  <AiOutlineLoading3Quarters className='text-white text-6xl animate-spin' />
                </div>
              )}
              <Image
                src={galleryImages[fullImageIndex]}
                alt='Full View'
                width={1200}
                height={800}
                className='max-w-full h-auto max-h-[100%] rounded-xl lg:rounded-2xl object-cover'
                onLoadingComplete={() => setLoading(false)}
              />
            </div>

            <button
              className='absolute right-2 md:right-4 p-2 md:p-4 text-white text-4xl bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition z-50'
              onClick={showNextImage}
            >
              <BsChevronRight />
            </button>

            <button
              className='absolute top-4 right-4 text-white text-4xl'
              onClick={closeModal}
            >
              <BsX />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export { Gallery }
