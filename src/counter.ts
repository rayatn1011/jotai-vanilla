import { store, counterAtom } from './atoms'

export function setupCounter(element: HTMLButtonElement) {

  const setCounter = (count: number) => {
    store.set(counterAtom, count)
    const counter = store.get(counterAtom)
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(store.get(counterAtom) + 1))
  setCounter(0)
}
