import React from 'react'
import {Icon} from 'rsuite'
import {StateButton, StateButtonProps} from '@eh/react/features/shared/components'

export type SortButtonProps = Omit<StateButtonProps, 'states'>

const sortStates = [
  <Icon style={{fontSize: '8px'}} icon="arrow-down" key={0} />,
  <Icon style={{fontSize: '8px'}} icon="arrow-up" key={1} />,
]

export const SortButton: React.FC<SortButtonProps> = props => (
  <StateButton states={sortStates} {...props} />
)
