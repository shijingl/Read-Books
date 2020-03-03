import React from 'react';

const BookList = props => {
  const { books } = props;
  const shelfTypes = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];

  return (
    <div className="list-books-content">
      {shelfTypes.map((shelf, index) => {
        // const shelfBooks = books.filter(book => book.shelf === shelf.type);
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;