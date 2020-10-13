import React, { useState } from 'react'
import { Store } from '../propTypes/Store'
import { TodoList } from './todo-list'
import { ADD_TODO, fetchTodo, TOGGLE_TODO } from '../actions'

const initialText = ''
let todoId = 0

export const App = ({ store }) => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState(initialText)

  function add() {
    if (text.length === 0) return

    store.dispatch({
      type: ADD_TODO,
      id: ++todoId,
      text
    })

    setText(initialText)
    setTodos(store.getState())
  }

  function toggle(id) {
    store.dispatch({
      type: TOGGLE_TODO,
      id,
      completed: false
    })

    setTodos(store.getState())
  }


  function fetchNewTodo() {
    store.dispatch(fetchTodo(++todoId, setTodos))
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

      <button type="button" onClick={fetchNewTodo}>fetch</button>

      <TodoList todos={todos}
        toggleTodo={toggle}
      />
    </div>)
}


App.propTypes = {
  store: Store
}