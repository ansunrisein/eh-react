import React from 'react'
import {
  RiHeartFill,
  RiHeartLine,
  RiPushpin2Fill,
  RiPushpin2Line,
  RiPushpinFill,
} from 'react-icons/ri'
import {Icon} from '@rsuite/icons'

export const filterConfig = [
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