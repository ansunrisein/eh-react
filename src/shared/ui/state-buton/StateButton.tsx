import React, {useCallback, useMemo, useState} from 'react'
import c from 'classnames'
import {Button, IconButtonProps} from 'rsuite'
import S from './StateButton.module.scss'

export type StateButtonProps = {
  defaultState?: number
  state?: number
  states: React.ReactNode[]
  onChange?: (state: number) => unknown
  neutralState?: boolean
} & Omit<IconButtonProps, 'icon' | 'onChange'>

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

  const realStates = useMemo(
    () => (neutralState && children ? [null, ...states] : states),
    [neutralState, states, children],
  )

  const rotateState = useCallback(() => {
    const state = (realState + 1) % realStates.length
    onChange?.(state)
    setOwnState(state)
  }, [onChange, realState, realStates.length])

  const handleClick = useCallback<React.MouseEventHandler<HTMLElement>>(
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
      className={c('relative', className)}
      {...props}
    >
      <div className={children ? c(S.absolute, S.right, S.top) : S.padding}>
        {realStates[realState]}
      </div>
      {children && <div className={S.padding}>{children}</div>}
    </Button>
  )
}
