import React, { ReactNode } from 'react'

type Props = {
  buttonText: string;
  isSecondary?: boolean;
  handleOnlick?: () => void;
  className?: string;
}

const Button = ({ buttonText, isSecondary, handleOnlick, className }: Props) => {
  return (
    <div className={`inline-block px-5 py-3 md:px-6 md:py-4 xl:py-[25px] xl:px-[30px] font-medium text-base md:text-lg xl:text-xl xl:text-[22px] rounded-full cursor-pointer ${isSecondary ? 'bg-white text-black-1' : 'bg-primary text-white'} ${className} `}
      onClick={handleOnlick}
    >
      {buttonText}
    </div>
  )
}

export { Button }