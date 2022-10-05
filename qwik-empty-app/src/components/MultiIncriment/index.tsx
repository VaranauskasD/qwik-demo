import { component$, useStore, useContext } from '@builder.io/qwik'
import { CounterContext } from '../../context'

import { Notify } from '../Notify'

export const MultiIncriment = component$(({ count }: { count: number }) => {
  const store = useContext(CounterContext)
  return (
    <div>
      <p>
        <button
          onClick$={() => {
            store.count += 2
          }}
        >
          Increment by 2
        </button>
      </p>
    </div>
  )
})
