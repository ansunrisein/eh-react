import {AvailableSort} from '../../sorts'
import {SortState} from '../sort-button'

export const mapSortsConfigToObj = (
  sorts: AvailableSort[],
): Partial<Record<AvailableSort, SortState>> =>
  sorts.reduce(
    (acc, sort) => ({
      ...acc,
      [sort]: 'none',
    }),
    {},
  )
