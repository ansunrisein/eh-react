import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Icon} from 'rsuite'
import {Filters, FiltersProps} from './Filters'

export default {
  component: Filters,
  title: 'horizon/components/Filters',
  parameters: {layout: 'centered'},
  argTypes: {
    onChange: {table: {disable: true}},
    filters: {table: {disable: true}},
  },
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

export const Usual: Story<FiltersProps> = props => <Filters {...props} filters={filters} />
