import {useEffect} from 'react'

export const useBodyClassName = (className: string): void => {
  useEffect(() => {
    document.body.classList.add(className)
    return () => document.body.classList.remove(className)
  }, [className])
}
