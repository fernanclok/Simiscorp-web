import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../styles.css'
import LOGON from '../imgs/LOGONADMIN.png'
import slide1 from '../imgs/slide1.jpg'
import slide2 from '../imgs/slide2.jpg'
import slide3 from '../imgs/slide.jpeg'
import slide4 from '../imgs/slide4.jpg'
import slide5 from '../imgs/slide5.jpg'
import slide6 from '../imgs/slide9.jpeg'
import anticoagulante from '../imgs/anticoagulante.png'
import analgecicos from '../imgs/analgecicos.png'
import anticonceptivos from '../imgs/anticonceptivos.png'
import antiestaminicos from '../imgs/antiestaminico.png'
import dermatologico from '../imgs/dermatologico.png'
import antidepresivo from '../imgs/antidepresivos.png'
import antiinflamatorio from '../imgs/antinflamatorio.png'
import asma from '../imgs/asma.png'
import pastillas from '../imgs/pastillas.png'
import '../fondo.css'
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";
export default class catalogo2 extends React.Component {
  state = {
    aModal: false,bModal:false,cModal: false,dModal:false,eModal: false, fModal:false,
    gModal: false,hModal:false,iModal: false,jModal:false,
    form: {
      id: "",
      username: "",
      email: ""
    }
  };
/* ------------------------------Modal para analgecicos */
    mostrarModalA = () => {
      this.setState({ aModal: true });
    };
    cerrarModalA = () => {
      this.setState({ aModal: false });
  };
/*-------------------------------Modal para anticoagulante */
    mostrarModalb = () => {
      this.setState({ bModal: true });
    };
    cerrarModalb = () => {
      this.setState({ bModal: false });
    };
/*-------------------------------Modal para antiestaminicos */
    mostrarModalc = () => {
      this.setState({ cModal: true });
    };
    cerrarModalc = () => {
      this.setState({ cModal: false });
    };
/*-------------------------------Modal para antidepresivos */
    mostrarModale = () => {
      this.setState({ eModal: true });
    };
    cerrarModale = () => {
      this.setState({ eModal: false });
    };
/*-------------------------------Modal para antiinflamatorio */
    mostrarModalf = () => {
      this.setState({ fModal: true });
    };
    cerrarModalf = () => {
      this.setState({ fModal: false });
    };
/*-------------------------------Modal para asma */
    mostrarModalg = () => {
      this.setState({ gModal: true });
    };
    cerrarModalg = () => {
      this.setState({ gModal: false });
    };
/*-------------------------------Modal para dermatologico */
    mostrarModalh = () => {
      this.setState({ hModal: true });
    };
    cerrarModalh = () => {
      this.setState({ hModal: false });
    };
/*-------------------------------Modal para anticonceptivos */
    mostrarModali = () => {
      this.setState({ iModal: true });
    };
    cerrarModali = () => {
      this.setState({ iModal: false });
    };
/*-------------------------------Modal para pastillas */
    mostrarModalj = () => {
      this.setState({ jModal: true });
    };
    cerrarModalj = () => {
      this.setState({ jModal: false });
    };
    render(){
        return(
            <>
            <div className='welcomes'>
      <h1 className="title">Take a look at our catalog!!</h1>
      </div>
    <div className='carrousel'>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" style={{ width: "100%", height: "500px" }}>
      <img src={slide1} className="d-block w-100 img-fluid" alt="carrouselCHIDO" style={{ objectFit: "cover", objectPosition: "center" }} />
    </div>
    <div className="carousel-item" style={{ width: "100%", height: "500px" }}>
      <img src={slide2} className="d-block w-100 img-fluid" alt="carrouselCHIDO" style={{ objectFit: "cover", objectPosition: "center" }} />
    </div>
    <div className="carousel-item" style={{ width: "100%", height: "500px" }}>
      <img src={slide3} className="d-block w-100 img-fluid" alt="carrouselCHIDO" style={{ objectFit: "cover", objectPosition: "center" }} />
    </div>
    <div className="carousel-item" style={{ width: "100%", height: "500px" }}>
      <img src={slide4} className="d-block w-100 img-fluid" alt="carrouselCHIDO" style={{ objectFit: "cover", objectPosition: "center" }} />
    </div>
    <div className="carousel-item" style={{ width: "100%", height: "500px" }}>
      <img src={slide5} className="d-block w-100 img-fluid" alt="carrouselCHIDO" style={{ objectFit: "cover", objectPosition: "center" }} />
    </div>
    <div className="carousel-item" style={{ width: "100%", height: "500px" }}>
      <img src={slide6} className="d-block w-100 img-fluid" alt="carrouselCHIDO" style={{ objectFit: "cover", objectPosition: "center" }} />
    </div>
  </div>
</div>
  </div>
<div className="container text-center" style={{ marginTop: "5%",marginBottom: "10%" }}>
  <div className="row">
    <div className="col"><div className='sections' style={{ marginTop: "5%",marginBottom: "10%" }}>
      <img src={analgecicos} alt="consolaX" className="Catimagenes"/><br></br>
      <a className="texto">Analgecicos</a>
      <p style={{textAlign: "center", alignContent: "center", width:"300px", marginLeft:"2%"}}>Pain relievers are medicines that reduce or relieve headaches,
        muscular, arthritic or many other aches and pains. There are many different types of pain relievers, and each has its advantages and risks.</p>
      <Button color='outline-primary' onClick={this.mostrarModalA} style={{ marginTop: "5%",marginBottom: "10%" }}><i class="bi bi-chat-square-text" style={{ marginRight: "8px" }}></i><span>Details</span></Button>
      <Modal isOpen={this.state.aModal} style={{ maxWidth: "50%", width: "100%" }}>
        <ModalHeader>
          <div>
            <h3 style={{color: "#41739d"}}>More of analgesics</h3>
          </div>
          <div className="cerrar" onClick={this.cerrarModalA}>X</div>
        </ModalHeader>
        <ModalBody>
          <div class="grid-container">
            <div class="grid-item">
           <div style={{ width:"90%"}}><h2 className='subtitle'>Description</h2>
           <p style={{textAlign: "center", alignContent: "center"}}>Pain relievers are medicines that reduce or relieve headaches, muscle pain, arthritic pain, or
           many other aches and pains. There are many different types of pain relievers and each has its advantages and
           risks. Some types of pain respond better to certain medicines than others. Also, each person may have a slightly different response to a pain reliever.</p></div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Formula</h2>
              <p style={{textAlign: "center", alignContent: "center"}}>[Naproxeno]C14H13NaO3</p>
              </div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Tips</h2> 
              <p style={{textAlign: "center", alignContent: "center"}}>It is recommended to consume only the amounts indicated by
                your doctor, as well as the appropriate grams for pain relief.
              </p>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault" checked disabled />
                <label class="form-check-label" for="flexCheckDefault">
                  Refrigerate
                </label>
              </div>
            </div>
            <div>
              <img src={analgecicos} alt="medicine" className="image-container" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.cerrarModalA} >
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
    <div className="col"><div className='sections'>
      <img src={anticoagulante} alt="consolaX" className="Catimagenes" /><br></br>
      <a className="texto">Anticuagulantes</a><br></br>
      <p style={{textAlign: "center", alignContent: "center", width:"300px", marginLeft:"2%"}}>
      Anticoagulants are medicines that prevent the formation of blood clots.
       They don't break up clots you already have, but they can keep them from growing.
      </p>
        <Button color='outline-primary' onClick={this.mostrarModalb} style={{ marginTop: "0%",marginBottom: "5%" }}><i class="bi bi-chat-square-text" style={{ marginRight: "8px" }}></i><span>Details</span></Button>
      <Modal isOpen={this.state.bModal} style={{ maxWidth: "50%", width: "100%" }}>
        <ModalHeader>
          <div>
            <h3 style={{color: "#41739d"}}>More medicines!!</h3>
          </div>
          <div className="cerrar" onClick={this.cerrarModalb}>X</div>
        </ModalHeader>
        <ModalBody>
        <div class="grid-container">
            <div class="grid-item">
           <div style={{ width:"90%"}}><h2 className='subtitle'>Description</h2>
           <p>
           In medicine and pharmacy, an anticoagulant is an endogenous or exogenous substance that interferes or inhibits blood coagulation, creating an antithrombotic or prohemorrhagic state.
              Endogenous substances, produced by the organism itself, and exogenous substances are distinguished. </p></div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Formula</h2>
              <p style={{textAlign: "center", alignContent: "center"}}>[Rivaroxaban]C19-H18-N3-O5-SCI</p>
              </div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Tips</h2> 
              <p style={{textAlign: "center", alignContent: "center"}}>It is recommended to consume only the amounts indicated by
                your doctor, as well as the appropriate grams for pain relief.
              </p>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault" checked disabled />
                <label class="form-check-label" for="flexCheckDefault">
                  Refrigerate
                </label>
              </div>
            </div>
            <div>
            <img src={anticoagulante} alt="medicine" className="image-container" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.cerrarModalb}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
    <div className="col"><div className='sections'>
      <img src={antiestaminicos} alt="consola" className="Catimagenes" /><br />
      <a className="texto">Antiestaminicos</a>
      <p style={{textAlign: "center", alignContent: "center", width:"300px", marginLeft:"2%"}}>Antihistamines are the most widely used drugs in the treatment of
        allergic diseases. This is a group of drugs whose common feature is to inhibit the effects of histamine. </p>
        <Button color='outline-primary' onClick={this.mostrarModalc} style={{ marginTop: "0%",marginBottom: "5%" }}><i class="bi bi-chat-square-text" style={{ marginRight: "8px" }}></i><span>Details</span></Button>
      <Modal isOpen={this.state.cModal} style={{ maxWidth: "50%", width: "100%" }}>
        <ModalHeader>
          <div>
            <h3 style={{color: "#41739d"}}>More of Antiestaminicos!!</h3>
          </div>
          <div className="cerrar" onClick={this.cerrarModalc}>X</div>
        </ModalHeader>
        <ModalBody>
        <div class="grid-container">
            <div class="grid-item">
           <div style={{ width:"90%"}}><h2 className='subtitle'>Description</h2>
           <p style={{textAlign: "center", alignContent: "center", width:"300px", marginLeft:"2%"}}>
           Antihistamines are the most widely used drugs in the treatment of allergic diseases. 
           This is a group of drugs whose common feature is to inhibit the effects of histamine. Histamine is a chemical present in all tissues of the body,
           made and stored in specialized cells called mast cells and in a type of white blood cell called basophils. Involved in numerous physiological processes
           </p></div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Formula</h2>
              <p style={{textAlign: "center", alignContent: "center"}}>[Allegra]OH3-N-O</p>
              </div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Tips</h2> 
              <p style={{textAlign: "center", alignContent: "center"}}>It is recommended to consume only the amounts indicated by
                your doctor, as well as the appropriate grams for pain relief.
              </p>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault" checked disabled />
                <label class="form-check-label" for="flexCheckDefault">
                  Refrigerate
                </label>
              </div>
            </div>
            <div>
            <img src={antiestaminicos} alt="medicine" className="image-container" />
           
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.cerrarModalc}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col">
      <div className='sections'>
      <img src={antidepresivo} alt="consola" className="Catimagenes" /><br />
      <a className="texto">Antidepresivos</a>
      <p style={{textAlign: "center", alignContent: "center", width:"300px", marginLeft:"2%"}}>Antidepressants are medicines prescribed for mood problems, such as depression and anxiety, as well as pain and trouble sleeping.
         You may have to try several until your healthcare professional finds the best one for you.</p>
        <Button color='outline-primary' onClick={this.mostrarModale} style={{ marginTop: "0%",marginBottom: "5%" }}><i class="bi bi-chat-square-text" style={{ marginRight: "8px" }}></i><span>Details</span></Button>
      <Modal isOpen={this.state.eModal} style={{ maxWidth: "50%", width: "100%" }}>
        <ModalHeader>
          <div>
            <h3 style={{color: "#41739d"}}>More medicines!</h3>
          </div>
          <div className="cerrar" onClick={this.cerrarModale}>X</div>
        </ModalHeader>
        <ModalBody>
        <div class="grid-container">
            <div class="grid-item">
           <div style={{ width:"90%"}}><h2 className='subtitle'>Description</h2>
           <p>
           Antidepressants help balance chemicals in the brain. They improve mood, concentration and sleep. 
           Sometimes they take several weeks (usually four to six) to take full effect.
           </p></div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Formula</h2>
              <p style={{textAlign: "center", alignContent: "center"}}>[Taflavix]<br />
              "Valeriana officinalis", "Passiflora incamata"</p>
              </div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Tips</h2> 
              <p style={{textAlign: "center", alignContent: "center"}}>It is recommended to consume only the amounts indicated by
                your doctor, as well as the appropriate grams for pain relief.
              </p>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault" checked disabled />
                <label class="form-check-label" for="flexCheckDefault">
                  Refrigerate
                </label>
              </div>
            </div>
            <div>
            <img src={antidepresivo} alt="medicine" className="image-container" />
           
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.cerrarModale}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
    <div className="col"><div className='sections'>
      <img src={antiinflamatorio} alt="games" className="Catimagenes" /><br />
      <a className="texto">Antiinflamatorios</a>
      <p style={{textAlign: "center", alignContent: "center", width:"300px", marginLeft:"2%"}}>A drug or substance that reduces inflammation (redness, swelling, and pain) in the body.
       Anti-inflammatory drugs stop certain substances in the body from causing inflammation. They are used in the treatment 
        of many different conditions.</p>
        <Button color='outline-primary' onClick={this.mostrarModalf} style={{ marginTop: "0%",marginBottom: "5%" }}><i class="bi bi-chat-square-text" style={{ marginRight: "8px" }}></i><span>Details</span></Button>
      <Modal isOpen={this.state.fModal} style={{ maxWidth: "50%", width: "100%" }}>
        <ModalHeader>
          <div>
            <h3 style={{color: "#41739d"}}>More medicines!!</h3>
          </div>
          <div className="cerrar" onClick={this.cerrarModalf}>X</div>
        </ModalHeader>
        <ModalBody>
        <div class="grid-container">
            <div class="grid-item">
           <div style={{ width:"90%"}}><h2 className='subtitle'>Description</h2>
           <p>
           A drug or substance that reduces inflammation (redness, swelling, and pain) in the body. Anti-inflammatory drugs stop certain substances in the body from causing inflammation. They are used in the treatment of many different conditions.
            Some anti-inflammatory drugs are being studied in the prevention and treatment of cancer.</p></div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Formula</h2>
              <p style={{textAlign: "center", alignContent: "center"}}>[Flanax]H3C-O-H-CH3-CO2H</p>
              </div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Tips</h2> 
              <p style={{textAlign: "center", alignContent: "center"}}>It is recommended to consume only the amounts indicated by
                your doctor, as well as the appropriate grams for pain relief.
              </p>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault" checked disabled />
                <label class="form-check-label" for="flexCheckDefault">
                  Refrigerate
                </label>
              </div>
            </div>
            <div>
            <img src={antiinflamatorio} alt="medicine" className="image-container" />
           
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.cerrarModalf}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
    <div className="col"><div className='sections'>
      <img src={asma} alt="consolaX" className="Catimagenes" /><br />
      <a className="texto">Respiratorios</a>
      <p style={{textAlign: "center", alignContent: "center", width:"300px", marginLeft:"2%"}}>
      Asthma is usually treated with rescue inhalers to attack symptoms and controller 
      inhalers (steroids) that prevent symptoms. More severe cases may require 
      long-acting inhalers that keep the airways open, in addition to oral steroids.</p>
        <Button color='outline-primary' onClick={this.mostrarModalg} style={{ marginTop: "0%",marginBottom: "5%" }}><i class="bi bi-chat-square-text" style={{ marginRight: "8px" }}></i><span>Details</span></Button>
      <Modal isOpen={this.state.gModal} style={{ maxWidth: "50%", width: "100%" }}>
        <ModalHeader>
          <div>
            <h3 style={{color: "#41739d"}}>More medicines!!</h3>
          </div>
          <div className="cerrar" onClick={this.cerrarModalg}>X</div>
        </ModalHeader>
        <ModalBody>
        <div class="grid-container">
            <div class="grid-item">
           <div style={{ width:"90%"}}><h2 className='subtitle'>Description</h2>
           <p>
           Asthma is usually treated with rescue inhalers to attack symptoms and controller inhalers (steroids) that prevent symptoms. 
           More severe cases may require long-acting inhalers that keep the airways open, in addition to oral steroids.
           </p></div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Formula</h2>
              <p style={{textAlign: "center", alignContent: "center"}}>[Salbutamol]2HO-OH-HN</p>
              </div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Tips</h2> 
              <p style={{textAlign: "center", alignContent: "center"}}>It is recommended to consume only the amounts indicated by
                your doctor, as well as the appropriate grams for pain relief.
              </p>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault" checked disabled />
                <label class="form-check-label" for="flexCheckDefault">
                  Refrigerate
                </label>
              </div>
            </div>
            <div>
            <img src={asma} alt="medicine" className="image-container" />
           
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.cerrarModalg}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col"><div className='sections'>
      <img src={dermatologico} alt="consolaX" className="Catimagenes" /><br></br>
      <a className="texto">Dermatologicos</a>
      <p style={{textAlign: "center", alignContent: "center", width:"300px", marginLeft:"2%"}}>
      Dermatological treatments address the symptoms of the skin disease that can vary significantly, depending 
      on the problem you have. Skin changes 
      are not always due to skin diseases. For example, you might get a blister from wearing ill-fitting shoes.
        </p>
        <Button color='outline-primary' onClick={this.mostrarModalh} style={{ marginTop: "0%",marginBottom: "5%" }}><i class="bi bi-chat-square-text" style={{ marginRight: "8px" }}></i><span>Details</span></Button>
      <Modal isOpen={this.state.hModal} style={{ maxWidth: "50%", width: "100%" }}>
        <ModalHeader>
          <div>
            <h3 style={{color: "#41739d"}}>More medicines!!</h3>
          </div>
          <div className="cerrar" onClick={this.cerrarModalh}>X</div>
        </ModalHeader>
        <ModalBody>
        <div class="grid-container">
            <div class="grid-item">
           <div style={{ width:"90%"}}><h2 className='subtitle'>Description</h2>
           <p>
           Dermatological treatments address the symptoms of the skin disease that can vary significantly, depending 
            on the problem you have. Skin changes 
            are not always due to skin diseases. For example, you might get a blister from wearing ill-fitting shoes.
           </p></div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Formula</h2>
              <p style={{textAlign: "center", alignContent: "center"}}>[Recoveron]</p>
              </div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Tips</h2> 
              <p style={{textAlign: "center", alignContent: "center"}}>It is recommended to consume only the amounts indicated by
                your doctor, as well as the appropriate grams for pain relief.
              </p>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault" disabled />
                <label class="form-check-label" for="flexCheckDefault">
                 NO Refrigerate
                </label>
              </div>
            </div>
            <div>
            <img src={dermatologico} alt="medicine" className="image-container" />
           
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.cerrarModalh}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
    <div className="col"><div className='sections'>
      <img src={anticonceptivos} alt="consola" className="Catimagenes" /><br></br>
      <a className="texto">Anticonseptivos</a>
      <p style={{textAlign: "center", alignContent: "center", width:"300px", marginLeft:"2%"}}>Contraception, contraception, or birth control is any method or device to prevent unwanted pregnancy.
       The planning, provision, and use of contraceptive methods is called family planning.</p>
        <Button color='outline-primary' onClick={this.mostrarModali} style={{ marginTop: "0%",marginBottom: "5%" }}><i class="bi bi-chat-square-text" style={{ marginRight: "8px" }}></i><span>Details</span></Button>
      <Modal isOpen={this.state.iModal} style={{ maxWidth: "50%", width: "100%" }}>
        <ModalHeader>
          <div>
            <h3 style={{color: "#41739d"}}>More medicines!!</h3>
          </div>
          <div className="cerrar" onClick={this.cerrarModali}>X</div>
        </ModalHeader>
        <ModalBody>
        <div class="grid-container">
            <div class="grid-item">
           <div style={{ width:"90%"}}><h2 className='subtitle'>Description</h2>
           <p>
           Contraception, contraception, or birth control is any method or device to prevent unwanted pregnancy.
            The planning, provision, and use of contraceptive methods is called family planning.</p></div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Formula</h2>
              <p style={{textAlign: "center", alignContent: "center"}}>[Anticonseptivos] NA but is based in latex </p>
              </div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Tips</h2> 
              <p style={{textAlign: "center", alignContent: "center"}}>It is recommended to use only in special case, like
              if you don't want give a baby, the doctors recommend you use this type of medicine.
              </p>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault"  disabled />
                <label class="form-check-label" for="flexCheckDefault">
                  NO Refrigerate
                </label>
              </div>
            </div>
            <div>
            <img src={anticonceptivos}  alt="medicine" className="image-container" />
           
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.cerrarModali}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
    <div className="col"><div className='sections'>
      <img src={pastillas} alt="consola" className="Catimagenes" /><br></br>
      <a className="texto">Pastillas</a>
      <p style={{textAlign: "center", alignContent: "center", width:"300px", marginLeft:"2%"}}>A tablet is a solid dosage form that contains one or more active ingredients with therapeutic activity and excipients, formulated in size and shape for proper use. 
      They are obtained by agglomerating, by compression, a constant volume of particles.</p>
         <Button color='outline-primary' onClick={this.mostrarModalj} style={{ marginTop: "0%",marginBottom: "5%" }}><i class="bi bi-chat-square-text" style={{ marginRight: "8px" }}></i><span>Details</span></Button>
      <Modal isOpen={this.state.jModal} style={{ maxWidth: "50%", width: "100%" }}>
        <ModalHeader>
          <div>
            <h3 style={{color: "#41739d"}}>More medicines!!</h3>
          </div>
          <div className="cerrar" onClick={this.cerrarModalj}>X</div>
        </ModalHeader>
        <ModalBody>
      
        <div class="grid-container">
            <div class="grid-item">
           <div style={{ width:"90%"}}><h2 className='subtitle'>Description</h2>
           <p>
           A tablet is a solid dosage form that contains one or more active ingredients with therapeutic activity and excipients, formulated in size and 
           shape for proper use. They are obtained by agglomerating, by compression, a constant volume of particles.
           </p></div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Formula</h2>
              <p style={{textAlign: "center", alignContent: "center"}}>[Paracetamol]C8-H9-NO2</p>
              </div>
              <div style={{ width:"50%"}}><h2 className='subtitle'>Tips</h2> 
              <p style={{textAlign: "center", alignContent: "center"}}>It is recommended to consume only the amounts indicated by
                your doctor, as well as the appropriate grams for pain relief.
              </p>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="flexCheckDefault"  disabled />
                <label class="form-check-label" for="flexCheckDefault">
                 No Refrigerate
                </label>
              </div>
            </div>
            <div>
            <img src={pastillas}  alt="medicine" className="image-container" />
           
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.cerrarModalj}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    </div>
  </div>
</div>

    </>
        )
    }}