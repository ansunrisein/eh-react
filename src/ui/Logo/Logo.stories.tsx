import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Logo} from './Logo'

export default {
  component: Logo,
  title: 'ui/Logo',
} as Meta

export const Usual: Story = () => <Logo />
