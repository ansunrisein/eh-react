import React, {useCallback, useEffect, useState} from 'react'
import {clear, composeKey, handleStorageValue, restore, save} from './helpers'

export type UsePersistedStateResult<T> = [
  T,
  React.Dispatch<React.SetStateAction<T>>,
  {
    save(data: T): void
    clear(): void
  },
]

export const usePersistedState = <T extends number | boolean | string | Record<string, unknown>>(
  name: string,
  defaultState: ((data: unknown) => T) | T,
): UsePersistedStateResult<T> => {
  const [state, setReactState] = useState<T>(() => {
    const restored = restore(name)

    if (typeof defaultState === 'function') {
      return defaultState(restored)
    }

    return (restored as T) || defaultState
  })

  const saveState = useCallback(state => save(name, state), [name])
  const clearState = useCallback(() => clear(name), [name])

  const setState = useCallback(
    (newState: React.SetStateAction<T>, ignoreSave = false) => {
      setReactState(oldState => {
        const state = typeof newState === 'function' ? newState(oldState) : newState

        if (!ignoreSave) {
          saveState(state)
        }

        return state
      })
    },
    [saveState],
  )

  useEffect(() => {
    const fn = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === composeKey(name)) {
        setState(handleStorageValue(e.newValue), true)
      }
    }
    window.addEventListener('storage', fn)
    return () => window.removeEventListener('storage', fn)
  }, [name, setState])

  return [state, setState, {save: saveState, clear: clearState}]
}
