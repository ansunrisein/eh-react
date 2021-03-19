import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box} from 'reflexbox'
import {Dashboard, DashboardProps} from './Dashboard'
import {boards, filters, sorts} from './testData'

export default {
  component: Dashboard,
  title: 'horizon/Dashboard',
  argTypes: {
    boards: {table: {disable: true}},
    filters: {table: {disable: true}},
    sorts: {table: {disable: true}},
    onFiltersChange: {table: {disable: true}},
    onSortsChange: {table: {disable: true}},
    onCreateBoardClick: {table: {disable: true}},
    defaultDisplay: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<DashboardProps> = props => (
  <Box height="calc(100vh - 2rem)">
    <Dashboard {...props} filters={filters} sorts={sorts} boards={boards} />
  </Box>
)
