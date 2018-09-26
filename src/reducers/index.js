import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

// 리듀서를 매핑하는 역활을 한다.
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
