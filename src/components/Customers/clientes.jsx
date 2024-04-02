import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles.css';
import '../../fondo.css'
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

  export default class customers extends React.Component {
    state = {
      data: [], // Inicializa data como un array vacío
      errors: {},
      alertUP:false,
      alertDE:false,
      insertarModal: false,
      actualizarModal: false,
      eliminarModal: false,
      detalles: false,
      form: {
        _id: "",
        empresa:"",
        zona_asignada:"",
      }
    };
    hideAlert1 = () => {
      this.setState({ alertUP: false });
    };
    hideAlert2 = () => {
      this.setState({ alertDE: false });
    };
    componentDidMount() {
      axios.get("http://"+IP+":9000/api/clientes")
        .then(response => {
          this.setState({ data: response.data });
          this.fetchData();
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
    fetchData = () => {
      axios.get("http://"+IP+":9000/api/clientes")
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

      mostrarModalInsertar = () => {
        this.setState({ insertarModal: true });
      };
      
    insertar = () => {
      const { form, data } = this.state;
      const newRecord = { ...form };
      const newData = [...data, newRecord];
      this.setState({ data: newData, insertarModal: false });
    
      axios
        .post("http://"+IP+":9000/api/clientes", newRecord)
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
      .put(`http://${IP}:9000/api/clientes/${form._id}`, form)
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
      .delete(`http://${IP}:9000/api/clientes/${form._id}`)
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
    render() {
      const { data,insertarModal, actualizarModal, eliminarModal,detallesModal, form  } = this.state; // Extrae la variable data del estado
        return(
            <>
        <div className="Crud_admin2">
  <Table className="table table-info table-striped">
    <thead>
      <tr>
        <th scope="col" style={{ width: "5%" }}>ID</th>
        <th scope="col" style={{ width: "32%" }}>Company</th>
        <th scope="col" style={{ width: "32%" }}>Asignated zone</th>
        <th></th>
        <th scope="col" style={{ width: "fit-content", textAlign: "center" }}>Actions</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody className="table-group-divider">
      {data.map(element => (
        <tr key={element._id}>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element._id}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.empresa}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.zona_asignada}</td>
          <td></td>
          <td style={{ textAlign: "center" }}>
            <Button
              color="primary"
              onClick={() => this.mostrarModalActualizar(element)}
              style={{ margin: "0 5px" }}
            >
              <i className="bi bi-capslock-fill"></i>
            </Button>
            <Button
              color="success"
              onClick={() => this.mostrarModalDetalles(element)}
              style={{ margin: "0 5px" }}
            >
              <i className="bi bi-card-text"></i>
            </Button>
            <Button
              color="danger"
              onClick={() => this.mostrarModalEliminar(element)}
              style={{ margin: "0 5px" }}
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
              <label>Company</label>
              <Input className="form-control"  pattern= "[A-Za-z ]+"  name="empresa" type="text" value={this.state.form.empresa} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Asignated zone</label>
              <Input className="form-control" name="zona_asignada" pattern= "[0-9]+" type="number" value={this.state.form.zona_asignada} onChange={this.handleChange}/>
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
              <h3>Delete Customer</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>ID</label>
              <Input className="form-control"  name="id" type="text" value={form._id} readOnly/>
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
              <h3>More about {form.empresa}</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>ID</label>
              <section> {form._id}</section>
              <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>Company</label>
            <section>{form.empresa}</section>
            <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>Asignated Zone</label>
              <section>{form.zona_asignada}</section>
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