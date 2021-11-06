import React from 'react'
import {Loader} from 'rsuite'
import {Header} from './ui'
import S from './Layout.module.scss'

export type LayoutProps = {
  header?: boolean
  loading?: boolean
}

export const Layout: React.FC<LayoutProps> = ({header, loading, children}) => (
  <div className={S.wrapper}>
    {header && <Header />}
    <div className={S.children}>
      {loading ? <Loader backdrop center size="lg" /> : <>{children}</>}
    </div>
  </div>
)
