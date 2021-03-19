import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Icon} from 'rsuite'
import {SortButton} from './SortButton'

export default {
  component: SortButton,
  title: 'horizon/SortButton',
} as Meta

export const Usual: Story = () => (
  <SortButton>
    <Icon icon="heart" />
  </SortButton>
)
