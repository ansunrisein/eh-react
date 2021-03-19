import React, {useState} from 'react'
import {Meta, Story} from '@storybook/react'
import {Icon} from 'rsuite'
import {SortButton, SortButtonProps} from './SortButton'
import {SortState} from './types'

export default {
  component: SortButton,
  title: 'horizon/components/SortButton',
  parameters: {layout: 'centered'},
  argTypes: {
    onClick: {table: {disable: true}},
    onChange: {table: {disable: true}},
    state: {control: {type: 'inline-radio'}},
  },
} as Meta

export const Usual: Story<SortButtonProps> = props => (
  <SortButton {...props}>
    <Icon icon="heart" />
  </SortButton>
)

export const Controlled: Story<SortButtonProps> = ({neutralState}) => {
  const [state, setState] = useState<SortState>('none')

  return (
    <SortButton state={state} onChange={setState} neutralState={neutralState}>
      <Icon icon="heart" />
    </SortButton>
  )
}

Controlled.argTypes = {
  state: {table: {disable: true}},
}
