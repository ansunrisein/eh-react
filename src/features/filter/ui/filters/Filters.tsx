import React, {useState} from 'react'
import {ButtonGroup, ButtonGroupProps} from 'rsuite'
import {FilterButton} from '../filter-button'
import {mapFiltersConfigToObj} from './helpers'

export type FiltersProps = {
  onChange?: (filters: Record<string, number>) => void
  filters: {name: string; icons: React.ReactNode[]}[]
} & ButtonGroupProps

export const Filters: React.FC<FiltersProps> = ({onChange, filters, ...props}) => {
  const [filter, setFilter] = useState(() => mapFiltersConfigToObj(filters))

  const onStateChange = (name: string) => (state: number) => {
    const newFilter = {...filter, [name]: state}
    setFilter(newFilter)
    onChange?.(newFilter)
  }

  return (
    <ButtonGroup {...props}>
      {filters.map((e, i) => (
        <FilterButton
          key={i}
          state={filter[e.name]}
          defaultState={filter[e.name]}
          onChange={onStateChange(e.name)}
        >
          {e.icons}
        </FilterButton>
      ))}
    </ButtonGroup>
  )
}
