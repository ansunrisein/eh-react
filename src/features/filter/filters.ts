import {BoardsFilter, EventsFilter} from '@eh/shared/api'

export type AvailableFilter = keyof BoardsFilter | keyof EventsFilter
