import { parseCookies, setCookie } from 'nookies'
import React from 'react'

export const useView = () => {
  const [view, setView] = React.useState<'grid' | 'list'>('grid')
  const viewCookie = parseCookies(null).view

  function toggleView (value: 'grid' | 'list') {
    setView(value)
    setCookie(null, 'view', value)
  }

  React.useEffect(() => {
    if (viewCookie === 'grid') {
      setView('grid')
    } else if (viewCookie === 'list') {
      setView('list')
    }
  }, [viewCookie, view])

  return {
    view,
    toggleView
  }
}
