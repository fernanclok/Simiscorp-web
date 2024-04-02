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

  export default class users extends React.Component {
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
        nombre: "",
        apellPaterno:"",
        apellMaterno:"",
        correo:"",
        usuario:"",
        password:"",
      }
    };
    hideAlert1 = () => {
      this.setState({ alertUP: false });
    };
    hideAlert2 = () => {
      this.setState({ alertDE: false });
    };
    componentDidMount() {
      axios.get("http://"+IP+":9000/api/administradores")
        .then(response => {
          this.setState({ data: response.data });
          this.fetchData();
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
    fetchData = () => {
      axios.get("http://"+IP+":9000/api/administradores")
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
        .post("http://"+IP+":9000/api/administradores", newRecord)
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
      .put(`http://${IP}:9000/api/administradores/${form._id}`, form)
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
      .delete(`http://${IP}:9000/api/administradores/${form._id}`)
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
        <div className="Crud_admin3">
  <Table className="table table-secondary table-hover">
    <thead>
      <tr>
        <th scope="col" style={{ width: "10%" }}>Name</th>
        <th scope="col" style={{ width: "15%" }}>Paternal suraname</th>
        <th scope="col" style={{ width: "15%" }}>Maternal surname</th>
        <th scope="col" style={{ width: "15%" }}>E-mail</th>
        <th scope="col" style={{ width: "5%" }}>User name</th>
        
        <th></th>
        <th scope="col" style={{ width: "fit-content", textAlign: "center" }}>Actions</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody className="table-group-divider">
      {data.map(element => (
        <tr key={element._id}>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.nombre}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.apellPaterno}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.apellMaterno}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.correo}</td>
          <td style={{ textAlign: "center", verticalAlign: "middle" }}>{element.usuario}</td>
          
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
              <label>Name</label>
              <Input className="form-control"  pattern= "[A-Za-z ]"  name="nombre" type="text" value={this.state.form.nombre} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Paternal surname</label>
              <Input className="form-control" name="apellPaterno" pattern= "[A-Za-z ]" type="text" value={this.state.form.apellPaterno} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Maternal surname</label>
              <Input className="form-control" name="apellMaterno" type="text" pattern= "[A-Za-z ]" value={this.state.form.apellMaterno} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Email</label>
              <Input className="form-control" name="correo" type="email" value={this.state.form.correo} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>UserName</label>
              <Input className="form-control" name="usuario"type="text" value={this.state.form.usuario} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <label>Password</label>
              <Input className="form-control" name="password" type="password" value={this.state.form.password} onChange={this.handleChange}/>
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
              <h3>Delete User</h3>
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
              <h3>More about {form.nombre}</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>ID</label>
              <section> {form._id}</section>
              <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>Name</label>
            <section>{form.nombre}</section>
            <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>Paternal surname</label>
              <section>{form.apellPaterno}</section>
              <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>Paternal surname</label>
              <section>{form.apellMaterno}</section>
              <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>Email</label>
              <section>{form.correo}</section>
              <hr></hr>
            </FormGroup>
            <FormGroup>
              <label>User name</label>
              <section>{form.usuario}</section>
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