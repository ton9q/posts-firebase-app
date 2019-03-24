import React, { Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: 'Hello, Anton!',
    };
  }

  render() {
    return (
      <h1>{this.state.hello}</h1>
    )
  }
}

export default App;