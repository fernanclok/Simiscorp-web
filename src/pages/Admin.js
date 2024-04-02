// Login.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css'
/* import HOLA from '../components/Navbar' */
import CRUD from '../components/CrudAdmin'
import SIDE from '../components/sidebar'
import FOOTER from '../components/footer';
import INSERT from '../components/InsertMed'
import Sidebar from '../components/sidebar';
export default class administracion extends React.Component {
  state = {
    alertI: false,
    alertUP:false,
    alertDE:false
  };

  alertI = () => {
    this.setState({ alertI: true });
    setTimeout(() => {
      this.setState({ alertI: false });
    }, 3000);
  };
  alertUP = () => {
    this.setState({ alertUP: true });
    setTimeout(() => {
      this.setState({ alertUP: false });
    }, 3000);
  };
  alertDE = () => {
    this.setState({ alertDE: true });
    setTimeout(() => {
      this.setState({ alertDE: false });
    }, 3000);
  };

  render() {
    return (
      <>    
      {this.state.alertI && (
          <div className=" alerta alert alert-success" role="alert">
            Data inserted successfully!
          </div>
        )}
         {this.state.alertUP && (
          <div className=" alerta alert alert-primary" role="alert">
            Data updated successfully!
          </div>
        )}
        {this.state.alertDE && (
          <div className=" alerta alert alert-danger" role="alert">
            Data deleted successfully!
          </div>
        )}
      <div className="IM"><INSERT alertI={this.alertI} /></div>
      <CRUD alertUP={this.alertUP} alertDE={this.alertDE} />
      <Sidebar />
    {/*   <INSERT /> */}
  
      </>
    );
  }
}
