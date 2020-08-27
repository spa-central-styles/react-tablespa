import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Table from './Table';
import TablePerPrototype from './TablePerPrototype';
import 'spa-central-styles-free';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       
       

         <TablePerPrototype/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
