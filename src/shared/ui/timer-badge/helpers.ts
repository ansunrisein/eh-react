import {TimerResult} from 'react-timer-hook'

export const formatTime = ({
  days,
  hours,
  minutes,
  seconds,
}: Pick<TimerResult, 'days' | 'hours' | 'minutes' | 'seconds'>): string => {
  if (days) {
    return days + 'd ' + formatTime({days: 0, hours, minutes, seconds: 0})
  }

  if (hours) {
    return hours + 'h ' + formatTime({days: 0, hours: 0, minutes, seconds})
  }

  if (minutes) {
    return minutes + 'm ' + formatTime({days: 0, hours: 0, minutes: 0, seconds})
  }

  if (seconds) {
    return seconds + 's'
  }

  return ''
}
