import React from 'react'
import {Meta, Story} from '@storybook/react'
import {PageTemplate} from './PageTemplate'

export default {
  component: PageTemplate,
  title: 'shared/PageTemplate',
  parameters: {layout: 'fullscreen'},
} as Meta

export const Usual: Story = props => <PageTemplate {...props} />
