import {createDomain} from 'effector'
import {createProviderBuilder} from '@eh/shared/lib/provider-builder'
import {createEventEntity, EventEntityProvider} from '@eh/entities/event'
import {createSessionEntity, SessionEntityProvider} from '@eh/entities/session'
import {
  AuthWithFirebaseFeatureProvider,
  createAuthWithFirebaseFeature,
} from '@eh/features/auth-with-firebase'
import {BoardEntityProvider, createBoardEntity} from '@eh/entities/board'
import {auth} from './firebase'

const domain = createDomain()

const eventEntity = createEventEntity({domain})
const boardEntity = createBoardEntity({domain})
const sessionEntity = createSessionEntity({domain})

const authWithFirebaseFeature = createAuthWithFirebaseFeature({auth, session: sessionEntity})

export const AppStoreProvider = createProviderBuilder()
  .add(EventEntityProvider, {event: eventEntity})
  .add(BoardEntityProvider, {board: boardEntity})
  .add(SessionEntityProvider, {session: sessionEntity})
  .add(AuthWithFirebaseFeatureProvider, {authWithFirebase: authWithFirebaseFeature})
  .return()
