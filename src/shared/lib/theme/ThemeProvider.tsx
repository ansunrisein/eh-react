import React, {useState} from 'react'
import {Theme, ThemeProvider as EmotionThemeProvider} from '@emotion/react'
import {ThemeKind, SwitchThemeContext} from './SwitchThemeContext'

export type ThemeProviderProps = {
  defaultTheme: ThemeKind
  themes: Record<ThemeKind, Theme>
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({defaultTheme, themes, children}) => {
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <SwitchThemeContext.Provider value={setTheme}>
      <EmotionThemeProvider theme={themes[theme]}>{children}</EmotionThemeProvider>
    </SwitchThemeContext.Provider>
  )
}
