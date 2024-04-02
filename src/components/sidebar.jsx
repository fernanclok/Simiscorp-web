import React, { useEffect, useState } from 'react';
import logo from '../imgs/LOGONADMIN.png'; // Reemplaza esta ruta con la ubicación correcta de tu imagen de logotipo
import '../sidebar.css'; // Asegúrate de que el archivo style.css esté ubicado en la ruta correcta
import 'boxicons'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const logout = () => {
    window.location.href = '/login';
    console.log('Logout clicked!');
  };
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <nav className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img style={{color: "#18191a var(--sidebar-color)"}}src={logo} alt="" /> 
          </span>
          <div className="text logo-text">
            <span className="name">SimisCorp</span>
            <span className="profession">Admin</span>
          </div>
        </div>
       <i class="bi bi-caret-right-fill toggle" onClick={toggleSidebar}></i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul>
          <li className="nav-link">
              <Link to="/admin">
              <i class="bi bi-house-heart-fill" id="iconos"></i>
                <span className="text nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/graficas">
                <div id="iconos"><i className="bi bi-bar-chart-line"></i></div>
                <span className="text nav-text" >Dashboard</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/categorias">
                <i className="bi bi-tags" id="iconos"></i>
                <span className="text nav-text">Categories</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/users">
                <i className="bi bi-person-exclamation" id="iconos"></i>
                <span className="text nav-text">Users</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/clientes">
                <i className="bi bi-building-fill" id="iconos"></i>
                <span className="text nav-text">Customers</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li className="nav-link">
            <a onClick={logout}>
            <i class="bi bi-box-arrow-left" id="iconos"></i>
              <span className="text nav-text" style={{cursor: "pointer"}}>Logout</span>
            </a>
          </li>
          <li className="mode">
            <div className="sun-moon">
              <i className={`bx ${isDarkMode ? 'bx-moon' : 'bx-sun'} icon moon`} onClick={toggleDarkMode}></i>
              <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} icon sun`} onClick={toggleDarkMode}></i>
            </div>
            <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
            <div className="toggle-switch" onClick={toggleDarkMode}>
              <span className={`switch ${isDarkMode ? 'dark' : ''}`}></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
