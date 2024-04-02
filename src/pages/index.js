// Login.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FOOTER from '../components/footer'
import '../styles.css'
import INDEX from '../components/index'
import HOLA from '../components/Navbar'
import APP from'../App'
export default class Index extends React.Component {
  render() {
    return (
      <>
      <HOLA />
      <INDEX />
      <FOOTER />
      </>
    );
  }
}
