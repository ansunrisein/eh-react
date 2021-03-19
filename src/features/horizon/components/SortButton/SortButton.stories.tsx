import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Icon} from 'rsuite'
import {SortButton, SortButtonProps} from './SortButton'

export default {
  component: SortButton,
  title: 'horizon/SortButton',
  parameters: {layout: 'centered'},
  argTypes: {
    onClick: {table: {disable: true}},
    onChange: {table: {disable: true}},
    state: {control: {type: 'inline-radio'}},
  },
} as Meta

export const Usual: Story<SortButtonProps> = props => (
  <SortButton {...props}>
    <Icon icon="heart" />
  </SortButton>
)
