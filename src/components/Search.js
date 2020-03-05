import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../data/BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

class Search extends Component {
  state = {
    query: '',
    newBooks: [],
    searchErr: false
  };
  
  getBooks = event => {
    const query = event.target.value;
    const trimed_query = query.trim()
    this.setState({ trimed_query });

    // if user input => run the search
    if (trimed_query) {
      BooksAPI.search(trimed_query, 20).then(books => {
        Array.isArray(books) && books.length
          ? this.setState({ newBooks: books, searchErr: false })
          : this.setState({ newBooks: [], searchErr: true });
      });

    // if query is empty => reset state to default
    } else {
      this.setState({ newBooks: [], searchErr: false });
    }
  };

  render() {
      const { query, newBooks, searchErr } = this.state;
      const { books, changeShelf } = this.props;

      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
                Close
            </Link>
            <div className="search-books-input-wrapper">
              <DebounceInput
                type="text"
                placeholder="Search by title or author"
                value={query}
                minLength={1}
                debounceTimeout={500}
                onChange={this.getBooks}
              />
            </div>
          </div>
          <div className="search-books-results">
            {newBooks.length > 0 && (
                <div>
                <h3>Search returned {newBooks.length} books </h3>
                <ol className="books-grid">
                    {newBooks.map(book => (
                    <Book
                        key={book.id}
                        book={book}
                        books={books}
                        changeShelf={changeShelf}
                    />
                    ))}
                </ol>
                </div>
            )}
            {searchErr && (
                <h3>Search did not return any books. Please try again!</h3>
            )}
          </div>
        </div>
      )
  }
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Search