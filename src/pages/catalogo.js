// Login.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css'
import HOLA from '../components/Navbar'
import CATALOGO from '../components/catalogo';
import FOOTER from '../components/footer';
export default class catalogo extends React.Component {
  render() {
    return (
      <>
      <HOLA />
      <CATALOGO />
      <FOOTER />
      </>
    );
  }
}
