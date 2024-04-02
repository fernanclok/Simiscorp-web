import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css'
import '../sidebar.css'
import DASH from '../components/graficas'
import Sidebar from '../components/sidebar';

export default class graficas extends React.Component {
  state = {
    showTemperatureAlert: false
  };

  render() {
    return (
      <>
        <h1 className='h1'>DASHBOARDS</h1>
        <DASH showTemperatureAlert={this.state.showTemperatureAlert} />
        <Sidebar />
      </>
    );
  }
}
