import React, {useCallback} from 'react'
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiEyeFill,
  RiHeart3Fill,
  RiPushpin2Fill,
  RiTimeLine,
} from 'react-icons/ri'
import {FormattedMessage} from 'react-intl'
import {Tooltip, Whisper} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {StateButton, StateButtonProps} from '@eh/shared/ui'
import {AvailableSort} from '../../sorts'
import {mapSortStateToState, mapStateToSortState} from './helpers'
import {labels} from './texts'
import {SortState} from './types'

export type SortButtonProps = {
  name: AvailableSort
  state?: SortState
  onChange?: (name: AvailableSort, state: SortState) => void
} & Omit<StateButtonProps, 'state' | 'onChange' | 'states' | 'children'>

const sortStates = [
  <Icon style={{fontSize: '10px'}} as={RiArrowDownSFill} key={0} />,
  <Icon style={{fontSize: '10px'}} as={RiArrowUpSFill} key={1} />,
]

const icons: Record<AvailableSort, React.ReactNode> = {
  nearestEvent: <Icon as={RiTimeLine} />,
  favorite: <Icon as={RiHeart3Fill} />,
  views: <Icon as={RiEyeFill} />,
  nearest: <Icon as={RiTimeLine} />,
  pin: <Icon as={RiPushpin2Fill} />,
}

export const SortButton: React.FC<SortButtonProps> = ({
  state = 'none',
  name,
  onChange,
  ...props
}) => {
  const buttonState = mapSortStateToState(state)
  const nextState = (buttonState + 1) % (sortStates.length + 1)

  const onButtonStateChange = useCallback(
    (state: number) => onChange?.(name, mapStateToSortState(state)),
    [name, onChange],
  )

  return (
    <Whisper
      placement="autoHorizontal"
      trigger="hover"
      speaker={
        <Tooltip>
          <FormattedMessage {...labels[`${name}${nextState}`]} />
        </Tooltip>
      }
    >
      <StateButton
        states={sortStates}
        state={buttonState}
        onChange={onButtonStateChange}
        {...props}
      >
        {icons[name]}
      </StateButton>
    </Whisper>
  )
}
