import React from 'react'
import {RiPushpin2Fill, RiTimeLine, RiTimerFill, RiTimerLine} from 'react-icons/ri'
import {Icon} from '@rsuite/icons'

export const filterConfig = [
  {
    name: 'expired',
    icons: [
      <Icon key={0} as={RiTimerFill} aria-label="disabled" style={{opacity: '0.4'}} />,
      <Icon key={1} as={RiTimerFill} />,
      <Icon key={2} as={RiTimerLine} aria-label="inverted" />,
    ],
  },
]

export const sortConfig = [
  {
    name: 'nearestEvent',
    icon: <Icon as={RiTimeLine} />,
  },
  {
    name: 'pin',
    icon: <Icon as={RiPushpin2Fill} />,
  },
]
