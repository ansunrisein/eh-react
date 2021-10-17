const PREFIX = 'PERSIST_'

export const restore = (name: string): unknown =>
  handleStorageValue(localStorage.getItem(composeKey(name)))

export const save = (name: string, data: unknown) =>
  localStorage.setItem(composeKey(name), JSON.stringify(data))

export const clear = (name: string) => localStorage.removeItem(composeKey(name))

export const handleStorageValue = (str: string | null) => {
  try {
    return JSON.parse(str || '') || undefined
  } catch (e) {
    return undefined
  }
}

export const composeKey = (name: string) => PREFIX + name
