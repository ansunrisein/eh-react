import React from 'react'
import {Loader} from 'rsuite'
import {FirebaseAuthSuspense} from '@eh/features/auth-with-firebase'
import {Board} from '../pages/board'
import {auth} from './config/firebase'
import {AppStoreProvider} from './config/store'
import {AppThemeProvider} from './theme'

export const App: React.FC = () => (
  <AppStoreProvider>
    <AppThemeProvider>
      <FirebaseAuthSuspense auth={auth} fallback={<Loader />}>
        <Board />
      </FirebaseAuthSuspense>
    </AppThemeProvider>
  </AppStoreProvider>
)
