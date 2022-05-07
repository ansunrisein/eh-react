import {Analytics, setUserId} from 'firebase/analytics'

export class AnalyticsService {
  constructor(private analytics: Analytics) {}

  public setUserId(userId?: string) {
    if (userId) {
      setUserId(this.analytics, userId)
    }
  }
}
