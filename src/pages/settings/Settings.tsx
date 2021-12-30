import React from 'react'
import {useTitle} from 'react-use'
import {EditUserAvatarForm} from '@eh/features/update-user/avatar'
import {EditUserInfoForm} from '@eh/features/update-user/info'
import {Layout} from '@eh/widgets/layout'
import S from './Settings.module.scss'

export const Settings: React.FC = () => {
  useTitle('Settings')

  return (
    <Layout header>
      <div className={S.settings}>
        <EditUserAvatarForm />

        <div className={S.info}>
          <EditUserInfoForm />
        </div>
      </div>
    </Layout>
  )
}
