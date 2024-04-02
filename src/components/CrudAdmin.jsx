import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css'
import '../fondo.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Highcharts from 'highcharts';
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
      alertUP: false,
      alertDE: false,
      insertarModal: false,
      actualizarModal: false,
      eliminarModal: false,
      detalles: false,
      form: {
        _id: "",
        categoria:[],
        nombre: "",
        nombre_cientifico: "",
        formula: "",
        cantidad: "",
        fecha_caducidad:""
      }
    };
    hideAlert1 = () => {
      this.setState({ alertUP: false });
    };
    hideAlert2 = () => {
      this.setState({ alertDE: false });
    };
  
    componentDidMount() {
      axios.get("http://"+IP+":9000/api/medicamentos")
        .then(response => {
          this.setState({ data: response.data });
          const averages = this.calculateCategoryStockAverage(response.data); // Obtener promedios
          const totalMedicines = this.calculateTotalMedicines(response.data);
          this.renderPieChart(averages, totalMedicines);
          this.fetchData();
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
    calculateTotalMedicines(data) {
      let total = 0;
      data.forEach(medicamento => {
        total += medicamento.cantidad;
      });
      return total;
    }
      // Función para realizar Long Polling y actualizar la tabla cuando hay nuevos datos
  fetchData = () => {
    axios
      .get("http://" + IP + ":9000/api/medicamentos")
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        // Realiza la siguiente solicitud de datos después de un tiempo determinado
        setTimeout(this.fetchData, 1000); // Aquí puedes ajustar el tiempo de espera, por ejemplo, 5 segundos (5000 ms)
      });
  };


/*-------- SE OBTIENEN LOS PROMEDIOS DE CADA UNA DE LAS CATEGORIAS CON SUS RESPECTIVOS MEDICAMENTOS-------- */
    calculateCategoryStockAverage(data) {
      const categoryStockSum = {};
      const categoryStockCount = {};
    
      data.forEach(medicamento => {
        const { categoria, cantidad } = medicamento;
        if (categoria in categoryStockSum) {
          categoryStockSum[categoria] += cantidad;
          categoryStockCount[categoria]++;
        } else {
          categoryStockSum[categoria] = cantidad;
          categoryStockCount[categoria] = 1;
        }
      });
    
      const averages = {};
      Object.keys(categoryStockSum).forEach(categoria => {
        const average = categoryStockSum[categoria] / categoryStockCount[categoria];
        averages[categoria] = average;
      });
    
      return averages; // Retornar objeto con los promedios
    }
    renderPieChart(averages, totalMedicines) {
      const pieChartData = Object.entries(averages).map(([categoria, promedio]) => [categoria, promedio]);
      Highcharts.chart('containers', {
        chart: {
          type: 'pie',
          backgroundColor: 'transparent',
          plotBorderWidth: 0,
          plotBorderColor: 'transparent',
          border: "none",
          borderWidth: 0
        },
        title: {
          text: `Total de medicamentos: ${totalMedicines}`,
          style: {
            textAlign: 'center',
            color: "#00B2B2",
            border: 'none', // Elimina el borde del título
            fontFamily: "initial",
            fontSize: "28px"
          }
        },
        plotOptions: {
          pie: {
            animation: {
              duration: 1000,
              easing: 'easeOutBounce'
            }
          }
        },
        series: [{
          name: 'Promedio',
          data: pieChartData
        }]
      });
    }
    
/*----------------- SE TERMINA LA ZONA DE LA GRAFICA--------------------------------------------- */

      mostrarModalInsertar = () => {
        this.setState({ insertarModal: true });
      };

    insertar = () => {
      const { form, data } = this.state;
      const newRecord = { ...form };
      const newData = [...data, newRecord];
      this.setState({ data: newData, insertarModal: false });
    
      axios
        .post("http://"+IP+":9000/api/medicamentos", newRecord)
        .then((response) => {
          console.log("Data inserted:", response.data);
        })
        .catch((error) => {
          // Handle error here if needed
          console.error("Error inserting data:", error);
        });
    };
    
  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      form: { ...prevState.form, [name]: value }
    }));
  };

  cerrarModalInsertar = () => {
    this.setState({ insertarModal: false });
  };
