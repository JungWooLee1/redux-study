import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    // 컨테이너에서 props로 전달받은 리덕스의 state를 이용하여 booklist를 그려줌
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

// 컨테이너와 리덕스를 연결한다.
// 컨테이너는 리덕스에 속한 스테이트를 다룰 수 있는 컴포넌트이다.

export default connect(mapStateToProps)(BookList);




