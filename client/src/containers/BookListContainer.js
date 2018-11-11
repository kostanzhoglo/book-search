import React, { Component } from 'react';
import BookSearch from '../components/BookSearch';
import BookList from '../components/BookList';

class BookListContainer extends Component {
  render() {
    return (
      <div>
        <h1>Yo, McFly, anybody home?</h1>
        <BookSearch />
        <BookList />
      </div>
    );
  }
};

export default BookListContainer;
