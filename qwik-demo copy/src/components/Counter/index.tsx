import { component$, useStore, useContextProvider } from '@builder.io/qwik'

import { CounterContext } from '../../context'
import { IterateMultiple } from '../IterateMultiple'
import { Notify } from '../Notify'

export const Counter = component$(() => {

  const state = useStore({ count: 5 })
  useContextProvider(CounterContext, state)

  return (
    <div>
      <p>Count: {state.count}</p>
      <button type="button" onClick$={() => {
        state.count++
      }}>
        Incriment Count
      </button>
      <Notify />
      <IterateMultiple />
    </div>
  )
})