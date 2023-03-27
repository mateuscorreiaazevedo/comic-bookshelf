import { motion, useScroll, useTransform } from 'framer-motion'
import * as Popover from '@radix-ui/react-popover'
import { HiSearch, HiMenuAlt3 } from 'react-icons/hi'
import { BsSun, BsMoon } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ItemNav, PopoverUi } from '@/main/ui'
import { useTheme } from '../contexts/theme-context'

export const Header = () => {
  const { scrollY } = useScroll()
  const background = useTransform(scrollY, [100, 450], ['rgba(10,10,10,0.01)', '#F0141E'])
  const { handleTheme, isLight } = useTheme()

  return (
    <motion.header
      style={{ background }}
      transition={{ duration: 2.6 }}
      className="w-full flex items-center backdrop-blur-sm h-20 fixed top-0 text-white shadow-md"
    >
      <div className="container mx-auto flex gap-10 items-center justify-between">
        <Link href="/">
          <Image
            src="https://cdn.worldvectorlogo.com/logos/avengers-1.svg"
            alt="Marvel Logo"
            width={100}
            height={100}
            loading="lazy"
            className="w-16"
          />
        </Link>
        <label className="relative flex gap-3 bg-red-400 dark:bg-zinc-700 px-5 py-1 w-full rounded-full">
          <HiSearch className="text-3xl" />
          <input className="peer/search placeholder:text-zinc-200 placeholder:font-normal placeholder:italic bg-transparent w-full outline-none text-white font-semibold" placeholder='Pesquisar HQ...' />
        </label>
        <Popover.Root>
          <Popover.Trigger>
            <HiMenuAlt3 className='text-3xl'/>
          </Popover.Trigger>
          <PopoverUi>
            <ul>
              <ItemNav onClick={handleTheme}>
                {isLight ? <BsSun /> : <BsMoon />} Alterar tema
              </ItemNav>
            </ul>
          </PopoverUi>
        </Popover.Root>
      </div>
    </motion.header>
  )
}
