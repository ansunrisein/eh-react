import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Icon} from 'rsuite'
import {Sorts} from './Sorts'

export default {
  component: Sorts,
  title: 'Sorts',
} as Meta

const sorts = [
  {
    name: 'nearestEvent',
    icon: <Icon icon="pie-chart" />,
  },
  {
    name: 'favorite',
    icon: <Icon icon="star" />,
  },
  {
    name: 'subsCount',
    icon: <Icon icon="group" />,
  },
  {
    name: 'pin',
    icon: <Icon icon="thumb-tack" />,
  },
]

export const Usual: Story = () => <Sorts sorts={sorts} />
