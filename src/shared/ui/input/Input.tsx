import React, {forwardRef} from 'react'
import * as S from './styles'

export type InputProps = S.InputStylesProps & React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({background, state, ...props}, ref) => (
    <input css={S.input({background, state})} ref={ref} {...props} />
  ),
)

Input.displayName = 'Input'
