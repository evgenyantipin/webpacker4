import { createStore } from 'redux'
import reducers, { typesApp } from './reducers'

const reduxDevTools = () => {
  if (
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
  ) {
    return window.devToolsExtension()
  }
}

const store = ({ data }) => {
  const action = { type: typesApp.HYDRATE, data: data || {} }
  const startingState = reducers(undefined, action)

  return createStore(reducers, startingState, reduxDevTools())
}

export default store
