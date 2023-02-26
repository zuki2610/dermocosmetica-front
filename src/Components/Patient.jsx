import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '.././App.css';
import { Form, Button } from 'react-bootstrap';
import Footer from './Footer';
import { Navigate } from 'react-router-dom';


const moment = require('moment');
const formattedDate = moment().format('DD/MM/YY');
console.log(formattedDate);

const Patient = () => {
    const [redirect, setRedirect] = useState(false);
    const formattedDate = moment().format('DD/MM/YY');
    console.log(formattedDate);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        Swal.fire({
            title: '¿Los datos son correctos?',
            text: "Es el momento de confirmarlos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#53a653',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Datos Correctos!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '¡Perfecto!',
                'Vamos a la siguiente pantalla',
                'success'
              ).then(() => {  
                setRedirect(true);
                console.log('Form submitted');
                })
            };
          })
        };
        if (redirect) {
            return <Navigate to="/dermocosmetica/medicinas" />;
          }
    return (
        <div className="App-patient">
        <div>
            <header className="patient-title text-focus-in"> 
            <h2 className="date focus-in-contract-bck me-4">Hoy es {formattedDate} </h2>
            <h3 className="subtitle focus-in-contract-bck">Disfruta tu consulta</h3>
             </header>
        </div>
        <Form onSubmit={handleSubmit} className="Form form jello-horizontal">
            <h3 className="mb-4"> Datos del Paciente</h3>
            <Form.Control type="text" className="mb-3" placeholder="Nombre"/>
            <Form.Control type="text" className="mb-3" placeholder="Edad" />
            <Form.Control type="text" className="mb-3" placeholder="Rut" />
            <Form.Control type="text" className="mb-3" placeholder="Patología" />
            <Form.Control type="text" className="mb-3" placeholder="Email" />
            <Button type="submit" className= "btn btn-patient"> Enviar </Button>{' '}
        </Form>
        <Footer/>
        </div>
    )};


        export default Patient;