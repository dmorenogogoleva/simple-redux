export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const FETCH_TODO = 'FETCH_TODO'

export function fetchTodo(id, updateState) {
  return async function (dispatch, getState) {
    const data = await fetch('https://sv443.net/jokeapi/v2/joke/Any').then(response => response.json())

    dispatch({
      type: ADD_TODO,
      id,
      text: data.joke || `${data.setup} ${data.delivery}`
    })

    updateState(getState())
  }
}