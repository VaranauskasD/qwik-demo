import { createContext } from '@builder.io/qwik'

export const CounterContext = createContext<{ count: number }>(
  'counter-context'
)
