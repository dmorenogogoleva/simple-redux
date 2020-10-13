import React from 'react'
import { render } from 'react-dom'
import { intitialState, todosReducer } from './reducers'
import { applyMiddleware, createStore } from './redux'
import { App } from './components/app'
import { thunk } from './redux'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(todosReducer, intitialState)

render(
  <App store={store} />,
  document.getElementById('root')
)