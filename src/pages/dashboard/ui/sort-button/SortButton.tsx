import React, {useCallback} from 'react'
import {RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri'
import {Icon} from '@rsuite/icons'
import {StateButton, StateButtonProps} from '@eh/shared/ui'
import {mapSortStateToState, mapStateToSortState} from './helpers'
import {SortState} from './types'

export type SortButtonProps = {
  state?: SortState
  onChange?: (state: SortState) => unknown
} & Omit<StateButtonProps, 'state' | 'onChange' | 'states'>

const sortStates = [
  <Icon style={{fontSize: '10px'}} as={RiArrowDownSFill} key={0} />,
  <Icon style={{fontSize: '10px'}} as={RiArrowUpSFill} key={1} />,
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
