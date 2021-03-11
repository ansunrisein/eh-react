import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Icon} from 'rsuite'
import {Filters} from './Filters'

export default {
  component: Filters,
  title: 'horizon/Filters',
} as Meta

const filters = [
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

export const Usual: Story = () => <Filters filters={filters} />
