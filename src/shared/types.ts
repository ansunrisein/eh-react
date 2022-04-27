import React from 'react'
import {Effect, Event} from 'effector'

export type Hoc = <Props>(Component: React.FC<Props>) => React.FC<Props>

export type RemoveEffector<T> = T extends Effect<infer A, infer R>
  ? A extends void
    ? () => Promise<R>
    : (arg: A) => Promise<R>
  : T extends Event<infer A>
  ? A extends void
    ? () => void
    : (arg: A) => A
  : T extends Record<string, unknown>
  ? {
      [K in keyof T]: RemoveEffector<T[K]>
    }
  : T

export type RemoveNulls<T> = T extends null
  ? Exclude<T, null>
  : T extends Record<string, unknown>
  ? {
      [K in keyof T]: RemoveNulls<T[K]>
    }
  : T
