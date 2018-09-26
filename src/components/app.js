import React, { Component } from 'react';

import BookList from '../containers/book-list'

console.log('앱 시작');
export default class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
      </div>
    );
  }
}
