import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '.././App.css';
import { Form, Button, } from 'react-bootstrap';
import Footer from './Footer';
import { BsFillTrashFill, BsCheck2Circle, BsFillSaveFill  } from "react-icons/bs";



const Medicines = () => {
    return (
   <div className="Medicines">
   <div className="App-medicines">
    <div className="container-grid">
          <div className="categories ms-5">
            <header className="bienvenida blink-1"> 
            <h2 className="medicine-title datefocus-in-contract-bck me-4 pt-4">Hoy recomendarás la siguiente Rutina </h2>
             </header>
        </div>
    <main className="main medicine-main">
    <div className="form form-medicina mb-5">
    <h2 className="form-label">Categoría</h2>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Piel Mixta-Oleosa</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Piel Sensible</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Hidratación</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Limpieza</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Vitaminas</label>
</div>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Capilar</label>
</div>
<Button type="submit" className= "btn btn-medicines"> Enviar </Button>{' '}
    </div>
    <div>
    <div className="form form-medicina">
    <h2 className="form-label fs-4">Nueva Categoría</h2>
    <div>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
  <Button type="submit" className= "btn btn-medicines"> Agregar </Button>{' '}
    </div>
</div>
    </div>
    </main>
    <article className="article">
    <div className="container">
    <div className="card form flex-row flex-wrap">
        <div className="card-header border-0">
            <img className="card-img" src="https://falabella.scene7.com/is/image/Falabella/50077328_1?wid=800&hei=800&qlt=70" alt=""/>
        </div>
        <div className="card-block px-2">
            <h5 className="card-title">Nombre:<span className="text-secondary">tomate</span></h5>
            <h6 className="card-text">Categoría:<span className="text-secondary">tomatican</span></h6>
            <h6 className="card-text">Marca:<span className="text-secondary">tomaton</span></h6>
            <h6 className="card-text">Componentes:<span className="text-secondary">tomate</span></h6>
            <h4 type="submit" className= "btn btn-medicines2"> <BsCheck2Circle/> </h4>{' '}
            <h4 type="submit" className= "btn btn-medicines2"> <BsFillTrashFill/> </h4>{' '}
        </div>
    </div>
   </div> 
   <div className="form form-PDF">
    <h6 className="text-secondary">Generar PDF</h6>
    <div>
  <h4 type="submit" className= "btn btn-PDF"><BsFillSaveFill /></h4>{' '}
    </div>
</div>
   <div className="container mt-5">
    <div className="card form flex-row flex-wrap newMedicine">
        <div className="card-header border-0">
   <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Añadir nueva medicina</Form.Label>
        <Form.Control type="text"className="mb-2" placeholder="Nombre" />
        <Form.Control type="text"className="mb-2" placeholder="Marca" />
        <Form.Control type="text"className="mb-2" placeholder="Componente" />
        <Form.Control type="text"className="mb-2"  placeholder="URL imagen" />
        </Form.Group>
    </Form>
        </div>
        </div>
        </div>
    </article>
    <Footer/>
    </div>
    </div>
    </div>
    );
  }
  export default Medicines;