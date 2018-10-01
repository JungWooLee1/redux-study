// State argument is not application state, only the state
// this reducer is responsible for

// 리듀서는 언제나 undefined가 아닌 값을 반환하여야 한다.
// undefined를 반환하면 에러가 발생한다.

// state는 이전에 리듀서에서 반환한 값
// action 은 actioncreator에서 넘어온 값

export default function(state = null, action) {

  console.log('책 선택');
  console.log(action)

  switch(action.type) {
    case 'BOOK_SELECTED': {
      return action.payload;
    }
  }

  return state;
}


