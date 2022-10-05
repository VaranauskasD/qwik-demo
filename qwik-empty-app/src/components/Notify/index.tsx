import { component$, useStore, useContext } from '@builder.io/qwik'

export const Notify = component$(() => {
  return (
    <div>
      <p>
        <button
          onClick$={() => {
            alert('hi')
          }}
        >
          Notify
        </button>
      </p>
    </div>
  )
})
