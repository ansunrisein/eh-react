import React, {useState} from 'react'
import {ButtonGroup} from 'rsuite'
import {FilterButton} from '../filter-button'
import {mapFiltersConfigToObj} from './helpers'

export type FiltersProps = {
  onChange?: (filters: Record<string, number>) => void
  filters: {name: string; icons: React.ReactNode[]}[]
}

export const Filters: React.FC<FiltersProps> = ({onChange, filters}) => {
  const [filter, setFilter] = useState(() => mapFiltersConfigToObj(filters))

  const onStateChange = (name: string) => (state: number) => {
    const newFilter = {...filter, [name]: state}
    setFilter(newFilter)
    onChange?.(newFilter)
  }

  return (
    <ButtonGroup vertical>
      {filters.map((e, i) => (
        <FilterButton
          key={i}
          state={filter[e.name]}
          block
          defaultState={filter[e.name]}
          onChange={onStateChange(e.name)}
        >
          {e.icons}
        </FilterButton>
      ))}
    </ButtonGroup>
  )
}
