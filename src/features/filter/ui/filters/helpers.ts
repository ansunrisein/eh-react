import {AvailableFilter} from '../../filters'

export const mapFiltersConfigToObj = (
  filters: AvailableFilter[],
): Partial<Record<AvailableFilter, number>> =>
  filters.reduce(
    (acc, e) => ({
      ...acc,
      [e]: 0,
    }),
    {},
  )
