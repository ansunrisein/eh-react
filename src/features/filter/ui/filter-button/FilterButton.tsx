import React, {useCallback} from 'react'
import {
  RiHeartFill,
  RiHeartLine,
  RiPushpin2Fill,
  RiPushpin2Line,
  RiPushpinFill,
  RiTeamFill,
  RiTimerFill,
  RiTimerLine,
  RiUserFill,
} from 'react-icons/ri'
import {Icon} from '@rsuite/icons'
import {StateButton, StateButtonProps} from '@eh/shared/ui'
import {AvailableFilter} from '../../filters'
import {mapFilterStateToState, mapStateToFilterState} from './helpers'

export type FilterButtonProps = {
  name: AvailableFilter
  state: number
  onChange?: (name: AvailableFilter, state: number) => unknown
} & Omit<StateButtonProps, 'states' | 'children' | 'neutralState' | 'state' | 'onChange'>

const icons: Record<AvailableFilter, React.ReactNode[]> = {
  ownership: [
    <Icon key={0} as={RiUserFill} aria-label="disabled" style={{opacity: '0.4'}} />,
    <Icon key={1} as={RiUserFill} />,
    <Icon key={2} as={RiTeamFill} aria-label="inverted" />,
  ],
  favorite: [
    <Icon key={0} as={RiHeartFill} aria-label="disabled" style={{opacity: '0.4'}} />,
    <Icon key={1} as={RiHeartFill} />,
    <Icon key={2} as={RiHeartLine} aria-label="inverted" />,
  ],
  pin: [
    <Icon key={0} as={RiPushpin2Fill} aria-label="disabled" style={{opacity: '0.4'}} />,
    <Icon key={1} as={RiPushpinFill} />,
    <Icon key={2} as={RiPushpin2Line} aria-label="inverted" />,
  ],
  expired: [
    <Icon key={0} as={RiTimerFill} aria-label="disabled" style={{opacity: '0.4'}} />,
    <Icon key={1} as={RiTimerFill} />,
    <Icon key={2} as={RiTimerLine} aria-label="inverted" />,
  ],
}

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
      states={icons[name]}
      state={buttonState}
      onChange={onButtonStateChange}
      neutralState={false}
      {...props}
    />
  )
}
