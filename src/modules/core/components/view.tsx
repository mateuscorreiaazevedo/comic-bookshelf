import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import React from 'react'

interface Props {
  view: string
  toggleView: (value: 'grid' | 'list') => void
}

export function View ({ toggleView, view }: Props) {
  return (
    <>
      <section className="w-full flex justify-end gap-4 mr-10 pt-2 h-10">
        Visualização:
        <div className="flex gap-6 mt-1">
          <span className={`cursor-pointer ${view === 'grid' ? 'text-red-500' : ''}`}>
            <BsFillGrid1X2Fill onClick={() => toggleView('grid')} />
          </span>
          <span className={`cursor-pointer ${view === 'list' ? 'text-red-500' : ''}`}>
            <FaThList onClick={() => toggleView('list')} />
          </span>
        </div>
      </section>
    </>
  )
}
