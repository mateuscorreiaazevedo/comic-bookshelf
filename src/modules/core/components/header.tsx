import { BsSun, BsMoon, BsGithub, BsLinkedin, BsInstagram, BsCodeSlash } from 'react-icons/bs'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiSearch, HiMenuAlt3 } from 'react-icons/hi'
import { useTheme } from '../contexts/theme-context'
import * as Popover from '@radix-ui/react-popover'
import { ItemNav, PopoverUi } from '@/main/ui'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  const { scrollY } = useScroll()
  const background = useTransform(scrollY, [100, 500], ['rgba(10,10,10,0)', 'rgba(240, 20, 30, 0.9)'])
  const { handleTheme, isLight } = useTheme()

  return (
    <motion.header
      style={{ background }}
      transition={{ duration: 2.6 }}
      className="w-full flex items-center h-20 fixed top-0 text-white z-30"
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
        <nav className="flex gap-4 text-zinc-900">
          <Link href="/search" className="text-3xl">
            <HiSearch />
          </Link>
          <Popover.Root>
            <Popover.Trigger>
              <HiMenuAlt3 className="text-3xl" />
            </Popover.Trigger>
            <PopoverUi>
              <ul>
                <ItemNav onClick={handleTheme}>{isLight ? <BsSun /> : <BsMoon />} Alterar tema</ItemNav>
                <a href="https://github.com/mateuscorreiaazevedo/comic-bookshelf" target='_blank' rel="noreferrer">
                  <ItemNav>
                    <BsGithub /> Repositório
                  </ItemNav>
                </a>
                <a href="https://linkedin.com/in/mateuscorreiaazevedo" target='_blank' rel="noreferrer">
                  <ItemNav>
                    <BsLinkedin /> LinkedIn
                  </ItemNav>
                </a>
                <a href="https://instagram.com/mateuscorreiaazevedo" target='_blank' rel="noreferrer">
                  <ItemNav>
                    <BsInstagram /> Instagram
                  </ItemNav>
                </a>
                <a href="https://mateusdev.com.br" target='_blank' rel="noreferrer">
                  <ItemNav>
                    <BsCodeSlash /> Meu site
                  </ItemNav>
                </a>
              </ul>
            </PopoverUi>
          </Popover.Root>
        </nav>
      </div>
    </motion.header>
  )
}
