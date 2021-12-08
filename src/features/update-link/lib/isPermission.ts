import {Permission} from '@eh/shared/api'

export const isPermission = (value: unknown): value is Permission =>
  values(Permission).includes(value)

const values = (obj: Record<number | string, unknown>): unknown[] => Object.values(obj)
