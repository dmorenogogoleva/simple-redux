import PropTypes from 'prop-types'

export const Store = PropTypes.shape({
  dispatch: PropTypes.func,
  getState: PropTypes.func,
})