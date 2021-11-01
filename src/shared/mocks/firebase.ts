import {Auth} from 'firebase/auth'
import noop from '@stdlib/utils-noop'

export const authMock: Auth = {
  app: {name: '', automaticDataCollectionEnabled: false, options: {}},
  onAuthStateChanged: () => noop,
  onIdTokenChanged: () => noop,
  currentUser: null,
  name: '',
  config: {
    apiHost: '',
    apiKey: '',
    authDomain: '',
    apiScheme: '',
    sdkClientVersion: '',
    tokenApiHost: '',
  },
  emulatorConfig: null,
  languageCode: null,
  setPersistence: () => Promise.resolve(),
  useDeviceLanguage: noop,
  settings: {
    appVerificationDisabledForTesting: false,
  },
  tenantId: null,
  signOut: () => Promise.resolve(),
  updateCurrentUser: () => Promise.resolve(),
}
