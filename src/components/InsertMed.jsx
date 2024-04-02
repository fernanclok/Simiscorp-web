import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import axios from "axios";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  ModalFooter,
  FormGroup
} from "reactstrap";
import Select from "react-select"

const validate = (values) => {
  const errors = {};
  if (!values.categoria) {
   errors.categoria = <div className="alert alert-danger" role="alert">This input is required</div>
  }
  if (!values.nombre) {
   errors.nombre = <div className="alert alert-danger" role="alert">This input is required</div>
 }
  if (!values.nombre_cientifico) {
   errors.nombre_cientifico = <div className="alert alert-danger" role="alert">This input is required</div>
  }
  if (!values.formula) {
   errors.fromula = <div className="alert alert-danger" role="alert">This input is required</div>
  }
  if (!values.cantidad) {
   errors.formula = <div className="alert alert-danger" role="alert">This input is required</div>
 }
 if (!values.fecha_caducidad) {
   errors.fecha_caducidad = <div className="alert alert-danger" role="alert">This input is required</div>
 }
  return errors;
};

 const IP = "172.18.7.42"

export default class modal extends React.Component {
      state = {
        insertarModal: false,
        values: {
          categoria: [],
          nombre: "",
          nombre_cientifico: "",
          formula: "",
          cantidad: "",
          fecha_caducidad: ""
        },
        errors: {},
        alertI: false
      };
      mostrarModal = () => {
        this.setState({ insertarModal: true });
      };
    
      hideAlert = () => {
        this.setState({ alertI: false });
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
   
 
      handleSubmit = (event) => {
        event.preventDefault();
        const { values } = this.state;
        const errors = validate(values);
        this.setState({ errors });
        this.setState({ data: values, insertarModal: false });
        
        if (Object.keys(errors).length === 0) {
          const url1 = "http://" + IP + ":9000/api/medicamentos";
          /* const url2 = "http://172.18.5.222:7000/api/medicamentos"; */
          this.props.alertI();
          const request1 = axios.post(url1, values);
        }
      };

      handleCategoriaSelect = (selectedOptions) => {
       const selectedCategorias = selectedOptions.map((option) => option.value);
       const categoriasString = selectedCategorias.join(", ");
   
       this.setState((prevState) => ({
         values: {
           ...prevState.values,
           categoria: selectedCategorias,
           categoriaString: categoriasString
         }
       }));
     };
   
   
     toggleCategoriaDropdown = () => {
       this.setState((prevState) => ({
         showCategoriaDropdown: !prevState.showCategoriaDropdown,
       }));
     };
    render() {
      const { values, errors, showCategoriaDropdown} = this.state;
      const categoriasOptions = [
        { value: "Analgesico", label: "Analgesico" },
        { value: "Antipiretico", label: "Antipiretico" },
        { value: "Antiinflamatorio", label: "Antiinflamatorio" },
        { value: "Antisomnifero", label: "Antisomnifero" },
        { value: "Antibiotico", label: "Antibiotico" },
        { value: "Antiparasitario", label: "Antiparasitorio" },
        { value: "Antifungito", label: "Antifungico" },
        { value: "Anticoagulante", label: "Anticoagulante" },
        { value: "Vitaminas", label: "Vitaminas" },
        { value: "Antioxidante", label: "Antioxidante" }
      ];
      return (
<>
<Button className="boton" color='outline-success' onClick={this.mostrarModal}><i class="bi bi-capsule"></i></Button>
          <Modal isOpen={this.state.insertarModal}>
            <ModalHeader>
              <div>
                <h3>Add new Medicine</h3>
              </div>
              <div className="cerrar" onClick={this.cerrarModalInsertar}>X</div>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <div className="form-floating" style={{ position: "relative", zIndex: 1 }}>
                <Select
                  isMulti
                  name="categoria"
                  options={categoriasOptions}
                  value={categoriasOptions.filter(option => values.categoria.includes(option.value))}
                  formatOptionLabel={this.formatOptionLabel} 
                  onChange={this.handleCategoriaSelect}
                  placeholder="Select categories"
                />
                {errors.categoria && <div>{errors.categoria}</div>}
              </div>
              </FormGroup>
              <br></br>
              <FormGroup>
              <div className="form-floating">
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  id="floating"
                  onChange={this.handleChange}
                />
                <label htmlFor="floating" style={{zIndex: 0 }}>Product name</label>
                {errors.nombre && <div>{errors.nombre}</div>}
              </div>
              </FormGroup>
              <br></br>
              <FormGroup>
              <div className="form-floating">
              <input
                type="text"
                name="nombre_cientifico"
                className="form-control"
                id="floating"
                onChange={this.handleChange}
              />
              <label htmlFor="float" style={{zIndex: 0 }}>Scientific name</label>
              {errors.nombre_cientifico && <div>{errors.nombre_cientifico}</div>}
            </div>
              </FormGroup>
              <br></br>
              <FormGroup>
                    <div className="form-floating">
                <input
                  type="text"
                  name="formula"
                  className="form-control"
                  id="floatingInputValue"
                  onChange={this.handleChange}
                />
                <label htmlFor="float" style={{zIndex: 0 }}>Type the formula</label>
                {errors.formula && <div>{errors.formula}</div>}
              </div>
              </FormGroup>
              <br></br>
              <FormGroup>
              <div className="form-floating">
           <input
             type="number"
             name="cantidad"
             className="form-control"
             id="float"
             placeholder="stock"
             pattern="^[0-9]+"
             onChange={this.handleChange}
           />
           <label htmlFor="float" style={{zIndex: 0 }}>Type the stock</label>
           {errors.cantidad && <div>{errors.cantidad}</div>}
         </div>
              </FormGroup>
              <br></br>
              <FormGroup>
              <div className="form-floating">
           <input
             type="date"
             name="fecha_caducidad"
             className="form-control"
             id="floating"
             onChange={this.handleChange}
           />
           <label htmlFor="float" style={{zIndex: 0 }}>Expiration date</label>
           {errors.fecha_caducidad && <div>{errors.fecha_caducidad}</div>}
         </div>
         
              </FormGroup>
            </ModalBody>
            <ModalFooter>
            <Button type="submit" className="suceess" onClick={this.handleSubmit}> Add</Button>
            <Button type="reset" color="danger" value="Cancelar" onClick={this.cerrarModalInsertar} >Cancel</Button>
            </ModalFooter>
          </Modal>
</>
      );
    }
}