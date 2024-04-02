/* Para el [modal]
 **se instalo npm install node-sass**
 */
 import React from "react";
 import axios from "axios";
 import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup
} from "reactstrap";

const IP = "172.18.7.42"

 const validate = (values) => {
   const errors = {};
   if (!values.nombre) {
    errors.nombre = <div className="alert alert-danger" role="alert">This input is required</div>
   }
   if (!values.apellPaterno) {
    errors.apellPaterno = <div className="alert alert-danger" role="alert">This input is required</div>
  }
   if (!values.apellMaterno) {
    errors.apellMaterno = <div className="alert alert-danger" role="alert">This input is required</div>
   }
   if (!values.correo) {
    errors.correo = <div className="alert alert-danger" role="alert">This input is required</div>
   }
   if (!values.usuario) {
    errors.usuario= <div className="alert alert-danger" role="alert">This input is required</div>
  }
  if (!values.password) {
    errors.password = <div className="alert alert-danger" role="alert">This input is required</div>
  }
   return errors;
 };
 export default class UPDATE extends React.Component {
   state = {
    insertarModal: false,
    alertI: false,
     values: {
            nombre: "",
            apellPaterno:"",
            apellMaterno:"",
            correo:"",
            usuario:"",
            password:"",
          
     },
     errors: {}
   };
 
   mostrarModal = () => {
    this.setState({ insertarModal: true });
  };
  hideAlert = () => {
    this.setState({ alertI: false });
  };

  insertar = (datos) => {
    var newuser = { ...this.state.form };
    newuser.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(newuser);
    this.setState({ insertarModal: false, data: lista });
  };

  datos = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
   handleChange = (event) => {
     const { name, value } = event.target;
     this.setState((prevState) => ({
       values: {
         ...prevState.values,
         [name]: value
       }
     }));
   };

    handleSubmit = (event) => {
        event.preventDefault();
        const { values } = this.state;
        const errors = validate(values);
        this.setState({ errors });
        this.setState({ data: values, insertarModal: false });
        
        if (Object.keys(errors).length === 0) {
          const url1 = "http://" + IP + ":9000/api/administradores";
          this.props.alertI();
          const request1 = axios.post(url1, values);
        }
      };
   cerrarModalInsertar = () => {
    this.setState({ insertarModal: false });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: value
      }
    }));
  };
 
   render() {
     const { errors} = this.state;
     
     return (
      <>
      <Button className="boton" color='outline-success' onClick={this.mostrarModal}><i class="bi bi-people"></i></Button>
          <Modal isOpen={this.state.insertarModal}>
            <ModalHeader>
              <div>
                <h3>Add a new user</h3>
              </div>
              <div className="cerrar" onClick={this.cerrarModalInsertar}>X</div>
            </ModalHeader>
            <ModalBody>
      <FormGroup>
         <div className="form-floating">
           <input
             type="text"
             name="nombre"
             className="form-control"
             id="floating"
             onChange={this.handleChange}
           />
           <label htmlFor="floating">Name</label>
           {errors.nombre && <div>{errors.nombre}</div>}
         </div>
         </FormGroup>
         <br />
         <FormGroup>
         <div className="form-floating">
           <input
             type="text"
             name="apellPaterno"
             className="form-control"
             id="floating"
             onChange={this.handleChange}
           />
           <label htmlFor="floating">Paternal surname</label>
           {errors.apellPaterno && <div>{errors.apellPaterno}</div>}
         </div>
         </FormGroup>
         <br />
         <FormGroup>
         <div className="form-floating">
           <input
             type="text"
             name="apellMaterno"
             className="form-control"
             id="floating"
             onChange={this.handleChange}
           />
           <label htmlFor="float">Maternal surname</label>
           {errors.apellMaterno && <div>{errors.apellMaterno}</div>}
         </div>
         </FormGroup>
         <br />
         <FormGroup>
         <div className="form-floating">
           <input
             type="email"
             name="correo"
             className="form-control"
             id="floatingInputValue"
             onChange={this.handleChange}
           />
           <label htmlFor="float">Type a email</label>
           {errors.correo && <div>{errors.correo}</div>}
         </div>
         </FormGroup>
         <br />
         <FormGroup>
         <div className="form-floating">
           <input
             type="text"
             name="usuario"
             className="form-control"
             id="float"
             placeholder="stock"
            onChange={this.handleChange}
           />
           <label htmlFor="float">Type a username</label>
           {errors.usuario && <div>{errors.usuario}</div>}
         </div>
         </FormGroup>
         <br />
         <FormGroup>
         <div className="form-floating">
           <input
             type="password"
             name="password"
             className="form-control"
             id="floating"
             onChange={this.handleChange}
           />
           <label htmlFor="float">Type a password</label>
           {errors.password && <div>{errors.password}</div>}
         </div>
         </FormGroup>
         <br />
            </ModalBody>
         <ModalFooter>
        <Button type="submit" className="suceess" value="Aceptar" onClick={this.handleSubmit}> Add</Button>
         <Button type="reset" color="danger" value="Cancelar" onClick={this.cerrarModalInsertar}>Cancel</Button>
         </ModalFooter>
         </Modal>
       </>
     );
   }
 }
 