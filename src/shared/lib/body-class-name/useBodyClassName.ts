import {useEffect} from 'react'

export const useBodyClassName = (className: string): void => {
  useEffect(() => {
    document.body.className = className
  }, [className])
}
