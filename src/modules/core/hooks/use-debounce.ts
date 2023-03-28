import React from 'react'

export function useDebounce<T> (fn: T, delayInMs = 500) {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(fn)

  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(fn), delayInMs)

    return () => {
      clearTimeout(timer)
    }
  }, [fn, delayInMs])

  return { debouncedValue }
}
