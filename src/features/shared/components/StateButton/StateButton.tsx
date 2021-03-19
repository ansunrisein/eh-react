import React, {EventHandler, ReactNode, SyntheticEvent, useCallback, useMemo, useState} from 'react'
import {Button, IconButtonProps} from 'rsuite'
import c from 'classnames'
import s from './StateButton.module.css'

export type StateButtonProps = {
  defaultState?: number
  state?: number
  states: ReactNode[]
  onChange?: (state: number) => unknown
  neutralState?: boolean
} & Omit<IconButtonProps, 'icon'>

export const StateButton: React.FC<StateButtonProps> = ({
  defaultState = 0,
  state,
  states,
  onChange,
  neutralState = true,
  onClick,
  children,
  className,
  ...props
}) => {
  const [ownState, setOwnState] = useState(defaultState)
  const realState = state ?? ownState

  const realStates = useMemo(() => (neutralState && children ? [null, ...states] : states), [
    neutralState,
    states,
    children,
  ])

  const rotateState = useCallback(() => {
    const state = (realState + 1) % realStates.length
    onChange?.(state)
    setOwnState(state)
  }, [onChange, realState, realStates.length])

  const handleClick = useCallback<EventHandler<SyntheticEvent>>(
    event => {
      rotateState()
      return onClick?.(event)
    },
    [rotateState, onClick],
  )

  return (
    <Button
      onClick={handleClick}
      data-testid="state-button"
      className={c(s.relative, className)}
      {...props}
    >
      <div className={children ? c(s.absolute, s.right, s.top) : s.padding}>
        {realStates[realState]}
      </div>
      {children && <div className={s.padding}>{children}</div>}
    </Button>
  )
}
