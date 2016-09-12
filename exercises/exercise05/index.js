import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('container');

/**
 * Where props allow for data to be passed into a component from the outside,
 * state allows a component to keep track of it's own data needed for rendering.
 *
 * In order for a component to use state we need to use a more complex way of
 * creating a component.
 *
 * Example:
 *
 *  ```
 *  class ClickCounter extends Component {
 *    constructor(props) {
 *      super(props);
 *
 *      this.state = {
 *        clicks: 0
 *      };
 *    }
 *
 *    handleButtonClick() {
 *      this.setState({
 *        clicks: this.state.clicks + 1
 *      });
 *    }
 *
 *    render() {
 *      return (
 *        <div>
 *          <button onClick={() => this.handleButtonClick()}>Click Me!</button>
 *          <div>Clicked {this.state.clicks} times</div>
 *        </div>
 *      );
 *    }
 *  }
 *  ```
 *
 * Calling `setState` will queue the internal state for the component to be
 * updated. Once it has changed `render` will be called and the component will
 * once again be rendered with the changes. Only this point of the render tree
 * down will be affected.
 *
 * There are a handful of lifecycle methods that come into play when dealing
 * with state, such as `componentWillUpdate`, `componentDidUpdate`, etc.
 *
 * See https://facebook.github.io/react/docs/component-api.html
 *
 * Exercise:
 *
 *  1. Create a component, Capitals, that lists all capitals.
 *  2. Create a component, SearchField, inside Capitals, that filters the given
 *  list of `capitals` while typing
 *
 * Tip: use Array.prototype.map() and Array.prototype.filter()
 */

const capitals = [
	'Amsterdam', 'Andorra', 'Aten', 'Beograd', 'Berlin', 'Bern', 'Bratislava', 'Brussel', 'Budapest', 'București', 'Chișinău', 'Dublin', 'Helsingfors', 'Kiev', 'København', 'Lisboa', 'Ljubljana', 'London', 'Luxembourg', 'Madrid', 'Minsk', 'Monaco', 'Moskva', 'Oslo', 'Paris', 'Podgorica', 'Praha', 'Priština1', 'Reykjavík', 'Riga', 'Roma', 'San Marino', 'Sarajevo', 'Skopje', 'Sofia', 'Stockholm', 'Tallinn', 'Tirana', 'Vaduz', 'Valletta', 'Vatikanstaten', 'Vilnius', 'Warszawa', 'Wien', 'Zagreb'
];

// TODO Your solution here
