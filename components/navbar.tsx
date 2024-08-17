'use client'
import { socials } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaCross } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

type Props = {}

const Navbar = (props: Props) => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shops', path: '#shops' },
    { name: 'About Us', path: '#about' },
    { name: 'Apex Auto', path: '#apex' },
    { name: 'Gallery', path: '#gallery' },
  ]

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className='py-4 md:py-5 xl:py-6 relative'>
      <nav className='layout-hero'>
        <div className='flex justify-between items-center'>
          <Link href={'/'}>
            <Image src='/images/logo.svg' width={160} height={48} alt='logo' className='w-auto h-9 md:h-10 xl:h-12' />
          </Link>
          <div className='items-center hidden md:flex'>
            {
              navLinks.map((item, index) => (
                <Link href={item.path} key={index}
                  className='px-3 md:px-4 xl:px-5'>
                  <span className='text-black-1 text-base hover:text-primary hover:underline underline-offset-2 transition'>{item?.name}</span>
                </Link>
              ))
            }
          </div>

          <div className='hidden lg:flex gap-4'>
            {socials.map((item, index) => (
              <Link key={index} href={item.link} passHref>
                <span className=' text-black-1 text-xl aspect-square hover:text-primary transition duration-300 flex p-2 hover:bg-primary/10 rounded-lg border border-transparent hover:border-primary/50'>{item?.icon}</span>
              </Link>
            ))}
          </div>
          <div className='lg:hidden'
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <FaBars className='text-black text-2xl' />
          </div>
        </div>
      </nav>

      <div className={`${showMobileMenu ? 'fixed' : 'hidden'} top-0 h-screen w-screen bg-black/50 z-20`}>
        <div className={`w-full h-full flex justify-end `}>
          <div>

          </div>
          <div className={`px-8 pl-8 py-5 bg-white w-auto h-full ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} transition duration-1000`}>

            <div className='w-full flex justify-end'>
              <button
                className='p-2 bg-black/10 rounded-full'
                onClick={() => { setShowMobileMenu(!showMobileMenu) }}
              >
                <FaXmark className='text-black-1 text-xl' />
              </button>
            </div>

            <div className='flex flex-col gap-3 pt-5'>
              {navLinks.map((item, index) => (
                <div onClick={() => { setShowMobileMenu(!showMobileMenu) }}>
                  <Link href={item.path || '/'} key={index}>
                    <span className='block text-black-1'>{item?.name}</span>
                  </Link>
                </div>
              ))
              }
            </div>

            <div className='flex gap-3 mt-5'>
              {socials.map((item, index) => (
                <Link key={index} href
                  ={item.link} passHref>
                  <span className=' text-black-1 text-xl aspect-square hover:text-primary transition duration-300'>{item?.icon}</span>
                </Link>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Navbar }