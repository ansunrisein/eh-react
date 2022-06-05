import React from 'react'
import {
  RiHeartFill,
  RiHeartLine,
  RiPushpin2Fill,
  RiPushpin2Line,
  RiPushpinFill,
  RiTeamFill,
  RiTimerFill,
  RiTimerLine,
  RiUserFill,
} from 'react-icons/ri'
import {Icon} from '@rsuite/icons'

export type AvailableFilter = keyof typeof availableFilters

export const availableFilters = {
  // boards
  ownership: {
    name: 'ownership' as const,
    icons: [
      <Icon key={0} as={RiUserFill} aria-label="disabled" style={{opacity: '0.4'}} />,
      <Icon key={1} as={RiUserFill} />,
      <Icon key={2} as={RiTeamFill} aria-label="inverted" />,
    ],
  },
  favorite: {
    name: 'favorite' as const,
    icons: [
      <Icon key={0} as={RiHeartFill} aria-label="disabled" style={{opacity: '0.4'}} />,
      <Icon key={1} as={RiHeartFill} />,
      <Icon key={2} as={RiHeartLine} aria-label="inverted" />,
    ],
  },
  pin: {
    name: 'pin' as const,
    icons: [
      <Icon key={0} as={RiPushpin2Fill} aria-label="disabled" style={{opacity: '0.4'}} />,
      <Icon key={1} as={RiPushpinFill} />,
      <Icon key={2} as={RiPushpin2Line} aria-label="inverted" />,
    ],
  },
  // events
  expired: {
    name: 'expired' as const,
    icons: [
      <Icon key={0} as={RiTimerFill} aria-label="disabled" style={{opacity: '0.4'}} />,
      <Icon key={1} as={RiTimerFill} />,
      <Icon key={2} as={RiTimerLine} aria-label="inverted" />,
    ],
  },
}
