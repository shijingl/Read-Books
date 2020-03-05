import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/stacked-books.jpg';

const NotFound = () => (
  <div>
    <h1 className="not-found-title">
      Wrong route...
    </h1>
    <figure className="not-found-img">
      <img src={notFound} alt="Page Not Found" />
    </figure>
    <div className="home-link">
      <Link to="/">Go back to try again</Link>
    </div>
  </div>
);

export default NotFound;
