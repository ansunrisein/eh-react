import React, {useCallback} from 'react'
import {StateButton, StateButtonProps} from '@eh/shared/ui'
import {AvailableFilter} from '../../config'
import {mapFilterStateToState, mapStateToFilterState} from './helpers'

export type FilterButtonProps = {
  name: AvailableFilter
  state: number
  onChange?: (name: AvailableFilter, state: number) => unknown
  children: React.ReactNode[]
} & Omit<StateButtonProps, 'states' | 'children' | 'neutralState' | 'state' | 'onChange'>

export const FilterButton: React.FC<FilterButtonProps> = ({
  name,
  state,
  onChange,
  children,
  ...props
}) => {
  const buttonState = mapFilterStateToState(state)

  const onButtonStateChange = useCallback(
    (state: number) => onChange?.(name, mapStateToFilterState(state)),
    [name, onChange],
  )

  return (
    <StateButton
      states={children}
      state={buttonState}
      onChange={onButtonStateChange}
      neutralState={false}
      {...props}
    />
  )
}
