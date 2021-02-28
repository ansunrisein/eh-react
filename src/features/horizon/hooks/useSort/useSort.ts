import {Dispatch, SetStateAction, useState} from 'react'

export type SortState = 'none' | 'desc' | 'asc'

export type UseSortResult = {
  sortsState: Record<string, SortState>
  setSortsState: Dispatch<SetStateAction<Record<string, SortState>>>
}

export const useSort = (sortConfig: {name: string}[]): UseSortResult => {
  const [sortsState, setSortsState] = useState<Record<string, SortState>>(() =>
    sortConfig.reduce((acc, e) => ({...acc, [e.name]: 'none'}), {}),
  )

  return {
    sortsState,
    setSortsState,
  }
}
