import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

// 리듀서를 매핑하는 역활을 한다.
// BooksReducer는 books 프로퍼티를 생성하는 권한을 갖는다.
// books State는 인자로써 BookReducer가 이전에 생성한 State 전달받는다.
// 다시말해, 이 리듀서에 의해 생성된 state는 액션이 생성될때 다시 흘러가게 된다.


const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
