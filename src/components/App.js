import React, { Component } from 'react';
import SystemTime from './SystemTime'

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
    const { is_open_for_business, system_time } = this.state.akira;

    return (
      <main>
        <img src="Logo.png" alt="Akira"/>
        <SystemTime time={system_time}/>
      </main>
    );
  };
};

export default App;
