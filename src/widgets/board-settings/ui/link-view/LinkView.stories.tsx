import React from 'react'
import {Meta, Story} from '@storybook/react'
import {Permission} from '@eh/shared/api'
import {BoardLinkFragment} from '@eh/entities/board-link'
import {LinkView, LinkViewProps} from './LinkView'

export default {
  title: 'widgets/board-settings',
  component: LinkView,
  args: {
    linkId: '1',
  },
} as Meta<LinkViewProps>

const boardLink: BoardLinkFragment = {
  _id: '1',
  link: '21341',
  name: 'Link',
  __typename: 'BoardLink',
  permissions: [
    Permission.CREATE_EVENT,
    Permission.UPDATE_BOARD_LINK,
    Permission.UPDATE_EVENT,
    Permission.VIEW_BOARD_LINK,
  ],
}

export const Default: Story<LinkViewProps> = props => <LinkView {...props} />
