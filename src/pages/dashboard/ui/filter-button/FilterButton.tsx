import React, {useCallback} from 'react'
import {StateButton, StateButtonProps} from '@eh/shared/ui'
import {mapFilterStateToState, mapStateToFilterState} from './helpers'

export type FilterButtonProps = {
  state: number
  onChange?: (state: number) => unknown
  children: React.ReactNode[]
} & Omit<StateButtonProps, 'states' | 'children' | 'neutralState' | 'state' | 'onChange'>

export const FilterButton: React.FC<FilterButtonProps> = ({
  state,
  onChange,
  children,
  ...props
}) => {
  const buttonState = mapFilterStateToState(state)

  const onButtonStateChange = useCallback(
    (state: number) => onChange?.(mapStateToFilterState(state)),
    [onChange],
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
