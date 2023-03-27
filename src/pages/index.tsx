import { useTheme } from '@/modules/core'
import React from 'react'

export default function Home () {
  const { handleTheme } = useTheme()

  return (
    <>
      <h1 onClick={handleTheme}>Hello World!</h1>
    </>
  )
}
