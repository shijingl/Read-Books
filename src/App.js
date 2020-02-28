import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import './App.css'


class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
              path="/search"
              render={() => (
                <div className="search-books">
                </div>
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
        </BrowserRouter>
      </div>
    )
  }

}

export default BooksApp
