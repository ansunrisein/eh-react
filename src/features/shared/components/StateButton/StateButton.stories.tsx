import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Icon} from 'rsuite'
import {Flex} from 'reflexbox'
import {StateButton, StateButtonProps} from './StateButton'

export default {
  component: StateButton,
  title: 'shared/StateButton',
  argTypes: {
    defaultState: {table: {disable: true}},
    state: {table: {disable: true}},
    states: {table: {disable: true}},
    onChange: {table: {disable: true}},
    neutralState: {table: {disable: true}},
  },
} as Meta

const icons = ['vk', 'twitter', 'instagram', 'twitch'].map((e: any, i) => <Icon key={i} icon={e} />)

export const Icons: Story<StateButtonProps> = props => <StateButton {...props} states={icons} />

const lines = ['plus', 'minus'].map((e: any, i) => (
  <Icon style={{fontSize: '8px'}} key={i} icon={e} />
))

export const WithChildren: Story<StateButtonProps> = props => (
  <Flex width="20vw" justifyContent="space-between">
    <StateButton {...props} states={lines}>
      <Icon icon="vk" />
    </StateButton>
    <StateButton {...props} states={lines} defaultState={1}>
      <Icon icon="apple" />
    </StateButton>
    <StateButton {...props} states={lines} defaultState={2}>
      <Icon icon="youtube-play" />
    </StateButton>
    <StateButton {...props} states={lines}>
      <Icon icon="wifi" />
    </StateButton>
  </Flex>
)

export const WithoutNeutralState: Story<StateButtonProps> = props => (
  <Flex width="20vw" justifyContent="space-between">
    <StateButton {...props} states={lines} neutralState={false}>
      <Icon icon="vk" />
    </StateButton>
    <StateButton {...props} states={lines} neutralState={false}>
      <Icon icon="apple" />
    </StateButton>
    <StateButton {...props} states={lines} neutralState={false}>
      <Icon icon="youtube-play" />
    </StateButton>
    <StateButton {...props} states={lines} neutralState={false}>
      <Icon icon="wifi" />
    </StateButton>
  </Flex>
)
