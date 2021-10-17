import React from 'react'
import {Flex} from '@eh/shared/lib/reflexbox'

export const Empty: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children, ...props}) => (
  <Flex alignItems="center" justifyContent="center" flexGrow={1} {...props}>
    {children}
  </Flex>
)
