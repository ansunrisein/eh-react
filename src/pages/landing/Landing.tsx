import React from 'react'
import {RiGoogleFill} from 'react-icons/ri'
import {useMedia} from 'react-use'
import {Button} from 'rsuite'
import {Icon} from '@rsuite/icons'
import {Flex} from '@eh/shared/lib/reflexbox'
import {ThemeSwitcher, useTheme} from '@eh/shared/lib/theme'
import {Logo} from '@eh/shared/ui'
import {useLogin} from '@eh/features/auth-with-firebase'
import {Layout} from '@eh/widgets/layout'
import S from './Landing.module.scss'

export const Landing: React.FC = () => {
  const {login, loading} = useLogin()
  const {theme} = useTheme()
  const isPhone = useMedia('(max-width: 768px)')

  const color = isPhone && theme === 'light' ? 'yellow' : 'cyan'

  return (
    <div className={S[theme]}>
      <Layout>
        <div className={S.landing}>
          <ThemeSwitcher color={color} className={S.switcher} appearance="link" />

          <Logo size="lg" className={S.logo} />

          <Button onClick={login} loading={loading} appearance="ghost" color={color}>
            <Flex alignItems="center" gap="0.5rem">
              Login with <Icon as={RiGoogleFill} />
            </Flex>
          </Button>
        </div>
      </Layout>
    </div>
  )
}
