// Login.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css'
/* import HOLA from '../components/Navbar' */
import CRUD from '../components/categorias/crudCat'
import INSERT from '../components/InsertMed'
import Sidebar from '../components/sidebar';
export default class categorias extends React.Component {
  render() {
    return (
      <>    
     {/*  <div className="IM"><INSERT /></div>
      */}<CRUD />
      <Sidebar />
    {/*   <INSERT /> */}
  
      </>
    );
  }
}
