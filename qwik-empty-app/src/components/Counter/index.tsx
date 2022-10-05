import { component$, useStore, useContextProvider } from '@builder.io/qwik'

// import { CounterContext } from '../../context'

import { Notify } from '../Notify'
// import { MultiIncriment } from '../MultiIncriment'

export const Counter = component$(() => {
  const store = useStore({ count: 5 })

  // useContextProvider(CounterContext, store)

  return (
    <div>
      <p>Count: {store.count}</p>
      <p>
        <button
          onClick$={() => {
            alert('hi')
            store.count++
          }}
        >
          Increment
        </button>
        {/* <MultiIncriment count={store.count} /> */}
        <Notify />
      </p>
    </div>
  )
})
