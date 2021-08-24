import React, {createContext, useCallback, useContext, useState} from 'react'
import noop from '@stdlib/utils-noop'

export type Theme = 'dark' | 'light'

export type ThemeContextType = {
  theme: Theme
  toggle: () => void
}

export type ThemeProviderProps = {
  defaultTheme: Theme
}

export const ThemeContext = createContext<ThemeContextType>({theme: 'light', toggle: noop})

export const ThemeProvider: React.FC<ThemeProviderProps> = ({defaultTheme, children}) => {
  const [theme, setTheme] = useState(defaultTheme)

  const toggle = useCallback(() => setTheme(theme => (theme === 'dark' ? 'light' : 'dark')), [])

  return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext)
