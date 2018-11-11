import React, { Component } from 'react';
import './App.css';
import BookListContainer from './containers/BookListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookListContainer />
      </div>
    );
  }
}

export default App;
