import {Dispatch, SetStateAction, useState} from 'react'

export type UseFilterResult = {
  filtersState: Record<string, number>
  setFiltersState: Dispatch<SetStateAction<Record<string, number>>>
}

export const useFilter = (filterConfig: {name: string}[]): UseFilterResult => {
  const [filtersState, setFiltersState] = useState<Record<string, number>>(() =>
    filterConfig.reduce((acc, e) => ({...acc, [e.name]: 0}), {}),
  )

  return {
    filtersState,
    setFiltersState,
  }
}
