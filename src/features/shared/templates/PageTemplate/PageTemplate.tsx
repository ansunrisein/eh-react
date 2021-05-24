import React from 'react'
import {Box, Flex} from 'reflexbox'
import {useHistory} from 'react-router-dom'
import {Header} from '@eh/react/features/common/components'
import {useAuth} from '../../contexts/AuthContext'
import {useLogout} from '../../hooks'

export const PageTemplate: React.FC = ({children}) => {
  const {user} = useAuth()
  const logout = useLogout()
  const history = useHistory()

  return (
    <Flex minHeight="100vh" flexDirection="column" padding="0 0.5rem 0.5rem">
      <Header
        isAuthenticated={!!user}
        onDashboardClick={() => history.push('/horizon')}
        onProfileClick={() => history.push('/user/settings')}
        onLogOutClick={logout}
      />
      <Flex flexGrow={1}>
        <Box as="main" width="100%">
          {children}
        </Box>
      </Flex>
    </Flex>
  )
}
