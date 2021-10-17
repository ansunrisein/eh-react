import React, {createContext, useCallback, useContext} from 'react'
import noop from '@stdlib/utils-noop'
import {useMedia} from 'react-use'
import {usePersistedState} from '@eh/shared/lib/use-persisted-state'

export enum ThemeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}
export type Theme = Lowercase<keyof typeof ThemeEnum>

export type ThemeContextType = {
  theme: Theme
  toggle: () => void
}

export type ThemeProviderProps = {
  defaultTheme: Theme
}

export const ThemeContext = createContext<ThemeContextType>({theme: 'light', toggle: noop})

export const ThemeProvider: React.FC<ThemeProviderProps> = ({defaultTheme, children}) => {
  const isDarkThemePreferred = useMedia('(prefers-color-scheme: dark)')
  const [theme, setTheme] = usePersistedState<Theme>('theme', value => {
    if (!value && isDarkThemePreferred) {
      return 'dark'
    }

    return isTheme(value) ? value : defaultTheme
  })

  const toggle = useCallback(
    () => setTheme(theme => (theme === 'dark' ? 'light' : 'dark')),
    [setTheme],
  )

  return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext)

export const isTheme = (value: unknown): value is Theme =>
  typeof value === 'string' && value.toUpperCase() in ThemeEnum
