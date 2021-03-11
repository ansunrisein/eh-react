import React from 'react'
import {Meta, Story} from '@storybook/react'
import {FilterButton} from './FilterButton'

export default {
  component: FilterButton,
  title: 'horizon/FilterButton',
} as Meta

export const Usual: Story = () => (
  <FilterButton>
    <div>a</div>
    <div>b</div>
    <div>c</div>
  </FilterButton>
)
