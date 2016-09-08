import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const container = document.getElementById('container');
const USERS = [
  {
    id: 1,
    firstName: 'Fred',
    lastName: 'Flintstone',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Fred_Flintstone.png/165px-Fred_Flintstone.png'
  },
  {
    id: 2,
    firstName: 'Wilma',
    lastName: 'Flintstone',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/9/97/Wilma_Flintstone.png'
  },
  {
    id: 3,
    firstName: 'Pebbles',
    lastName: 'Flintstone',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Pebbles_Flintstone.png/155px-Pebbles_Flintstone.png'
  },
  {
    id: 4,
    firstName: 'Barney',
    lastName: 'Rubble',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Barney_Rubble.png/160px-Barney_Rubble.png'
  },
  {
    id: 5,
    firstName: 'Betty',
    lastName: 'Rubble',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Betty_Rubble.png'
  },
  {
    id: 6,
    firstName: 'Bamm-Bamm',
    lastName: 'Rubble',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Bamm-Bamm_Rubble.png/180px-Bamm-Bamm_Rubble.png'
  }
];

/**
 * Client side routing for single page apps with React is made possible with
 * third-party libraries like `react-router`. Using a client router like this
 * allows you to link to different parts of your app without reloading the page.
 * React router behaves similarly to server side libraries like `express` where
 * you define the path to a route and then specify how that route should be
 * handled.
 *
 * Example:
 *  
 *  ```
 *  const Home = () => <b>Home</b>;
 *  const ProductList = () => <b>Product List</b>;
 *  const ProductDetail = (props) => <b>Product Detail (props.routeParams.productId)</b>;
 *
 *  const Routes = (
 *    <Router history={hashHistory}>
 *      <Route path="/" component={Home}/>
 *      <Route path="/products" component={ProductList}/>
 *      <Route path="/product/:productId" component={ProductDetail}/>
 *    </Router>
 *  );
 *
 *  ReactDOM.render(Routes, component);
 *  ```
 *
 * In this example we have three routes defined, a home route, a product list,
 * and a product detail. If the `path` prop matches the current location
 * then the `component` for that route will be rendered.
 *
 * You may also notice the product detail `path` contains `:productId`.
 * This is a named parameter portion of the path. If the location were
 * `/product/37` then the product detail route would be matched and rendered.
 *
 * You will also notice that the `ProductDetail` component is also given a
 * prop called `routeParams`. This is provided by `react-router` and contains
 * all the named parameters that are defined in the route's path.
 *
 * You can create links within your app to these routes using the `Link`
 * component provided by `react-router`.
 *
 * Example:
 *
 *  ```
 *  const ProductList = () => {
 *    return (
 *      <ul>
 *        <li><Link to="/product/1">Product 1</Link></li>
 *        <li><Link to="/product/2">Product 2</Link></li>
 *        <li><Link to="/product/3">Product 3</Link></li>
 *        <li><Link to="/product/4">Product 4</Link></li>
 *      </ul>
 *    );
 *  };
 *  ```
 *
 * Exercise:
 *
 *  Create an app that uses `react-router`. The app should have a `/` route,
 *  a `/users` route which lists all the `USERS`, and a `/user/:userId` route
 *  that shows the details for the user matching `userId` parameter.
 */

// TODO Your solution here
