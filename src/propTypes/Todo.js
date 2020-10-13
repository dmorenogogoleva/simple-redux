import PropTypes from 'prop-types'

export const Todo = PropTypes.shape({
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool,
  text: PropTypes.string.isRequired
})