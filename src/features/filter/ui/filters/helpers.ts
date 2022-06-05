import {AvailableFilter} from '../../config'

export const mapFiltersConfigToObj = (
  filters: Array<{name: AvailableFilter}>,
): Partial<Record<AvailableFilter, number>> =>
  filters.reduce(
    (acc, e) => ({
      ...acc,
      [e.name]: 0,
    }),
    {},
  )
