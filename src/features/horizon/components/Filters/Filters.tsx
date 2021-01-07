import React, {ReactNode, useState} from 'react'
import useDidUpdate from '@rooks/use-did-update'
import {ButtonGroup} from 'rsuite'
import {FilterButton} from '../FilterButton'

export type FiltersProps = {
  onChange?: (filters: Record<string, number>) => void
  filters: {name: string; icons: ReactNode[]}[]
}

export const Filters: React.FC<FiltersProps> = ({onChange, filters}) => {
  const [filter, setFilter] = useState<Record<string, number>>(() =>
    filters.reduce(
      (acc, e) => ({
        ...acc,
        [e.name]: 0,
      }),
      {},
    ),
  )

  const onStateChange = (name: string) => (state: number) =>
    setFilter(prev => ({...prev, [name]: state}))

  useDidUpdate(() => {
    onChange?.(filter)
  }, [onChange, filter])

  return (
    <ButtonGroup vertical>
      {filters.map((e, i) => (
        <FilterButton key={i} block defaultState={filter[e.name]} onChange={onStateChange(e.name)}>
          {e.icons}
        </FilterButton>
      ))}
    </ButtonGroup>
  )
}
