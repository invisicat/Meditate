import { atom,WritableAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export function atomWithToggleAndStorage(
  key: string,
  initialValue?: boolean,
  storage?: any
): WritableAtom<boolean, boolean | undefined> {
  const anAtom = atomWithStorage(key, initialValue, storage)
  const derivedAtom = atom(
    (get) => get(anAtom),
    (get, set, nextValue?: boolean) => {
      const update = nextValue ?? !get(anAtom)
      set(anAtom, update)
    }
  )

  return derivedAtom;
}
