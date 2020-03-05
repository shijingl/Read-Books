# MyReads Project

The goal of this project is to create a personal book tracker app to track the books which you are "Currently Reading", "Want to read", and "Already read". It uses [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## How to Run

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Debounce for Better Performance
Sometimes the user types too fast and it makes server requests as soon as the user types each search input. Instead of firing on each iteration of the search event, we can ensure it fires only every 500 milliseconds. Used Debounce for react to implement this and improve performance.
