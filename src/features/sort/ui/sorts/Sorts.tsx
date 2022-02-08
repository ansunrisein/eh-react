import React, {ReactNode, useState} from 'react'
import {ButtonGroup, ButtonGroupProps} from 'rsuite'
import {SortButton, SortState} from '../sort-button'
import {mapSortsConfigToObj} from './helpers'

export type SortsProps = {
  onChange?: (sort: Record<string, SortState>) => unknown
  sorts: {name: string; icon: ReactNode}[]
} & ButtonGroupProps

export const Sorts: React.FC<SortsProps> = ({onChange, sorts, ...props}) => {
  const [sort, setSort] = useState(() => mapSortsConfigToObj(sorts))

  const onSortChange = (name: string) => (state: SortState) => {
    const newSort = {[name]: state}
    setSort(newSort)
    onChange?.(newSort)
  }

  return (
    <ButtonGroup {...props}>
      {sorts.map((e, i) => (
        <SortButton
          key={i}
          state={sort[e.name]}
          onChange={onSortChange(e.name)}
          data-testid="sort-button"
        >
          {e.icon}
        </SortButton>
      ))}
    </ButtonGroup>
  )
}
