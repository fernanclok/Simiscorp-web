import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import fondo from '../imgs/fondoIndex.jpg'
import '../fondo.css'
import logo from '../imgs/logoN.png'
import axios from "axios";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const IP = "172.18.7.42"

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = <div className="alert alert-danger" role="alert">Email is required</div>
  }
  if (!values.password) {
    errors.password = <div className="alert alert-danger" role="alert">Password is required</div>
  }
  return errors;
};

export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        values: {
          email: "",
          password:""
        },
        errors: {}
        
      }};
    
handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: value
      }
    }));
  };
    componentDidMount() {
      axios.get("http://"+IP+":9000/api/administradores")
        .then(response => {
          this.setState({ data: response.data });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
    handleSubmit = (event) => {
      event.preventDefault();
      const { values, data } = this.state; // Obtener valores y data del estado
      const errors = validate(values);
      this.setState({ errors });
    
      if (Object.keys(errors).length === 0) {
        // Verificar si los datos de la API se han cargado
        if (data.length === 0) {
          // Mostrar mensaje de error si los datos de la API aún no están disponibles
          const loginError = (
            <div className="alert alert-danger" role="alert">
              Loading data, please wait...
            </div>
          );
          this.setState({ errors: { loginError } });
        } else {
          // Realizar la comparación de los datos ingresados con los datos de la API
          const foundUser = data.find(
            (user) => user.correo === values.email && user.password === values.password
          );
    
          if (foundUser) {
            window.location.href = '/admin'; // Redireccionar a la página de administración
          } else {
            // Mostrar mensaje de error si los datos no son correctos
            const loginError = (
              <div className="alert alert-danger" role="alert">
                Invalid email or password
              </div>
            );
            this.setState({ errors: { loginError } });
          }
        }
      }
    };
    
  

  handleReset = () => {
    this.setState({
      values: {
        email: "",
        password:""
      },
      errors: {}
    });
  };

    render(){
        const { values, errors } = this.state;

        return(
            <>
            <body className='fondo'>
        <div className="container" style={{marginBottom: "5%", marginTop:"5%"}}>
        <div className="card o-hidden border-0 shadow-lg my-5" style={{backgroundColor: "#54a6c1", color: "aliceblue", borderRadius: "5px;"}}>
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image" style={{backgroundImage: "url("+fondo+")", backgroundSize: "cover",backgroundPosition: "center",  backgroundRepeat:"no-repeat", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px"}}></div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center" style={{marginBottom: "2%"}}>
                            <img src={logo} alt="Logo" width="250px" height="auto" className="d-inline-block align-text-top" />
                            </div>
                            <form className="user" onSubmit={this.handleSubmit}>
                                <div className="form-group row">
                                </div>
                                <div className="form-group">
                                {errors.email && <div>{errors.email}</div>}
                                    <input type="email" name="email" className="form-control form-control-user" style={{marginBottom: "15px"}} id="exampleInputEmail" placeholder="Admin@example.com" onChange={this.handleChange} />
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                    {errors.password && <div>{errors.password}</div>}   
                                        <input type="password" name='password' className="form-control form-control-user" id="exampleInputPassword" style={{marginBottom: "15px", marginLeft:"1%", width: "350px"}} placeholder="Password" onChange={this.handleChange}/>                                     
                                    </div>
                                </div>
                                <div style={{marginLeft: "22%", marginBottom: "15px"}}>
                                <Button type='submit' className="btn btn-success btn-user btn-block" style={{width: "120px"}} >
                                <i className="bi bi-clipboard-check-fill" style={{ marginRight: "5px" }} />
                                    <span>Login</span>
                                </Button>
                                <Button type="reset" value="Cancelar" onClick={this.handleReset} className="btn btn-danger btn-user btn-block" style={{width: "120px",marginLeft: "6%" }} >
                                    Reset
                                </Button>
                                </div>
                            </form>
                            {errors.loginError && <div>{errors.loginError}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </body>
</>
        );
    }
}
