import {defineMessages} from 'react-intl'
import {AvailableFilter} from '@eh/features/filter'

export const labels = defineMessages<`${AvailableFilter}${number}`>({
  favorite0: {
    id: 'features.filter.labels.favorite.off',
    defaultMessage: 'Turn off favorite filter',
  },
  favorite1: {
    id: 'features.filter.labels.favorite.include',
    defaultMessage: 'Only favorite',
  },
  favorite2: {
    id: 'features.filter.labels.favorite.exclude',
    defaultMessage: 'Hide favorite',
  },

  pin0: {
    id: 'features.filter.labels.pin.off',
    defaultMessage: 'Turn off pin filter',
  },
  pin1: {
    id: 'features.filter.labels.pin.include',
    defaultMessage: 'Only pinned',
  },
  pin2: {
    id: 'features.filter.labels.exclude',
    defaultMessage: 'Hide pinned',
  },

  ownership0: {
    id: 'features.filter.labels.ownership.off',
    defaultMessage: 'Turn off ownership filter',
  },
  ownership1: {
    id: 'features.filter.labels.ownership.include',
    defaultMessage: 'Only mine',
  },
  ownership2: {
    id: 'features.filter.labels.ownership.exclude',
    defaultMessage: 'Hide mine',
  },

  expired0: {
    id: 'features.filter.labels.expired.off',
    defaultMessage: 'Turn off expiration filter',
  },
  expired1: {
    id: 'features.filter.labels.expired.include',
    defaultMessage: 'Only expired',
  },
  expired2: {
    id: 'features.filter.labels.expired.exclude',
    defaultMessage: 'Hide expired',
  },
})
