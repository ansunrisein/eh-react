import React, {useEffect} from 'react'
import {format} from 'date-fns'
import {TimerSettings, useTimer} from 'react-timer-hook'
import {Tag, Tooltip, Whisper} from 'rsuite'
import {formatTime} from './helpers'

export type TimerBadgeProps = TimerSettings

export const TimerBadge: React.FC<TimerBadgeProps> = ({expiryTimestamp, ...props}) => {
  const {start, pause, ...rest} = useTimer({expiryTimestamp, ...props})

  const time = formatTime(rest)

  useEffect(() => {
    if (time) {
      start()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Whisper
      placement="bottom"
      controlId="control-id-hover"
      trigger="hover"
      speaker={<Tooltip>{format(expiryTimestamp, 'dd-MM-yyyy')}</Tooltip>}
    >
      <Tag color={time ? 'violet' : 'red'}>{time ? time : 'Time is up'}</Tag>
    </Whisper>
  )
}
