import {createDomain} from 'effector'
import {createProviderBuilder} from '@eh/shared/lib/provider-builder'
import {BoardEntityProvider, createBoardEntity} from '@eh/entities/board'
import {createEventEntity, EventEntityProvider} from '@eh/entities/event'
import {createSessionEntity, SessionEntityProvider} from '@eh/entities/session'
import {
  AuthWithFirebaseFeatureProvider,
  createAuthWithFirebaseFeature,
} from '@eh/features/auth-with-firebase'
import {createUpdateEventFeature, UpdateEventFeatureProvider} from '@eh/features/update-event/model'
import {createDashboardPage, DashboardPageProvider} from '@eh/pages/dashboard/model'
import {auth} from './firebase'

export const domain = createDomain()

export const eventEntity = createEventEntity({domain})
export const boardEntity = createBoardEntity({domain})
export const sessionEntity = createSessionEntity({domain})

export const authWithFirebaseFeature = createAuthWithFirebaseFeature({auth, session: sessionEntity})
export const updateEventFeature = createUpdateEventFeature({eventEntity, boardEntity, domain})

export const dashboardPage = createDashboardPage({boardEntity, eventEntity})

export const AppStoreProvider = createProviderBuilder()
  .add(EventEntityProvider, {event: eventEntity})
  .add(BoardEntityProvider, {board: boardEntity})
  .add(SessionEntityProvider, {session: sessionEntity})
  .add(AuthWithFirebaseFeatureProvider, {authWithFirebase: authWithFirebaseFeature})
  .add(UpdateEventFeatureProvider, {updateEvent: updateEventFeature})
  .add(DashboardPageProvider, {dashboard: dashboardPage})
  .return()
