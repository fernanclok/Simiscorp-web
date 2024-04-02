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
   if (!values.empresa) {
    errors.empresa = <div className="alert alert-danger" role="alert">This info is required</div>
   }
   if (!values.zona_asignada) {
    errors.zona_asignada = <div className="alert alert-danger" role="alert">This info is required</div>
  }
   return errors;
 };
 export default class INSERTclientes extends React.Component {
   state = {
    insertarModal:false,
     values: {
        empresa:"",
        zona_asignada:"",
     },
     errors: {},
     alertI: false
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

   hideAlert = () => {
    this.setState({ alertI: false });
  };
   handleSubmit = (event) => {
    event.preventDefault();
    const { values } = this.state;
    const errors = validate(values);
    this.setState({ errors });
    this.setState({ data: values, insertarModal: false });
    
    if (Object.keys(errors).length === 0) {
      const url1 = "http://"+IP+":9000/api/clientes";
      this.props.alertI();
      const request1 = axios.post(url1, values);
    }
  };
   mostrarModal = () => {
    this.setState({ insertarModal: true });
  };
  cerrarModalInsertar = () => {
    this.setState({ insertarModal: false });
  };
   render() {
     const { errors} = this.state;
     
     return (
      <>
      <Button className="boton" color='outline-success' onClick={this.mostrarModal}><i class="bi bi-building-add"></i></Button>
          <Modal isOpen={this.state.insertarModal}>
            <ModalHeader>
              <div>
                <h3>Add a new Customer</h3>
              </div>
              <div className="cerrar" onClick={this.cerrarModalInsertar}>X</div>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
            <div className="form-floating">
           <input
             type="text"
             name="empresa"
             className="form-control"
             id="floating"
             onChange={this.handleChange}
           />
           <label htmlFor="floating">Company</label>
           {errors.empresa && <div>{errors.empresa}</div>}
         </div>
         </FormGroup>
         <br />
         <FormGroup>
         <div className="form-floating">
           <input
             type="number"
             pattern="[0-9]+" name="zona_asignada"
             className="form-control"
             id="floating"
             onChange={this.handleChange}
           />
           <label htmlFor="floating">Asignated Zone</label>
           {errors.zona_asignada && <div>{errors.zona_asignada}</div>}
         </div>
         </FormGroup>
         <br />
            </ModalBody>
         <ModalFooter>
        <Button type="submit" className="suceess" value="Aceptar" onClick={this.handleSubmit}> Add</Button>
         <Button type="reset" color="danger" value="Cancelar" onClick={this.cerrarModalInsertar} >Cancel</Button>
         </ModalFooter>
         </Modal>
         
       </>
     );
   }
 }
 