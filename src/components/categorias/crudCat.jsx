import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from "axios";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    FormGroup,
    Input
  } from "reactstrap";
  const IP = "172.18.7.42"
  export default class Crud extends React.Component {
    state = {
      data: [], // Inicializa data como un array vacío
      errors: {},
      insertarModal: false,
      actualizarModal: false,
      eliminarModal: false,
      detalles: false,
      form: {
        _id: "",
        categoria: "",
        nombre: "",
        nombre_cientifico: "",
        formula: "",
        cantidad: "",
        fecha_caducidad:""
      }
    };
    componentDidMount() {
      axios.get("http://"+IP+":9000/api/medicamentos")
        .then(response => {
          this.setState({ data: response.data });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
    fetchDataByCategory = (categoria) => {
        axios.get(`http://${IP}:9000/api/medicamentos/categoria/${categoria}`)
          .then(response => {
            this.setState({ data: response.data });
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }
    
    render(){
        const { data } = this.state; // Extraer la variable 'data' del estado
        return(
            <>
            <div className="categorias">
            <div className="button-container d-inline-flex gap-1">
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={() => this.fetchDataByCategory("Analgecico")}>
                Analgesic
            </button>
            <br />
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={() => this.fetchDataByCategory("Antipiretico")}>
                Antipyretic
            </button>
            <br />
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" 
            onClick={() => this.fetchDataByCategory("Antiinflamatorio")}>
                Anti-infamatory
            </button>
            <br />
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
             onClick={() => this.fetchDataByCategory("Antisomnifero")}>
                Antisleep
            </button>
            <br />
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" 
            onClick={() => this.fetchDataByCategory("Antibiotico")}>
               Antibiotics
            </button>
            <br />
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
             onClick={() => this.fetchDataByCategory("Antiparasitario")}>
                Antiparasitic
            </button>
            <br />
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
             onClick={() => this.fetchDataByCategory("Antifungito")}>
               Antifungal
            </button>
            <br />
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
             onClick={() => this.fetchDataByCategory("Vitaminas")}>
                Vitamins
            </button>
            <br />
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
             onClick={() => this.fetchDataByCategory("Antioxidante")}>
               Antioxidant
            </button>
            <br />
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
             onClick={() => this.fetchDataByCategory("Anticoagulante")}>
               Anticoagulant
            </button>
            <br />
            </div>
            <div className="Crud_admin4" id="collapseExample">
            {Array.isArray(data) && data.length ? ( 
  <Table className="table table-secondary table-hover">
    <thead>
      <tr>
        <th scope="col" style={{ width: "8%" }}>Category</th>
        <th scope="col" style={{ width: "10%" }}>Name</th>
        <th scope="col" style={{ width: "15%" }}>Scientific Name</th>
        <th scope="col" style={{ width: "10%" }}>Formula</th>
        <th scope="col" style={{ width: "5%" }}>Stock</th>
        <th scope="col" style={{ width: "10%" }}>Date of Expiry</th>
      </tr>
    </thead>
    <tbody className="table-group-divider">
      {data.map(element => (
        <tr key={element._id}>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.categoria.join(", ")}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.nombre}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.nombre_cientifico}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.formula}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.cantidad}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.fecha_caducidad}</td>
        </tr>
      ))}
    </tbody>
  </Table>
      ) : (
        <p>No hay datos disponibles.</p>
      )} 
</div>
            </div>
            
            </>
        )
    }
}
