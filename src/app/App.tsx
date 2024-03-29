import React from 'react'
import {Loader} from 'rsuite'
import {ApolloProvider} from '@apollo/client'
import {Navigate, Route, Router, Routes} from '@eh/shared/lib/router'
import {AuthGuard, MeSuspense} from '@eh/entities/session'
import {FirebaseAuthSuspense} from '@eh/features/auth-with-firebase'
import {routes} from '@eh/pages/routes'
import {apollo, AppStoreProvider, auth, history} from './config'
import {AppThemeProvider} from './theme'

export const App: React.FC = () => (
  <ApolloProvider client={apollo}>
    <AppStoreProvider>
      <AppThemeProvider>
        <FirebaseAuthSuspense auth={auth} fallback={<Loader backdrop center size="lg" />}>
          <MeSuspense fallback={<Loader backdrop center size="lg" />}>
            <Router history={history}>
              <Routes>
                {routes.map(({element, isPrivate, isPublic, ...route}, key) => (
                  <Route
                    key={key}
                    {...route}
                    element={
                      <AuthGuard
                        isPrivate={isPrivate}
                        isPublic={isPublic}
                        privateFallback={<Navigate to="/id" />}
                        publicFallback={<Navigate to="/" />}
                      >
                        {element}
                      </AuthGuard>
                    }
                  />
                ))}
              </Routes>
            </Router>
          </MeSuspense>
        </FirebaseAuthSuspense>
      </AppThemeProvider>
    </AppStoreProvider>
  </ApolloProvider>
)
