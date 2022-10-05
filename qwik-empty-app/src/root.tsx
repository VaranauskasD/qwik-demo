import { Counter } from './components/Counter'
import { Logo } from './components/Logo'
export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Logo />
        <Counter />
      </body>
    </>
  )
}
