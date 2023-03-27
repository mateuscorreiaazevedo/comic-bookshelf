import React from 'react'

export const GridCards = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-6 grid md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">{children}</div>
}
