import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Table from './Table';
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
        <Hello name={this.state.name} />
       

         <Table/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
