
import { component$, useContext } from '@builder.io/qwik'

import { CounterContext } from '../../context'

export const Notify = component$(() => {

  const state = useContext(CounterContext)

  return (<div>
    <button type="button" onClick$={() => {
      alert(state.count)
    }}>
      Notify
    </button>
  </div >)
})