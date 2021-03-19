import React from 'react'
import {Meta, Story} from '@storybook/react'
import {FilterButton, FilterButtonProps} from './FilterButton'

export default {
  component: FilterButton,
  title: 'horizon/FilterButton',
  parameters: {layout: 'centered', controls: {hideNoControlsWarning: true}},
} as Meta

export const Usual: Story<FilterButtonProps> = props => (
  <FilterButton {...props}>
    <div>a</div>
    <div>b</div>
    <div>c</div>
  </FilterButton>
)
