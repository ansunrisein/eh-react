import React, {useEffect} from 'react'
import {TimerSettings, useTimer} from 'react-timer-hook'
import {Tag} from 'rsuite'
import {useLatest} from 'react-use'
import {formatTime} from './helpers'

export type TimerBadgeProps = TimerSettings

export const TimerBadge: React.FC<TimerBadgeProps> = ({expiryTimestamp, ...props}) => {
  const {restart, ...rest} = useTimer({expiryTimestamp, ...props})
  const restartRef = useLatest(restart)

  useEffect(() => restartRef.current(expiryTimestamp), [expiryTimestamp, restartRef])

  const time = formatTime(rest)

  if (!time) {
    return <Tag color="red">Time is up</Tag>
  }

  return <Tag color="violet">{time}</Tag>
}
