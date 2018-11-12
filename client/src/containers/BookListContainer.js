import React, { Component } from 'react';
import BookSearch from '../components/BookSearch';
import BookList from '../components/BookList';

const GOODREADS_API_KEY = 'UGOUNnlB3SlzC9pODO821Q';
const URL = `https://www.goodreads.com/search/index.xml?key=${GOODREADS_API_KEY}&q=${this.state.books}`

class BookListContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books: [],
      page: null
    }
  }

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
