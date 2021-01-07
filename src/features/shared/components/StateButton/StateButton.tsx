import React, {EventHandler, ReactNode, SyntheticEvent, useCallback, useMemo, useState} from 'react'
import {Button, IconButtonProps} from 'rsuite'
import c from 'classnames'
import {useLatest} from 'react-use'
import useDidUpdate from '@rooks/use-did-update'
import S from './styles.module.css'

export type StateButtonProps = {
  defaultState?: number
  states: ReactNode[]
  onChange?: (state: number) => unknown
  neutralState?: boolean
} & Omit<IconButtonProps, 'icon'>

export const StateButton: React.FC<StateButtonProps> = ({
  defaultState = 0,
  states,
  onChange,
  neutralState = true,
  onClick,
  children,
  className,
  ...props
}) => {
  const [state, setState] = useState(defaultState)
  const onChangeRef = useLatest(onChange)

  const realStates = useMemo(() => (neutralState && children ? ['', ...states] : states), [
    neutralState,
    states,
    children,
  ])

  useDidUpdate(() => {
    onChangeRef.current?.(state)
  }, [state, onChangeRef])

  const rotateState = useCallback(() => setState(prev => (prev + 1) % realStates.length), [
    realStates.length,
    setState,
  ])

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
      className={c(S.relative, className)}
      {...props}
    >
      <div className={children ? c(S.absolute, S.right, S.top) : S.padding}>
        {realStates[state]}
      </div>
      {children && <div className={S.padding}>{children}</div>}
    </Button>
  )
}
