import React from 'react';
import noCover from '../images/nocover.jpg';
import PropTypes from 'prop-types';


const Book = props => {
    const { book } = props;

    const coverImg =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : noCover;
    const title = book.title ? book.title : 'No title available';

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ backgroundImage: `url(${coverImg})` }}
            />
          </div>
          <div className="book-title">{title}</div>
          {
          /* Check for authors and render each on separate line if exist*/
            book.authors &&
            book.authors.map((author, index) => (
              <div className="book-authors" key={index}>
                {author}
              </div>
            ))
          }
        </div>
      </li>
    );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book