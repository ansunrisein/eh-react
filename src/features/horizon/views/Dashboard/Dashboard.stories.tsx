import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box} from 'reflexbox'
import {Dashboard} from './Dashboard'
import {boards, filters, sorts} from './testData'

export default {
  component: Dashboard,
  title: 'horizon/Dashboard',
} as Meta

export const Usual: Story = () => (
  <Box height="calc(100vh - 2rem)">
    <Dashboard filters={filters} sorts={sorts} boards={boards} />
  </Box>
)
