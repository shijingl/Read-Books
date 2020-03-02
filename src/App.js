import React from 'react';
import * as BooksAPI from './data/BooksAPI';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Search from './components/Search';
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
    // console.log(books);
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
