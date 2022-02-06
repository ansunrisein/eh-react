import React from 'react'
import {
  RiAppleFill,
  RiHeart3Line,
  RiHeartFill,
  RiInstagramFill,
  RiPageSeparator,
  RiTwitchFill,
  RiTwitterFill,
  RiVideoAddFill,
  RiWifiFill,
} from 'react-icons/ri'
import {Icon} from '@rsuite/icons'
import {Meta, Story} from '@storybook/react'
import {Flex} from '@eh/shared/lib/reflexbox'
import {StateButton, StateButtonProps} from './StateButton'

export default {
  component: StateButton,
  title: 'shared/state-button',
  argTypes: {
    defaultState: {table: {disable: true}},
    state: {table: {disable: true}},
    states: {table: {disable: true}},
    onChange: {table: {disable: true}},
    neutralState: {table: {disable: true}},
  },
} as Meta

const icons = [RiTwitchFill, RiInstagramFill, RiTwitterFill].map((e: any, i) => (
  <Icon key={i} as={e} />
))

export const Icons: Story<StateButtonProps> = props => (
  <StateButton {...props} states={icons} style={{width: '3rem'}} block />
)

const lines = [RiHeart3Line, RiHeartFill].map((e: any, i) => (
  <Icon style={{fontSize: '8px'}} key={i} as={e} />
))

export const WithChildren: Story<StateButtonProps> = props => (
  <Flex flexDirection="column" width="3rem">
    <StateButton block {...props} states={lines}>
      <Icon as={RiAppleFill} />
    </StateButton>
    <StateButton block {...props} states={lines} defaultState={1}>
      <Icon as={RiVideoAddFill} />
    </StateButton>
    <StateButton block {...props} states={lines} defaultState={2}>
      <Icon as={RiPageSeparator} />
    </StateButton>
    <StateButton block {...props} states={lines}>
      <Icon as={RiWifiFill} />
    </StateButton>
  </Flex>
)

export const WithoutNeutralState: Story<StateButtonProps> = props => (
  <Flex flexDirection="column" width="3rem">
    <StateButton block {...props} states={lines} neutralState={false}>
      <Icon as={RiAppleFill} />
    </StateButton>
    <StateButton block {...props} states={lines} neutralState={false}>
      <Icon as={RiVideoAddFill} />
    </StateButton>
    <StateButton block {...props} states={lines} neutralState={false}>
      <Icon as={RiPageSeparator} />
    </StateButton>
    <StateButton block {...props} states={lines} neutralState={false}>
      <Icon as={RiWifiFill} />
    </StateButton>
  </Flex>
)
