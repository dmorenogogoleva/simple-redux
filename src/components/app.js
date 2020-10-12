import React, { useState } from 'react'
import { addTodo, toggleTodo } from '../actions'
import { Store } from '../propTypes/Store'
import { TodoList } from './todo-list'

const initialText = ''

export const App = ({ store }) => {
  const [text, setText] = useState(initialText)
  const [todos, setTodos] = useState([])

  function add() {
    store.dispatch(addTodo(text))
    setTodos(store.getState())

    setText(initialText)
  }

  function toggle(id) {
    store.dispatch(toggleTodo(id))
    setTodos(store.getState())
  }

  return (
    <div>
      <input
        placeholder="add new todo"
        name="todo"
        value={text || initialText}
        onChange={(evt) => setText(evt.target.value)}
      />
      <button type="button" onClick={add}>add</button>

      <TodoList todos={todos}
        toggleTodo={toggle}
      />
    </div>)
}


App.propTypes = {
  store: Store
}