import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box, Flex} from 'reflexbox'
import {TimerBadge} from './TimerBadge'

export default {
  title: 'TimerBadge',
  component: TimerBadge,
} as Meta

export const Usual: Story = () => (
  <Flex>
    {[236969090, 23696909, 236969, 23696, -5].map((e, i) => (
      <Box key={i} marginRight="1rem">
        <TimerBadge expiryTimestamp={new Date().getTime() + e} />
      </Box>
    ))}
  </Flex>
)
