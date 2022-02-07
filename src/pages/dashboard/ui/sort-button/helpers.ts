import {SortState} from './types'

export const mapSortStateToState = (state: SortState): number =>
  state === 'none' ? 0 : state === 'desc' ? 1 : state === 'asc' ? 2 : NaN

export const mapStateToSortState = (state: number): SortState =>
  state === 1 ? 'desc' : state === 2 ? 'asc' : 'none'
