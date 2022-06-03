import {defineMessages} from 'react-intl'

export const texts = defineMessages({
  events: {
    id: 'features.manage-events.manager.events',
    defaultMessage: 'Events',
  },
  removeAllTimeExpiredEvents: {
    id: 'features.manage-events.manager.removeAllTimeExpiredEvents',
    defaultMessage: `There are time-expired <highlight>{count} {count, plural, 
        one {event}
        other {events}
      }</highlight> on the board. You can remove {count, plural, 
        one {it}
        other {them}
      } from the board`,
  },
  selectEventsForRemoving: {
    id: 'features.manage-events.manager.selectEventsForRemoving',
    defaultMessage: `Select events for removing`,
  },
})
