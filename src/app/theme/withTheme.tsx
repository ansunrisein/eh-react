import React from 'react'
import {AppThemeProvider} from '@eh/app/theme/AppThemeProvider'

export const withTheme =
  () =>
  <C extends React.ComponentType<any>>(Component: C) =>
  // eslint-disable-next-line react/display-name
  (props: React.ComponentProps<C>) =>
    (
      <AppThemeProvider>
        <Component {...props} />
      </AppThemeProvider>
    )
