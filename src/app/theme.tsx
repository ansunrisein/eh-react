import React from 'react'
import {ThemeContext, ThemeProvider} from '../shared/lib/theme'
import {BodyClassName} from '../shared/lib/body-class-name'

export const AppThemeProvider: React.FC = ({children}) => (
  <ThemeProvider defaultTheme="light">
    <ThemeContext.Consumer>
      {({theme}) => <BodyClassName className={`rs-theme-${theme}`} />}
    </ThemeContext.Consumer>
    {children}
  </ThemeProvider>
)
