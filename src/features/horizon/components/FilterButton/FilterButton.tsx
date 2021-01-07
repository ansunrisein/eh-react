import React, {ReactNode} from 'react'
import {StateButton, StateButtonProps} from '@eh/react/features/shared/components'

export type FilterButtonProps = Omit<StateButtonProps, 'states' | 'children' | 'neutralState'> & {
  children: ReactNode[]
}

export const FilterButton: React.FC<FilterButtonProps> = ({children, ...props}) => (
  <StateButton data-testid="filter-button" states={children} neutralState={false} {...props} />
)
