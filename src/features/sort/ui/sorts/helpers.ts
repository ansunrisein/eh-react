import {AvailableSort} from '../../config'
import {SortState} from '../sort-button'

export const mapSortsConfigToObj = (
  sorts: Array<{name: AvailableSort}>,
): Partial<Record<AvailableSort, SortState>> =>
  sorts.reduce(
    (acc, e) => ({
      ...acc,
      [e.name]: 'none',
    }),
    {},
  )
