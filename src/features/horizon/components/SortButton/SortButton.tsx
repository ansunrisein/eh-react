import React, {useCallback} from 'react'
import {Icon, IconButtonProps} from 'rsuite'
import {StateButton} from '@eh/react/features/shared/components'
import {mapSortStateToState, mapStateToSortState} from './helpers'

export type SortButtonProps = {
  state?: 'none' | 'desc' | 'asc'
  onChange?: (state: 'none' | 'desc' | 'asc') => unknown
  neutralState?: boolean
} & Omit<IconButtonProps, 'icon'>

const sortStates = [
  <Icon style={{fontSize: '8px'}} icon="arrow-down" key={0} />,
  <Icon style={{fontSize: '8px'}} icon="arrow-up" key={1} />,
]

export const SortButton: React.FC<SortButtonProps> = ({state = 'none', onChange, ...props}) => {
  const buttonState = mapSortStateToState(state)

  const onButtonStateChange = useCallback(
    (state: number) => onChange?.(mapStateToSortState(state)),
    [onChange],
  )

  return (
    <StateButton
      states={sortStates}
      state={buttonState}
      onChange={onButtonStateChange}
      {...props}
    />
  )
}
