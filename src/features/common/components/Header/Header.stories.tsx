import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Header} from './Header'

export default {
  component: Header,
  title: 'common/Header',
  parameters: {controls: {hideNoControlsWarning: true}},
} as Meta

export const Usual: Story = () => <Header />
