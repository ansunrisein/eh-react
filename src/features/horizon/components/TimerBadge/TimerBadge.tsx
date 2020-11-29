import React, {useEffect} from 'react'
import {TimerSettings, useTimer} from 'react-timer-hook'
import {Badge, Tag} from 'rsuite'
import {formatTime} from './helpers'

export const TimerBadge: React.FC<TimerSettings> = props => {
  const {start, ...rest} = useTimer(props)

  useEffect(() => start(), [start])

  const time = formatTime(rest)

  if (!time) return <Badge content="Time is up" />

  return <Tag color="violet">{time}</Tag>
}
