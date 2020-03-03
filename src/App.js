import React from 'react';
import * as BooksAPI from './data/BooksAPI';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Search from './components/Search';
import { Link } from 'react-router-dom';
import './App.css';


class BooksApp extends React.Component {
  state = {
    books: []
  }
 
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={() => (
              <Search books={books}/>
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads Tracking Apps</h1>
                </div>
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }

}

export default BooksApp
