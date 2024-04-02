import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css'
import noticia from '../imgs/noticia1.jpeg'
import anticuagulante from '../imgs/anticoagulante.png'
import anticonseptivos from '../imgs/anticonceptivos.png'
import antiestaminicos from '../imgs/antiestaminico.png'
const noticias = [
  {
    imagen: noticia,
    titulo: 'Fuerte aumento de lesiones hepáticas graves relacionadas con el alcohol',
    descripcion: 'Not only increased hospitalization but also increased mortality',
    enlace: 'https://www.intramed.net/contenidover.asp?contenidoid=104934',
  },
  {
    imagen: noticia,
    titulo: 'Nuevo mecanismo para la rápida evolución de las infecciones multirresistentes',
    descripcion: 'Mixed-strain pathogen populations accelerate the evolution of antibiotic resistance',
    enlace: 'https://www.intramed.net/contenidover.asp?contenidoid=104938',
  },
  {
    imagen: noticia,
    titulo: 'Nuevas directrices sobre pruebas de trombofilia',
    descripcion: 'American Society of Hematology 2023 Guidelines for the Treatment of Venous Thromboembolism: Testing for Thrombophilia',
    enlace: 'https://www.intramed.net/contenidover.asp?contenidoid=104987',
  },
  {
    imagen: noticia,
    titulo: 'La OMS catalogó al edulcorante aspartamo como “posiblemente cancerígeno”',
    descripcion: 'This is how the IARC concluded. Although the same "risk-free" daily doses in force since 1981 were maintained.',
    enlace: 'https://www.intramed.net/contenidover.asp?contenidoid=104968',
  },
  // Agregar más noticias aquí...
];
export default class index extends React.Component {
    state = {}
    render(){
        return(
            <>
            
<div className="welcome">
    <h1 className="title">Welcome to an inventory secure and agile</h1>
</div>
    <div className="top-games">
      <h2 style={{color:"#41739d"}}>Frequently used</h2>
      <section className="Flotante">  
        <div className="card1" >
          <div className="card" style={{width: "17rem;"}}>
            <img src={anticuagulante}className="card-img-top" />
              <div className="card-body">
                <p className="card-text">Anticuagulants</p>
                <p className="card-info"style={{textAlign: "center", alignContent: "center",marginLeft:"2%"}}>
                They are a category of drugs
                 specialized in preventing the coagulation processes of things that
                  they need to be kept in a liquid state.
                </p>
              </div>
        </div>
        </div>
        </section>
        <section className="Flotante">
          <div className="card2">
            <div className="card" style={{width: "17rem;"}}>
                <img src={anticonseptivos} className="card-img-top" />
                <div className="card-body">
                  <p className="card-text">Contraceptives</p>
                  <p className="card-info" style={{textAlign: "center", alignContent: "center",marginLeft:"2%"}}>               
                    Oral hormonal contraceptives, or birth control pills, 
                    are a safe and effective method of temporarily preventing pregnancy.
                  </p>
                </div>
            </div>
          </div>
        </section>
        <section className="Flotante">
        <div className="card3">
            <div className="card" style={{width: "17rem;"}}>
              <img src={antiestaminicos} className="card-img-top" />
              <div className="card-body">
                <p className="card-text">Antihistamines</p>
                <p className="card-info" style={{textAlign: "center", alignContent: "center",marginLeft:"2%"}}>An antihistamine is a drug used to reduce or
                 eliminate the effects of allergies, which works by blocking the action of histamine in
                 allergic reactions
                </p>
              </div>
            </div>
        </div>
        </section>
    </div>
    <br />
    <br />
    <div className="information">
      <div className='inf'>
        <h2 style={{color: "#41739d"}}>Welcome</h2>
        <p style={{fontSize : "18px"}}>Welcome to Simis Corp! Here we will find an easy and accessible way to manage
          an inventory for a pharmaceutical distributor, within this catalog of medicines you will count
          with a brief description of the categories stored within your warehouse, that being said
          We hope you find this space pleasant, therefore we leave some space for interesting news.
        </p>
      </div>
        <div className='container'>
      {noticias.map((noticia, index) => (
        <a key={index} href={noticia.enlace} className='noticiaContainer'>
          <img src={noticia.imagen} alt={noticia.titulo} className='imagen' />
          <h2 className='titulo'>{noticia.titulo}</h2>
          <p className='descripcion'>{noticia.descripcion}</p>
        </a>
      ))}
    </div>
    </div>
    </>
        );
}
}