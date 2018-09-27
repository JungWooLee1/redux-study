import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList() {
    // 컨테이너에서 props로 전달받은 리덕스의 state를 이용하여 booklist를 그려줍니다.
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
            // mapDispatchToProps 으로 Action 함수를 props로 전달하였으므로 사용이 가능합니다.
            onClick = {() => this.props.selectBook(book)}
            className="list-group-item">
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
        <ul className="list-group col-sm-4">
          { this.renderList() }
        </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList

  // 리덕스를 컴테이너의 컴포넌트와 연결하는 방식
  // books : 리덕스의 state => 컨테이너의 props로 반환
  return {
    books: state.books
  };
}


// 해당 함수로 반환반은 것은 booklist 컨테이너의 props로 연결된다.
function mapDispatchToProps(dispatch) {

  // [ bindActionCreators ]
  // selectBook 은 실제 액션 생성자입니다.
  // selectBook 이 호출되면, 결과는 모든 리듀서에게 전달된다.
  // 즉 모든 액션들을 가져와 어플리케이션 안의 모든 리듀서로 전달한다.
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// 컨테이너와 리덕스를 연결한다.
// 컨테이너는 리덕스에 속한 스테이트를 다룰 수 있는 컴포넌트이다.

// 컴포넌트에서 컨테이너 북 리스트를 바꿔야 하는데 - 이는 새로운 dispatch 메소드인 selectBook을 알아야 하며, 이는 prop로 이용이 가능하다.

// Promote BookList from a componect to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop


export default connect(mapStateToProps, mapDispatchToProps)(BookList);




