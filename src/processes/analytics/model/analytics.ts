import {Domain, guard} from 'effector'
import {Analytics} from 'firebase/analytics'
import {History} from 'history'
import {SessionEntity} from '@eh/entities/session'
import {AnalyticsService} from './service'

export type AnalyticsProcessDeps = {
  domain: Domain
  history: History
  session: SessionEntity
  analytics: Analytics
}

export const createAnalyticsProcess = ({
  domain,
  session,
  history,
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
}
