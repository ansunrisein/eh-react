import React, {useEffect} from 'react'
import {format} from 'date-fns'
import {FormattedMessage} from 'react-intl'
import {TimerSettings, useTimer} from 'react-timer-hook'
import {Tag, Tooltip, Whisper} from 'rsuite'
import {withModuleLocalization} from '@eh/shared/lib/i18n'
import {formatTime} from './helpers'
import {texts} from './texts'

export type TimerBadgeProps = {
  withTooltip?: boolean
  showTime?: boolean
  className?: string
} & Pick<TimerSettings, 'expiryTimestamp' | 'onExpire' | 'autoStart'>

export const TimerBadge: React.FC<TimerBadgeProps> = withModuleLocalization('shared')(
  ({expiryTimestamp, withTooltip, showTime, className, ...props}) => {
    const {start, pause, restart, ...rest} = useTimer({expiryTimestamp, ...props})

    const time = formatTime(rest)

    useEffect(() => {
      if (expiryTimestamp) {
        restart(expiryTimestamp)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expiryTimestamp])

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
        <Tag className={className} color={time || showTime ? 'violet' : 'red'}>
          {showTime ? (
            format(expiryTimestamp, 'dd-MM-yyyy')
          ) : time ? (
            time
          ) : (
            <FormattedMessage {...texts.timeIsUp} />
          )}
        </Tag>
      </Whisper>
    )
  },
)
