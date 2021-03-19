import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Box, Flex} from 'reflexbox'
import {TimerBadge, TimerBadgeProps} from './TimerBadge'

export default {
  title: 'horizon/TimerBadge',
  component: TimerBadge,
  parameters: {layout: 'centered', controls: {hideNoControlsWarning: true}},
  argTypes: {
    onExpire: {table: {disable: true}},
  },
} as Meta

export const Usual: Story<TimerBadgeProps> = props => (
  <Flex>
    {[236969090, 23696909, 236969, 23696, -5].map((e, i) => (
      <Box key={i} marginRight="1rem">
        <TimerBadge {...props} expiryTimestamp={new Date().getTime() + e} />
      </Box>
    ))}
  </Flex>
)

export const Custom: Story<TimerBadgeProps> = props => <TimerBadge {...props} />

Custom.argTypes = {
  expiryTimestamp: {control: {type: 'date'}, defaultValue: new Date()},
}
