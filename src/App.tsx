import React, {Suspense} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import {Loader} from 'rsuite'

import {firebase} from '@eh/react/configs/firebase'
import {cloudinary} from '@eh/react/configs/cloudinary'
import {createApolloClient} from '@eh/react/configs/apollo'

import {ModalProvider} from '@eh/react/features/shared/contexts/ModalContext'
import {CloudinaryProvider} from '@eh/react/features/shared/contexts/FileUploadContext'
import {AppApolloProvider} from '@eh/react/features/shared/contexts/AppApolloProvider'
import {FirebaseAuthProvider} from '@eh/react/features/shared/contexts/AuthContext'

import {UserSuspense} from '@eh/react/features/common/components'

import {EventModals} from '@eh/react/features/event'
import {IdRoutes} from '@eh/react/features/id'
import {HorizonModals, HorizonRoutes} from '@eh/react/features/horizon'
import {UserRoutes} from '@eh/react/features/user'
import {PublicRoute} from '@eh/react/routes'

export const App: React.FC = () => (
  <Suspense fallback={null}>
    <BrowserRouter>
      <FirebaseAuthProvider firebaseApp={firebase}>
        <UserSuspense fallback={<Loader size="lg" backdrop />}>
          <AppApolloProvider createApolloClient={createApolloClient}>
            <CloudinaryProvider config={cloudinary}>
              <ModalProvider>
                <Switch>
                  <Route path="/user">
                    <UserRoutes />
                  </Route>
                  <PublicRoute path="/id">
                    <IdRoutes />
                  </PublicRoute>
                  <Route path="/horizon">
                    <HorizonRoutes />
                  </Route>
                  <Route path="/">
                    <Redirect to="/id" />
                  </Route>
                  <Route path="/">
                    <Redirect to="/horizon" />
                  </Route>
                </Switch>
                <EventModals />
                <HorizonModals />
              </ModalProvider>
            </CloudinaryProvider>
          </AppApolloProvider>
        </UserSuspense>
      </FirebaseAuthProvider>
    </BrowserRouter>
  </Suspense>
)
