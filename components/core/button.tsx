import Link from 'next/link';
import React, { ReactNode } from 'react'

type Props = {
  buttonText?: string;
  buttonLink: string;
  isSecondary?: boolean;
  className?: string;
  newTab?: boolean;
}

const Button = ({ buttonText, buttonLink, isSecondary, className, newTab }: Props) => {
  return (
    <Link
      href={buttonLink ?? ''}
      target={newTab ? '_blank' : '_self'}
      className={`inline-block px-5 py-3 lg:px-6 lg:py-4 xl:py-[25px] xl:px-[30px] font-medium text-base lg:text-lg xl:text-xl xl:text-[22px] rounded-full cursor-pointer ${isSecondary ? 'bg-white text-black-1 border border-transparent hover:bg-primary hover:text-white hover:border-white' : 'bg-primary/90 text-white hover:bg-primary hover:scale-[1.02]'} transition duration-300  ${className} `}
    >
      {buttonText}
    </Link>
  )
}

export { Button }