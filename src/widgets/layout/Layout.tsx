import React from 'react'
import {Header} from './ui'
import S from './Layout.module.scss'

export type LayoutProps = {
  header?: boolean
}

export const Layout: React.FC<LayoutProps> = ({header, children}) => (
  <div className={S.wrapper}>
    {header && <Header />}
    <div>{children}</div>
  </div>
)
