import React from 'react'
import PropTypes from 'prop-types'

export const Todo = ({ onClick, completed = false, text }) => (
  <li
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