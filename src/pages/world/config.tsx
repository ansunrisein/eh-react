import React from 'react'
import {RiHeart3Fill, RiHeartFill, RiHeartLine, RiTimeLine} from 'react-icons/ri'
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
]
