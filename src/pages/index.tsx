import { comicService } from '@/modules/comics'
import React from 'react'

function Home () {
  const [comics, setComics] = React.useState<any[]>([])

  React.useEffect(() => {
    (async () => {
      try {
        const response = await comicService.getAll()
        setComics(response)
      } catch (error) {
        console.log((error as any).message)
      }
    })()
  }, [])

  console.log(comics)

  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default Home
