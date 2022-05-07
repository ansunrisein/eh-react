import {Domain} from 'effector'
import {Analytics} from 'firebase/analytics'
import {SessionEntity} from '@eh/entities/session'
import {AnalyticsService} from './service'

export type AnalyticsProcessDeps = {
  domain: Domain
  session: SessionEntity
  analytics: Analytics
}

export const createAnalyticsProcess = ({domain, session, analytics}: AnalyticsProcessDeps) => {
  const service = new AnalyticsService(analytics)

  session.$me.watch(me => {
    service.setUserId(me?._id)
  })
}
