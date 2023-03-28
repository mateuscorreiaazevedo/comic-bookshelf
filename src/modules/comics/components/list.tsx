import React from 'react'

export function List ({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 flex flex-col gap-4 items-stretch justify-center w-full">
      {children}
    </div>
  )
}
