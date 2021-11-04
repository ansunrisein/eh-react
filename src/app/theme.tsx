import React from 'react'
import {BodyClassName} from '@eh/shared/lib/body-class-name'
import {ThemeContext, ThemeProvider} from '@eh/shared/lib/theme'

export const AppThemeProvider: React.FC = ({children}) => (
  <ThemeProvider defaultTheme="dark">
    <ThemeContext.Consumer>
      {({theme}) => <BodyClassName className={`rs-theme-${theme}`} />}
    </ThemeContext.Consumer>
    {children}
  </ThemeProvider>
)
