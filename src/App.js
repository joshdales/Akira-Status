import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {akira: {}};
  };

  componentWillMount() {
    fetch('https://app.akira.md/api/system_status').
      then(response => response.json()).
        then(data => {
          this.setState({akira: data});
        });
  };

  render() {
    return (
      <main>
        <img src="Logo.png" alt="Akira "/>
        <p onClick={this.checkAkira}>Hello</p>
      </main>
    );
  };
};

export default App;
