
import { createStore, atom } from 'jotai/vanilla'

export const store = createStore()

export const counterAtom = atom(0)