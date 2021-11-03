import React from 'react'
import cx from 'classnames'
import {Flex} from '@eh/shared/lib/reflexbox'
import S from './Empty.module.scss'

export const Empty: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    flexGrow={1}
    className={cx(S.empty, className)}
    {...props}
  >
    {children}
  </Flex>
)
