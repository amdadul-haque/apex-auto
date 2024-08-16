'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from './core'
import { FaCheck } from 'react-icons/fa'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { serviceSteps } from '@/data'
import { ServiceStepsInterface } from '@/modes'
import { motion } from 'framer-motion'

type Props = {}

const RestyleShop = (props: Props) => {

  const [currentTabItem, setCurrentTabItem] = useState<ServiceStepsInterface>(serviceSteps[0])
  const [loading, setLoading] = useState<boolean>(true)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [pause, setPause] = useState<boolean>(false);

  useEffect(() => {
    var interval: any = null
    if (!pause) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const newIndex = prevIndex === serviceSteps.length - 1 ? 0 : prevIndex + 1
          setCurrentTabItem(serviceSteps[newIndex])
          return newIndex
        })
      }, 4000)
    }

    return () => clearInterval(interval)
  }, [pause])

  const handleTabClick = (index: number) => {
    setPause(true);
    setCurrentTabItem(serviceSteps[index]);
    setCurrentIndex(index);

    setTimeout(() => {
      setPause(false);
    }, 6000);
  };

  return (
    <div id='apex' className='bg-white py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-[120px]'>
      <div className='layout flex flex-col gap-8 md:gap-12 lg:gap-14 xl:gap-[60px]'>
        <div>
          <h2 className='section-heading text-black-1'>
            Find Your Nearest <br /> Automotive Restyling Shop
          </h2>
        </div>
        <div className='flex flex-col gap-5 md:gap-6 lg:gap-8 xl:gap-10'>

          <div className='w-full mx-auto flex gap-2 xl:justify-center items-center overflow-x-auto pb-3'>
            {serviceSteps.map((item: ServiceStepsInterface, index) => (
              <button key={index}
                className={`px-4 py-3 xl:px-[30px] xl:py-5 border border-gray-400 rounded-full text-sm md:text-base font-medium transition whitespace-nowrap ${currentTabItem?.title == item?.title ? 'bg-primary text-white' : 'bg-transparent hover:bg-primary/20'} `}
                onClick={() => handleTabClick(index)}
              >
                {item?.title}
              </button>
            ))}
          </div>
          <motion.div
            key={currentTabItem.title} // Unique key to trigger animation
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex flex-col-reverse md:flex-row gap-y-10 md:justify-between items-center'>
              <div className='w-full md:w-1/2 xl:w-[55%]'>
                <div className='flex flex-col gap-5 md:gap-[25px] xl:gap-[30px]'>
                  {/* <h3 className='text-black-1 text-2xl md:text-[28px] lg:text-[32px] font-semibold !leading-none'>Benefits of application</h3> */}
                  <ul className='space-y-6'>
                    {currentTabItem.benefits.map((item, index) => (
                      <li key={index} className='text-gray-1 text-sm md:text-base xl:text-xl flex gap-2'>
                        <FaCheck className='w-5 min-w-[20px] mt-[3px]' />
                        <p>
                          <span className='font-bold'>{item?.title} : </span>  {item?.description}
                        </p>
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
              <div className='w-full md:w-1/2 xl:w-[42%] '>
                <div className='flex justify-center items-center bg-[#EBEBEB] rounded-2xl relative'>
                  {loading && (
                    <div className='w-[70%] h-[80%] absolute left-0 right-0 bottom-0 m-auto bg-gray-300 border rounded-t-2xl'>
                      <AiOutlineLoading3Quarters className='absolute inset-0 m-auto text-4xl text-gray-500 animate-spin' />
                    </div>

                  )}
                  <Image
                    src={currentTabItem?.image}
                    alt={currentTabItem?.title}
                    width={400}
                    height={700}
                    className={`w-[90%] lg:max-w-[452px] aspect-[452/636] rounded-2xl ${loading ? 'opacity-0' : 'opacity-100'}`}
                    onLoadingComplete={() => setLoading(false)}
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div >
  )
}

export { RestyleShop }


