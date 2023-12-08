import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  })

  const update = () => {
    setWindowSize({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('resize', update)
    }
  })

  return windowSize
}

export default useWindowSize
