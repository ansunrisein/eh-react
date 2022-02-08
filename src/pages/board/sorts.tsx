import React from 'react'
import {RiPushpin2Fill, RiTimeLine} from 'react-icons/ri'
import {Icon} from '@rsuite/icons'

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
