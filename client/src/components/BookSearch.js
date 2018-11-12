import React, { Component } from 'react';

class BookSearch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      userBookInput: "",
      userPageInput: ""
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default BookSearch;
