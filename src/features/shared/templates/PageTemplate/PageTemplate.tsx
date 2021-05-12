import React from 'react'
import {Box, Flex} from 'reflexbox'
import {Header} from '@eh/react/features/common/components'
import {useAuth} from '@eh/react/features/shared/contexts/AuthContext'

export const PageTemplate: React.FC = ({children}) => {
  const {user} = useAuth()

  return (
    <Flex minHeight="100vh" flexDirection="column" padding="0 0.5rem 0.5rem">
      <Header isAuthenticated={!!user} />
      <Flex flexGrow={1}>
        <Box as="main" width="100%">
          {children}
        </Box>
      </Flex>
    </Flex>
  )
}
