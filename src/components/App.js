import React, { Component } from 'react';
import SystemTime from './SystemTime';
import OpenStatus from './OpenStatus';
import OpenTimes from './OpenTimes';
import Offline from './Offline';

class App extends Component {
  constructor() {
    super();
    this.checkAkira = this.checkAkira.bind(this);
    this.renderDoctor = this.renderDoctor.bind(this);
    this.state = {
      direct_signup_allowed: false,
      is_open_for_business: false,
      online: false,
      open_hours_today: {
        close_at: "",
        open_at: ""
        },
      system_time: ""
    };
  };

  checkAkira() {
    fetch('https://app.akira.md/api/system_status').
      then(response => response.json()).
        then(data => {
          this.setState({
            direct_signup_allowed: data.direct_signup_allowed,
            is_open_for_business: data.is_open_for_business,
            online: data.online,
            open_hours_today: {
              close_at: data.open_hours_today.close_at,
              open_at: data.open_hours_today.open_at
              },
            system_time: data.system_time
          });
        });
  }

  componentWillMount() {
    this.checkAkira();
  };

  componentDidMount() {
    setInterval(() => this.checkAkira(), 1000)
  }

  renderDoctor() {
    if (!this.state.is_open_for_business){
      return
    }
    return (
      <img src="akira-doctor.png" alt="Akira Doctor" className="doctor" />
    )
  }

  render() {
    const { is_open_for_business, system_time, open_hours_today, online } = this.state;
    const { open_at, close_at } = open_hours_today;

    if (!online) {
      return <Offline />
    } else

    return (
      <main>
        <h1>
          <img src="Logo.png" alt="Akira"/>
        </h1>
        <OpenStatus is_open={is_open_for_business}/>
        <SystemTime time={new Date(system_time)} is_open={is_open_for_business} />
        <OpenTimes openHours={open_hours_today}/>
        {this.renderDoctor()}
      </main>
    );
  };
};

export default App;
