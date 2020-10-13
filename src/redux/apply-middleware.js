export function applyMiddleware(middleware) {
  return function createStoreWithMiddleware(createStore) {
    return (reducer, state) => {
      const store = createStore(reducer, state)

      return {
        dispatch: action => middleware(store)(store.dispatch)(action),
        getState: store.getState,
      }
    }
  }
}