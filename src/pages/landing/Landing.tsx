import React from 'react'
import {useMedia, useTitle} from 'react-use'
import {LocaleSwitcher} from '@eh/shared/lib/i18n'
import {Flex} from '@eh/shared/lib/reflexbox'
import {ThemeSwitcher, useTheme} from '@eh/shared/lib/theme'
import {Logo} from '@eh/shared/ui'
import {LoginButton} from '@eh/features/auth-with-firebase'
import {Layout} from '@eh/widgets/layout'
import S from './Landing.module.scss'

export const Landing: React.FC = () => {
  useTitle('Event Horizon')

  const {theme} = useTheme()
  const isPhone = useMedia('(max-width: 768px)')

  const color = isPhone && theme === 'light' ? 'yellow' : 'cyan'

  return (
    <div className={S[theme]}>
      <Layout>
        <div className={S.landing}>
          <Flex alignItems="center" alignSelf="flex-end" gap="10px">
            <LocaleSwitcher color={color} />
            <ThemeSwitcher color={color} appearance="link" />
          </Flex>

          <Logo size="lg" className={S.logo} />

          <LoginButton appearance="ghost" color={color} />
        </div>
      </Layout>
    </div>
  )
}
