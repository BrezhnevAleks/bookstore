import React from "react";
import BookItem from "./bookitem";
class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {/* {books.map((item) => ( */}
        <BookItem />
        {/*  ))} */}
      </ul>
    );
  }
}

export default BookList;
