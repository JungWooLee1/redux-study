// State argument is not application state, only the state
// this reducer is responsible for

export default function(state, action) {

  switch(action.type) {
    case 'BOOK_SELECTED': {
      return action.payload
    }
   }

  return state
}