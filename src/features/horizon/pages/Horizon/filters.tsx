import React from 'react'
import {ActionIcon} from '@eh/react/ui'

export const filterConfig = [
  // {
  //   name: 'ownership',
  //   icons: [
  //     <ActionIcon key={0} icon="user" disabled />,
  //     <ActionIcon key={1} icon="user" />,
  //     <ActionIcon key={2} icon="team" />,
  //   ],
  // },
  {
    name: 'favorite',
    icons: [
      <ActionIcon key={0} icon="fav" disabled />,
      <ActionIcon key={1} icon="fav" />,
      <ActionIcon key={2} icon="fav" inverted />,
    ],
  },
  {
    name: 'pin',
    icons: [
      <ActionIcon key={0} icon="pin" disabled />,
      <ActionIcon key={1} icon="pin" />,
      <ActionIcon key={2} icon="pin" inverted />,
    ],
  },
]
