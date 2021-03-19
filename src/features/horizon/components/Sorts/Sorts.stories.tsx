import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Icon} from 'rsuite'
import {Sorts, SortsProps} from './Sorts'

export default {
  component: Sorts,
  title: 'horizon/Sorts',
  parameters: {layout: 'centered'},
  argTypes: {
    sorts: {table: {disable: true}},
    onChange: {table: {disable: true}},
  },
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

export const Usual: Story<SortsProps> = props => <Sorts {...props} sorts={sorts} />
