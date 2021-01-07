import React, {ReactNode, useState} from 'react'
import useDidUpdate from '@rooks/use-did-update'
import {ButtonGroup} from 'rsuite'
import {SortButton} from '../SortButton'

export type SortsProps = {
  onChange?: (sort: any) => unknown
  sorts: {name: string; icon: ReactNode}[]
}

export type SortState = 'none' | 'desc' | 'asc'

const stateMap: Record<number, SortState> = {0: 'none', 1: 'desc', 2: 'asc'}

export const Sorts: React.FC<SortsProps> = ({onChange, sorts}) => {
  const [sort, setSort] = useState<Record<string, SortState>>(() =>
    sorts.reduce(
      (acc, e) => ({
        ...acc,
        [e.name]: 'none',
      }),
      {},
    ),
  )

  useDidUpdate(() => {
    onChange?.(sort)
  }, [sort, onChange])

  const onSortChange = (name: string) => (state: number) =>
    setSort(prev => ({...prev, [name]: stateMap[state]}))

  return (
    <ButtonGroup vertical>
      {sorts.map((e, i) => (
        <SortButton
          key={i}
          defaultValue={sort[e.name]}
          onChange={onSortChange(e.name)}
          data-testid="sort-button"
        >
          {e.icon}
        </SortButton>
      ))}
    </ButtonGroup>
  )
}
