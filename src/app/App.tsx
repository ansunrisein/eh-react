import React from 'react'
import {Board} from '../pages/board'
import {AppStoreProvider} from './store'
import {AppThemeProvider} from './theme'

export const App: React.FC = () => (
  <AppStoreProvider>
    <AppThemeProvider>
      <Board />
    </AppThemeProvider>
  </AppStoreProvider>
)
