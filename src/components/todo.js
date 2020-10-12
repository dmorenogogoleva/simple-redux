import React from 'react'
import { Todo as TodoType } from '../propTypes/Todo'

export const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)


Todo.propTypes = TodoType