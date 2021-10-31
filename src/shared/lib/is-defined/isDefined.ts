export type Falsy = null | undefined | false | 0 | 0n | ''
export type NonFalsy<T> = Exclude<T, Falsy>

export const isDefined = <T>(v: T): v is NonFalsy<T> => !!v
