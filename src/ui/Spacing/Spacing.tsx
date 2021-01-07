import React from 'react'
import {Box} from 'reflexbox'

export type SpacingProps = {
  vertical?: boolean
  space: string | number
}

export const Spacing: React.FC<SpacingProps> = ({vertical, space}) => {
  return <Box width={vertical ? '0' : space} height={vertical ? space : '0'} flexShrink={0} />
}
