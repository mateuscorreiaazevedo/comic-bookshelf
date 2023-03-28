import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <Image
      src="https://cdn.worldvectorlogo.com/logos/marvel.svg"
      alt="marvel logo"
      width={100}
      height={100}
      loading="lazy"
      className="w-full h-[70vh] mb-10 object-center bg-[#F0141E]"
    />
  )
}
