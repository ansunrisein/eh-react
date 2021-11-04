import React from 'react'
import {Loader} from 'rsuite'
import {Route, Router, Routes} from '@eh/shared/lib/router'
import {FirebaseAuthSuspense} from '@eh/features/auth-with-firebase'
import {routes} from '@eh/pages/routes'
import {auth} from './config/firebase'
import {history} from './config/history'
import {AppStoreProvider} from './config/store'
import {AppThemeProvider} from './theme'

export const App: React.FC = () => (
  <AppStoreProvider>
    <AppThemeProvider>
      <FirebaseAuthSuspense auth={auth} fallback={<Loader backdrop center size="lg" />}>
        <Router history={history}>
          <Routes>
            {routes.map((route, key) => (
              <Route key={key} {...route} />
            ))}
          </Routes>
        </Router>
      </FirebaseAuthSuspense>
    </AppThemeProvider>
  </AppStoreProvider>
)
