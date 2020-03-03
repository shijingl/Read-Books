import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookShelf extends Component {
    render() {
        const { books, changeShelf } = this.props;
    
        return (
          <ol className="books-grid">
            {books.map(book => (
              <Book
                book={book}
                books={books}
                key={book.id}
                changeShelf={changeShelf}
              />
            ))}
          </ol>
        );
      }

}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired
}

export default BookShelf;