import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Flex} from 'reflexbox'
import {Spacing} from '@eh/react/ui'
import {BoardControl} from './BoardControl'

export default {
  component: BoardControl,
  title: 'horizon/BoardControl',
} as Meta

export const Usual: Story = () => (
  <Flex>
    <BoardControl vertical />
    <Spacing space="1rem" />
    <BoardControl />
    <Spacing space="1rem" />
    <BoardControl isPinned />
    <Spacing space="1rem" />
    <BoardControl isFav />
    <Spacing space="1rem" />
    <BoardControl isFav isPinned />
  </Flex>
)
