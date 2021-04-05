import * as R from 'ramda'

export const listToFields: <T>(list: T[]) => Array<{value: T}> = R.map(R.objOf('value'))

export const fieldsToList: <T>(fields: Array<{value: T}>) => T[] = R.map(R.prop('value'))
