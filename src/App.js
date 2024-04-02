import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HOLA from './components/Navbar';
import Login from './pages/login';
import Index from './pages/index';
import CATALOGO from './pages/catalogo'
import ADMIN from './pages/Admin'
import DASH from './pages/graficas'
import CATE from './pages/categorias'
import USERS from './pages/users'
import CUSTOMERS from './pages/clientes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import MODAL from './components/InsertMed'
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";

const data = [];

class App extends React.Component {
  state = {
  }
  render() {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Index />} />
          <Route path="/catalogo" element={<CATALOGO/>} />
          <Route path='/admin' element={<ADMIN />} />
          <Route path='/graficas' element={<DASH />} />
          <Route path='/categorias' element={<CATE />} />
          <Route path='/users' element={<USERS />} />
          <Route path='/clientes' element={<CUSTOMERS />} />
        </Routes>
        </BrowserRouter>
        </>
    );
  }
}

export default App;
