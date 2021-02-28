import React from 'react'
import {Icon} from 'rsuite'

export const filterConfig = [
  {
    name: 'ownership',
    icons: [
      <Icon key={0} icon="avatar" style={{opacity: '0.5'}} />,
      <Icon key={1} icon="avatar" />,
      <Icon key={2} icon="group" />,
    ],
  },
  {
    name: 'favorite',
    icons: [
      <Icon key={0} icon="star" style={{opacity: '0.5'}} />,
      <Icon key={1} icon="star" />,
      <Icon key={2} icon="star-o" />,
    ],
  },
  {
    name: 'pin',
    icons: [
      <Icon key={0} icon="thumb-tack" style={{opacity: '0.5'}} />,
      <Icon key={1} icon="thumb-tack" />,
      <Icon key={2} icon="thumb-tack" rotate={45} />,
    ],
  },
]
