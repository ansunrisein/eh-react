import React from 'react'
import {useBodyClassName} from './useBodyClassName'

export type BodyClassNameProps = {
  className: string
}

export const BodyClassName: React.FC<BodyClassNameProps> = ({className}) => {
  useBodyClassName(className)

  return null
}
