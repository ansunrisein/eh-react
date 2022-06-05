import React from 'react'
import {RiEyeFill, RiHeart3Fill, RiPushpin2Fill, RiTimeLine} from 'react-icons/ri'
import {Icon} from '@rsuite/icons'

export type AvailableSort = keyof typeof availableSorts

export const availableSorts = {
  // boards
  nearestEvent: {
    name: 'nearestEvent' as const,
    icon: <Icon as={RiTimeLine} />,
  },
  favorite: {
    name: 'favorite' as const,
    icon: <Icon as={RiHeart3Fill} />,
  },
  views: {
    name: 'views' as const,
    icon: <Icon as={RiEyeFill} />,
  },
  // events
  nearest: {
    name: 'nearest' as const,
    icon: <Icon as={RiTimeLine} />,
  },
  // both
  pin: {
    name: 'pin' as const,
    icon: <Icon as={RiPushpin2Fill} />,
  },
}
