import {SortState} from '../SortButton'

export const mapSortsConfigToObj = (sorts: Array<{name: string}>): Record<string, SortState> =>
  sorts.reduce(
    (acc, e) => ({
      ...acc,
      [e.name]: 'none',
    }),
    {},
  )
