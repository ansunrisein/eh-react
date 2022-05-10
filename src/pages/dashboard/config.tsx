import React from 'react'
import {
  RiEyeFill,
  RiHeart3Fill,
  RiHeartFill,
  RiHeartLine,
  RiPushpin2Fill,
  RiPushpin2Line,
  RiPushpinFill,
  RiTeamFill,
  RiTimeLine,
  RiUserFill,
} from 'react-icons/ri'
import {Icon} from '@rsuite/icons'

export const filterConfig = [
  {
    name: 'ownership',
    icons: [
      <Icon key={0} as={RiUserFill} aria-label="disabled" style={{opacity: '0.4'}} />,
      <Icon key={1} as={RiUserFill} />,
      <Icon key={2} as={RiTeamFill} aria-label="inverted" />,
    ],
  },
  {
    name: 'favorite',
    icons: [
      <Icon key={0} as={RiHeartFill} aria-label="disabled" style={{opacity: '0.4'}} />,
      <Icon key={1} as={RiHeartFill} />,
      <Icon key={2} as={RiHeartLine} aria-label="inverted" />,
    ],
  },
  {
    name: 'pin',
    icons: [
      <Icon key={0} as={RiPushpin2Fill} aria-label="disabled" style={{opacity: '0.4'}} />,
      <Icon key={1} as={RiPushpinFill} />,
      <Icon key={2} as={RiPushpin2Line} aria-label="inverted" />,
    ],
  },
]

export const sortConfig = [
  {
    name: 'nearestEvent',
    icon: <Icon as={RiTimeLine} />,
  },
  {
    name: 'favorite',
    icon: <Icon as={RiHeart3Fill} />,
  },
  {
    name: 'pin',
    icon: <Icon as={RiPushpin2Fill} />,
  },
  {
    name: 'views',
    icon: <Icon as={RiEyeFill} />,
  },
]
