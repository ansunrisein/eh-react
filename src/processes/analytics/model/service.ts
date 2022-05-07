import {Analytics, logEvent, setUserId} from 'firebase/analytics'

export class AnalyticsService {
  constructor(private analytics: Analytics) {}

  public setUserId(userId?: string) {
    if (userId) {
      setUserId(this.analytics, userId)
    }
  }

  public trackPageView({title, path, location}: {path: string; title: string; location: string}) {
    logEvent(this.analytics, 'page_view', {
      page_title: title,
      page_path: path,
      page_location: location,
    })
  }

  public trackEvent({eventId}: {eventId: string}) {
    logEvent(this.analytics, 'event', {item_id: eventId})
  }

  public trackBoard({boardId}: {boardId: string}) {
    logEvent(this.analytics, 'board', {item_id: boardId})
  }
}
