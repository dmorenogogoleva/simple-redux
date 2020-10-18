import React from 'react'
import { Todo } from './todo/todo'
import PropTypes from 'prop-types'
import { noop } from '../shared'
import { Store } from '../propTypes/Store'

export const TodoList = ({ todos = [], toggleTodo = noop }) => {
  return (todos.length > 0 ? <div>
    <ul>
      {todos.sort((a, b) => b.id - a.id).map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
  </div> : <p>there are no todos yet</p>)
}

TodoList.propTypes = {
  store: Store,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool,
    text: PropTypes.string.isRequired
  })).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
