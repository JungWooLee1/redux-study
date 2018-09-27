// 책을 선택했을때의 Action입니다.
// 모든 리듀서로 해당 액션이 전달되어야 합니다.



export function selectBook(book) {
  //console.log('A book has been selected:', book.title);

  // 선택한 책은 액션 생성자고, 액션 반환이 필요하다.
  // 타입 프로퍼티 오브젝트이다.

  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}


