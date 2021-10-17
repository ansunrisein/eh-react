import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Logo, LogoProps} from './Logo'

export default {
  component: Logo,
  title: 'shared/ui/logo',
  argTypes: {
    size: {control: {type: 'inline-radio'}},
  },
} as Meta

export const Default: Story<LogoProps> = props => <Logo {...props} />
