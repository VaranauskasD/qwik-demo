
import { component$, useContext } from '@builder.io/qwik'

import { CounterContext } from '../../context'

export const IterateMultiple = component$(() => {

  const state = useContext(CounterContext)

  return (
    <div>
      <button type="button" onClick$={() => {
        state.count += 2
      }}>
        Iincriment Count +2
      </button>
    </div>
  )
})