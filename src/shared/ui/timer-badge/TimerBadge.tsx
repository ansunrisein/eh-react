import React, {useEffect} from 'react'
import {format} from 'date-fns'
import {TimerSettings, useTimer} from 'react-timer-hook'
import {Tag, Tooltip, Whisper, WhisperProps} from 'rsuite'
import {formatTime} from './helpers'

export type TimerBadgeProps = {
  withTooltip?: boolean
} & TimerSettings &
  WhisperProps

export const TimerBadge: React.FC<TimerBadgeProps> = ({
  expiryTimestamp,
  withTooltip,
  className,
  ...props
}) => {
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
      disabled={!withTooltip}
      speaker={<Tooltip>{format(expiryTimestamp, 'dd-MM-yyyy')}</Tooltip>}
    >
      <Tag className={className} color={time ? 'violet' : 'red'}>
        {time ? time : 'Time is up'}
      </Tag>
    </Whisper>
  )
}
