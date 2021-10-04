import React from 'react'
import S from './Layout.module.scss'

export const Layout: React.FC = ({children}) => (
  <div className={S.wrapper}>
    <div>{children}</div>
  </div>
)
