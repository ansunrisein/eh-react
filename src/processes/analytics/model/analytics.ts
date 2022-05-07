import {Domain} from 'effector'
import {Analytics} from 'firebase/analytics'
import {AnalyticsService} from './service'

export type AnalyticsProcessDeps = {
  domain: Domain
  analytics: Analytics
}

export const createAnalyticsProcess = ({domain, analytics}: AnalyticsProcessDeps) => {
  const service = new AnalyticsService(analytics)
}
