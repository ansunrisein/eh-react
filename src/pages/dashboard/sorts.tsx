import React from 'react'
import {RiHeart3Fill, RiPushpin2Fill, RiTimeLine} from 'react-icons/ri'
import {Icon} from '@rsuite/icons'

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
]