/* ------------------------------------------------------------------------------------------- */
  mostrarModalActualizar = data => {
    this.setState({
      form: data,
      actualizarModal: true
    });
  };

  actualizar = () => {
    const { form, data } = this.state;
    const indexToUpdate = data.findIndex((element) => element._id === form._id);
    const newData = [...data];
    newData[indexToUpdate] = { ...form };
    this.setState({ data: newData, actualizarModal: false });
    axios
      .put(`http://${IP}:9000/api/medicamentos/${form._id}`, form)
      .then((response) => {
        console.log("Data updated:", response.data);
        this.props.alertUP();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };
  

  cerrarModalActualizar = () => {
    this.setState({ actualizarModal: false });
  };

  mostrarModalEliminar = data => {
    this.setState({
      form: data,
      eliminarModal: true
    });
  };

  eliminar = () => {
    const { form, data } = this.state;
  
    // Realiza la llamada a la API para eliminar el registro en el servidor
    axios
      .delete(`http://${IP}:9000/api/medicamentos/${form._id}`)
      .then((response) => {
        console.log("Data deleted:", response.data);
  
        // Actualiza el estado para reflejar el cambio en la eliminación del registro
        const newData = data.filter((registro) => registro._id !== form._id);
        this.setState({ data: newData, eliminarModal: false });
        this.props.alertDE();
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };
  
  cerrarModalEliminar = () => {
    this.setState({ eliminarModal: false });
  }
  //--------detalles-------------------------//
  mostrarModalDetalles = data => {
    this.setState({
      form: data,
      detallesModal: true
    })
  }
  cerrarModalDetalles = () => {
    this.setState({ detallesModal: false });
  };  
  handleButtonClick = () => {
    const container = document.getElementById("containers");
    if (container.style.display === "none") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  };
  
    render() {
      const { data,insertarModal, actualizarModal, eliminarModal,detallesModal, form  } = this.state; // Extrae la variable data del estado
        return(
            <>
             <Button color="primary" onClick={this.handleButtonClick} className="categorias" style={{ marginLeft:"15%" }}>
             Averages per category
                </Button>
                <div id="containers" className="container-chartss" style={{ display: 'none' }}></div>
        <div className="Crud_admin">
  <Table className="table table-secondary table-hover">
    <thead >
      <tr>
        <th scope="col" style={{ width: "8%" }}>Category</th>
        <th scope="col" style={{ width: "10%" }}>Name</th>
        <th scope="col" style={{ width: "15%" }}>Scientific Name</th>
        <th scope="col" style={{ width: "10%" }}>Formula</th>
        <th scope="col" style={{ width: "5%" }}>Stock</th>
        <th scope="col" style={{ width: "15%" }}>Date of Expiry</th>
        <th scope="col" style={{ width: "fit-content", textAlign: "center" }}>ACTIONS</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody className="table-group-divider">
      {data.map(element => (
        <tr key={element._id}>  
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{Array.isArray(element.categoria) ? element.categoria.join(", ") : element.categoria}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.nombre}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.nombre_cientifico}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.formula}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.cantidad}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.fecha_caducidad}</td>
          <td style={{ textAlign: "center" }}>
            <Button
              color="primary"
              onClick={() => this.mostrarModalActualizar(element)}
              style={{ margin: "0 2px" }}
            >
              <i className="bi bi-capslock-fill"></i>
            </Button>
            <Button
              color="success"
              onClick={() => this.mostrarModalDetalles(element)}
              style={{ margin: "0 2px" }}
            >
              <i className="bi bi-card-text"></i>
            </Button>
            <Button
              color="danger"
              onClick={() => this.mostrarModalEliminar(element)}
              style={{ margin: "0 2px" }}
            >
              <i className="bi bi-trash"></i>
            </Button>
          </td>
          <td></td>
        </tr>
      ))}
    </tbody>
  </Table>
</div>
{/*--------------------------- INicio de ventana Modal UPD -----------------------------*/}
        <Modal isOpen={actualizarModal}>
          <ModalHeader>
            <div>
              <h3>Update Information</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>ID</label>
              <Input className="form-control" name="id" type="text" value={form._id} readOnly />
            </FormGroup> 
            <FormGroup>
              <label>Category</label>
              <Input className="form-control"   name="categoria" type="text" value={this.state.form.categoria} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Name</label>
              <Input className="form-control" name="name" type="text" value={this.state.form.nombre} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Scientific Name</label>
              <Input className="form-control" name="nombre_cientifico" type="text" value={this.state.form.nombre_cientifico} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Formula</label>
              <Input className="form-control" name="formula" type="text" value={this.state.form.formula} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Stock</label>
              <Input className="form-control" name="cantidad" type="number" value={this.state.form.cantidad} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Date of expiry</label>
              <Input className="form-control" name="fecha_caducidad" type="text" value={this.state.form.fecha_caducidad} onChange={this.handleChange}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="btn online-success" onClick={this.actualizar}>
              Update
            </Button>
            <Button color="danger" onClick={this.cerrarModalActualizar}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
{/*--------------------------- FInal de ventana Modal UPD -----------------------------*/}

{/*--------------------------- Inicio de ventana Modal ELiminar -----------------------------*/}
        <Modal isOpen={eliminarModal}>
          <ModalHeader>
            <div>
              <h3>Delete a medicine</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>ID</label>
              <Input className="form-control"  name="id" type="text" value={form._id} readOnly disabled/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="danger"onClick={this.eliminar}>
              Delete
            </Button>
            <Button color="secondary" onClick={this.cerrarModalEliminar}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
{/*--------------------------- FInal de ventana Modal ELIMINAR -----------------------------*/}
{/*--------------------------- Inicio de ventana Modal Detalles -----------------------------*/}
 <Modal isOpen={detallesModal}>
          <ModalHeader>
            <div>
              <h3>MORE MORE</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>ID</label>
              <section> {form._id}</section>
              <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>Category</label>
            <section>{form.categoria}</section>
            <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>Name</label>
              <section>{form.nombre}</section>
              <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>Scientific Name</label>
              <section>{form.nombre_cientifico}</section>
              <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>Formula</label>
              <section>{form.formula}</section>
              <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>Stock</label>
              <section>{form.cantidad}</section>
              <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>Date of expiry</label>
              <section>{form.fecha_caducidad}</section>
              <hr></hr>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
          <Button color="secondary" onClick={this.cerrarModalDetalles}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
{/*--------------------------- FInal de ventana Modal DEtalles -----------------------------*/}
            </>
        )}}