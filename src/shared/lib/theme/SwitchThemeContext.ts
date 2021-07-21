import {createContext, useContext} from 'react'

export enum ThemeKindEnum {}
export type ThemeKind = keyof typeof ThemeKindEnum

export type SwitchThemeContextType = (theme: ThemeKind) => void

export const SwitchThemeContext = createContext<SwitchThemeContextType>(() => {})

export const useSwitchTheme = () => useContext(SwitchThemeContext)
