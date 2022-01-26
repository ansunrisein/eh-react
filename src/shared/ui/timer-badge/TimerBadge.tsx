import React, {useEffect} from 'react'
import {TimerSettings, useTimer} from 'react-timer-hook'
import {Tag} from 'rsuite'
import {formatTime} from './helpers'

export type TimerBadgeProps = TimerSettings

export const TimerBadge: React.FC<TimerBadgeProps> = ({expiryTimestamp, ...props}) => {
  const {start, ...rest} = useTimer({expiryTimestamp, ...props})

  const time = formatTime(rest)

  useEffect(() => {
    start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!time) {
    return <Tag color="red">Time is up</Tag>
  }

  return <Tag color="violet">{time}</Tag>
}
