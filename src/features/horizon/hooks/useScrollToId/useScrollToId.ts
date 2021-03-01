import {useCallback, useRef} from 'react'

export type UseScrollToIdResult = {
  scroll: (id: string) => void
  register: (element: HTMLElement | null) => void
}

export const useScrollToId = (): UseScrollToIdResult => {
  const refs = useRef<Record<string, HTMLElement>>({})

  const register = useCallback(
    (element: HTMLElement | null) => {
      if (element) {
        refs.current[element.id] = element
      }
    },
    [refs],
  )

  const scroll = useCallback(
    id => refs.current[id]?.scrollIntoView({behavior: 'smooth', block: 'start'}),
    [refs],
  )

  return {scroll, register}
}
