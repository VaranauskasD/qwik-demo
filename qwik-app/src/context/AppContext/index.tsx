import { createContext } from '@builder.io/qwik'

export interface AppContextType {
  count: number
}

export const AppContext = createContext<AppContextType>('app-context')
