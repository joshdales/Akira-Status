import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {akira: {}}
  };

  checkAkira = () => {
    fetch('https://app.akira.md/api/system_status').
      then(response => response.json()).
        then(data => {
          console.log(data);
          this.setState({akira: data})
        });
  };


  render() {
    const { akira } = this.state
    return (
      <main>
        <p onClick={this.checkAkira}>Hello</p>
      </main>
    );
  };
};

export default App;
