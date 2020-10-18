import React from 'react'
import PropTypes from 'prop-types'
import './todo.css'

export const Todo = ({ onClick, completed = false, text }) => (
  <li
    className="todo"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)


Todo.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool,
  text: PropTypes.string.isRequired
}