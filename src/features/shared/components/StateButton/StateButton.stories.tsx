import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Icon} from 'rsuite'
import {Flex} from 'reflexbox'
import {StateButton} from './StateButton'

export default {
  component: StateButton,
  title: 'StateButton',
} as Meta

const icons = ['vk', 'twitter', 'instagram', 'twitch'].map((e: any, i) => <Icon key={i} icon={e} />)

export const Icons: Story = () => <StateButton states={icons} />

const lines = ['plus', 'minus'].map((e: any, i) => (
  <Icon style={{fontSize: '8px'}} key={i} icon={e} />
))

export const WithChildren: Story = () => (
  <Flex width="20vw" justifyContent="space-between">
    <StateButton states={lines}>
      <Icon icon={'vk'} />
    </StateButton>
    <StateButton states={lines} defaultState={1}>
      <Icon icon={'apple'} />
    </StateButton>
    <StateButton states={lines} defaultState={2}>
      <Icon icon={'youtube-play'} />
    </StateButton>
    <StateButton states={lines}>
      <Icon icon={'wifi'} />
    </StateButton>
  </Flex>
)

export const WithoutNeutralState: Story = () => (
  <Flex width="20vw" justifyContent="space-between">
    <StateButton states={lines} neutralState={false}>
      <Icon icon={'vk'} />
    </StateButton>
    <StateButton states={lines} neutralState={false}>
      <Icon icon={'apple'} />
    </StateButton>
    <StateButton states={lines} neutralState={false}>
      <Icon icon={'youtube-play'} />
    </StateButton>
    <StateButton states={lines} neutralState={false}>
      <Icon icon={'wifi'} />
    </StateButton>
  </Flex>
)
