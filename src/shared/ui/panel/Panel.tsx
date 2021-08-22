import React from 'react'
import * as S from './styles'

export type PanelProps = {
  header?: React.ReactNode
} & S.PanelStylesProps

export const Panel: React.FC<PanelProps> = ({bordered, shaded, size, header, children}) => (
  <div css={S.panel({bordered, shaded, size})}>
    {header}
    <div css={!!header && S.children}>{children}</div>
  </div>
)
