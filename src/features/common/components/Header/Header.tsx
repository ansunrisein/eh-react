import React from 'react'
import {Flex} from 'reflexbox'
import {Icon} from 'rsuite'
import {Logo} from '@eh/react/ui'

export const Header: React.FC = () => (
  <Flex as="header" justifyContent="space-between" alignItems="center" padding="0.5rem">
    <div>
      <Icon icon="dashboard" size="2x" />
    </div>
    <Logo />
    <div>
      <Icon icon="user" size="2x" />
    </div>
  </Flex>
)
