import PropTypes from 'prop-types'

export const Todo = PropTypes.shape({
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
})