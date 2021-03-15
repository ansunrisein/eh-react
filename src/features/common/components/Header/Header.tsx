import React from 'react'
import {Flex} from 'reflexbox'
import {Icon, Popover, Whisper} from 'rsuite'
import {Logo} from '@eh/react/ui'
import {UserMenu} from '../UserMenu'

export const Header: React.FC = () => (
  <Flex as="header" justifyContent="space-between" alignItems="center" padding="0.5rem">
    <div>
      <Icon icon="dashboard" size="2x" />
    </div>
    <Logo />
    <Whisper
      placement="bottomEnd"
      trigger="click"
      speaker={
        <Popover full>
          <UserMenu style={{width: '10rem'}} />
        </Popover>
      }
    >
      <Icon icon="user" size="2x" />
    </Whisper>
  </Flex>
)
