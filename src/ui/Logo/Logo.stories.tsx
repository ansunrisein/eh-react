import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Logo, LogoProps} from './Logo'

export default {
  component: Logo,
  title: 'ui/Logo',
} as Meta

export const Usual: Story<LogoProps> = props => <Logo {...props} />
