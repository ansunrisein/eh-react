import React from 'react'
import {Meta, Story} from '@storybook/react'
import {SortButton} from './SortButton'

export default {
  component: SortButton,
  title: 'SortButton',
} as Meta

export const Usual: Story = () => <SortButton />
