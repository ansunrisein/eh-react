import {createDomain} from 'effector'
import {createProviderBuilder} from '@eh/shared/lib/provider-builder'
import {BoardEntityProvider, createBoardEntity} from '@eh/entities/board'
import {BoardLinkEntityProvider, createBoardLinkEntity} from '@eh/entities/board-link'
import {createEventEntity, EventEntityProvider} from '@eh/entities/event'
import {createSessionEntity, SessionEntityProvider} from '@eh/entities/session'
import {
  AuthWithFirebaseFeatureProvider,
  createAuthWithFirebaseFeature,
} from '@eh/features/auth-with-firebase'
import {apollo} from './apollo'
import {auth} from './firebase'

export const domain = createDomain()

export const eventEntity = createEventEntity({domain, apollo})
export const boardEntity = createBoardEntity({domain, apollo})
export const boardLinkEntity = createBoardLinkEntity({domain, apollo})
export const sessionEntity = createSessionEntity({domain, apollo})

export const authWithFirebaseFeature = createAuthWithFirebaseFeature({auth, session: sessionEntity})

export const AppStoreProvider = createProviderBuilder()
  .add(EventEntityProvider, {event: eventEntity})
  .add(BoardEntityProvider, {board: boardEntity})
  .add(BoardLinkEntityProvider, {boardLink: boardLinkEntity})
  .add(SessionEntityProvider, {session: sessionEntity})
  .add(AuthWithFirebaseFeatureProvider, {authWithFirebase: authWithFirebaseFeature})
  .return()
