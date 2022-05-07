import {Domain, guard} from 'effector'
import {Analytics} from 'firebase/analytics'
import {History} from 'history'
import {SessionEntity} from '@eh/entities/session'
import {BoardSettingsWidget} from '@eh/widgets/board-settings/model'
import {SingleEventWidget} from '@eh/widgets/single-event'
import {BoardPage} from '@eh/pages/board'
import {AnalyticsService} from './service'

export type AnalyticsProcessDeps = {
  domain: Domain
  history: History
  session: SessionEntity
  boardSettingsWidget: BoardSettingsWidget
  singleEvent: SingleEventWidget
  boardPage: BoardPage
  analytics: Analytics
}

export const createAnalyticsProcess = ({
  domain,
  history,
  session,
  boardSettingsWidget,
  singleEvent,
  boardPage,
  analytics,
}: AnalyticsProcessDeps) => {
  const service = new AnalyticsService(analytics)

  session.$me.watch(me => {
    service.setUserId(me?._id)
  })

  guard({
    source: session.$isMeFetched,
    filter: Boolean,
    target: domain.effect(() => {
      const track = () =>
        service.trackPageView({
          path: window.location.pathname,
          location: window.location.href,
          title: window.document.title,
        })

      track()
      history.listen(track)
    }),
  })

  boardSettingsWidget.copyLinkFx.done.watch(({params: {boardId}}) =>
    service.trackLinkCopy({boardId}),
  )

  singleEvent.fetchEventFx.doneData.watch(
    event => event && service.trackEvent({eventId: event._id}),
  )

  boardPage.fetchBoardFx.doneData.watch(board => board && service.trackBoard({boardId: board._id}))
}
