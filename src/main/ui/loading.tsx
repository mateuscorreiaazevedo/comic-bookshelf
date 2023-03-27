import Image from 'next/image'
import React from 'react'

export const Loading = () => {
  return (
    <Image src="https://cdn.worldvectorlogo.com/logos/captain-america-shield.svg" alt="Captain America Shield"
      className='w-10 h-10 object-contain animate-spin my-20'
      width={100}
      height={100}
      loading='lazy'
    />
  )
}
