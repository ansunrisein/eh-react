import React from 'react'
import {ThemeProvider} from '@eh/shared/ui'
import * as themes from './themes'

export const AppThemeProvider: React.FC = ({children}) => (
  <ThemeProvider defaultTheme="light" themes={themes}>
    {children}
  </ThemeProvider>
)
