import React from 'react'
import {useMedia} from 'react-use'
import {ThemeSwitcher, useTheme} from '@eh/shared/lib/theme'
import {Logo} from '@eh/shared/ui'
import {LoginButton} from '@eh/features/auth-with-firebase'
import {Layout} from '@eh/widgets/layout'
import S from './Landing.module.scss'

export const Landing: React.FC = () => {
  const {theme} = useTheme()
  const isPhone = useMedia('(max-width: 768px)')

  const color = isPhone && theme === 'light' ? 'yellow' : 'cyan'

  return (
    <div className={S[theme]}>
      <Layout>
        <div className={S.landing}>
          <ThemeSwitcher color={color} className={S.switcher} appearance="link" />

          <Logo size="lg" className={S.logo} />

          <LoginButton appearance="ghost" color={color} />
        </div>
      </Layout>
    </div>
  )
}
