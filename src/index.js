import React from 'react'
import { render } from 'react-dom'
import { todosReducer } from './reducers'
import { createStore } from './redux'
import { App } from './components/app'

const store = createStore(todosReducer)

render(
  <App store={store} />,
  document.getElementById('root')
)