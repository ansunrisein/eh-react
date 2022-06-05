import {defineMessages} from 'react-intl'
import {AvailableSort} from '../../sorts'

export const labels = defineMessages<`${AvailableSort}${number}`>({
  favorite0: {
    id: 'features.sort.labels.favorite',
    defaultMessage: 'Do not sort by favorite',
  },
  favorite1: {
    id: 'features.sort.labels.favorite',
    defaultMessage: 'Show favorite first',
  },
  favorite2: {
    id: 'features.sort.labels.favorite',
    defaultMessage: 'Show favorite last',
  },

  nearestEvent0: {
    id: 'features.sort.labels.nearestEvent',
    defaultMessage: 'Do not sort by deadline',
  },
  nearestEvent1: {
    id: 'features.sort.labels.nearestEvent',
    defaultMessage: 'Show boards with nearest event last',
  },
  nearestEvent2: {
    id: 'features.sort.labels.nearestEvent',
    defaultMessage: 'Show boards with nearest event first',
  },

  pin0: {
    id: 'features.sort.labels.pin',
    defaultMessage: 'Do not sort by pinned',
  },
  pin1: {
    id: 'features.sort.labels.pin',
    defaultMessage: 'Show pinned first',
  },
  pin2: {
    id: 'features.sort.labels.pin',
    defaultMessage: 'Show pinned last',
  },

  views0: {
    id: 'features.sort.labels.views',
    defaultMessage: 'Do not sort by popularity',
  },
  views1: {
    id: 'features.sort.labels.views',
    defaultMessage: 'Show popular first',
  },
  views2: {
    id: 'features.sort.labels.views',
    defaultMessage: 'Show popular last',
  },

  nearest0: {
    id: 'features.sort.labels.nearest',
    defaultMessage: 'Do not sort by deadline',
  },
  nearest1: {
    id: 'features.sort.labels.nearest',
    defaultMessage: 'Show nearest last',
  },
  nearest2: {
    id: 'features.sort.labels.nearest',
    defaultMessage: 'Show nearest first',
  },
})
