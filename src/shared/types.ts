import React from 'react'

export type Hoc = <Props extends Record<string, unknown>>(
  Component: React.FC<Props>,
) => React.FC<Props>
