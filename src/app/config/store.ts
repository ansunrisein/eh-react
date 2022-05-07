import {createDomain} from 'effector'
import {createI18N, I18NProvider} from '@eh/shared/lib/i18n'
import {createProviderBuilder} from '@eh/shared/lib/provider-builder'
import {BoardEntityProvider, createBoardEntity} from '@eh/entities/board'
import {BoardLinkEntityProvider, createBoardLinkEntity} from '@eh/entities/board-link'
import {createEventEntity, EventEntityProvider} from '@eh/entities/event'
import {createSessionEntity, SessionEntityProvider} from '@eh/entities/session'
import {createUserEntity, UserEntityProvider} from '@eh/entities/user'
import {
  AuthWithFirebaseFeatureProvider,
  createAuthWithFirebaseFeature,
} from '@eh/features/auth-with-firebase'
import {createFavoriteBoardFeature, FavoriteBoardFeatureProvider} from '@eh/features/favorite-board'
import {createPinBoardFeature, PinBoardFeatureProvider} from '@eh/features/pin-board'
import {createSubFeature, SubFeatureProvider} from '@eh/features/sub'
import {
  createUpdateUserAvatarFeature,
  UpdateUserAvatarFeatureProvider,
} from '@eh/features/update-user/avatar'
import {createSingleEventWidget, SingleEventWidgetProvider} from '@eh/widgets/single-event'
import {BoardPageProvider, createBoardPage} from '@eh/pages/board'
import {createDashboardPage, DashboardPageProvider} from '@eh/pages/dashboard'
import {createAnalyticsProcess} from '@eh/processes/analytics'
import {apollo} from './apollo'
import {cloudinary} from './cloudinary'
import {analytics, auth} from './firebase'
import {history} from './history'

export const domain = createDomain()

export const i18n = createI18N({
  sourceLocale: 'en-US',
  supportedLocales: [
    {code: 'en-US', name: 'English'},
    {code: 'ru-RU', name: 'Русский'},
    {code: 'uk-UA', name: 'Українська'},
  ],
  domain,
})

export const eventEntity = createEventEntity({domain, apollo})
export const boardEntity = createBoardEntity({domain, apollo})
export const boardLinkEntity = createBoardLinkEntity({domain, apollo})
export const userEntity = createUserEntity({domain, apollo})
export const sessionEntity = createSessionEntity({domain, apollo})

export const authWithFirebaseFeature = createAuthWithFirebaseFeature({auth, session: sessionEntity})
export const updateUserAvatarFeature = createUpdateUserAvatarFeature({
  domain,
  apollo,
  imageUploadService: cloudinary,
})
export const favoriteBoardFeature = createFavoriteBoardFeature({domain, apollo})
export const pinBoardFeature = createPinBoardFeature({domain, apollo})
export const subFeature = createSubFeature({domain, apollo})

export const singleEventWidget = createSingleEventWidget({domain, apollo})

export const dashboardPage = createDashboardPage({domain})
export const boardPage = createBoardPage({
  domain,
  session: sessionEntity,
  event: eventEntity,
  apollo,
})

createAnalyticsProcess({
  domain,
  history,
  session: sessionEntity,
  singleEvent: singleEventWidget,
  boardPage,
  analytics,
})

export const AppStoreProvider = createProviderBuilder()
  .add(I18NProvider, {i18n})
  .add(EventEntityProvider, {event: eventEntity})
  .add(BoardEntityProvider, {board: boardEntity})
  .add(BoardLinkEntityProvider, {boardLink: boardLinkEntity})
  .add(UserEntityProvider, {user: userEntity})
  .add(SessionEntityProvider, {session: sessionEntity})
  .add(AuthWithFirebaseFeatureProvider, {authWithFirebase: authWithFirebaseFeature})
  .add(UpdateUserAvatarFeatureProvider, {updateUserAvatar: updateUserAvatarFeature})
  .add(FavoriteBoardFeatureProvider, {favoriteBoard: favoriteBoardFeature})
  .add(PinBoardFeatureProvider, {pinBoard: pinBoardFeature})
  .add(SubFeatureProvider, {sub: subFeature})
  .add(SingleEventWidgetProvider, {singleEvent: singleEventWidget})
  .add(DashboardPageProvider, {dashboard: dashboardPage})
  .add(BoardPageProvider, {board: boardPage})
  .return()
