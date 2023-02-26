import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '.././App.css';
import { Form, Button } from 'react-bootstrap';
import Footer from './Footer';

const moment = require('moment');
const formattedDate = moment().format('DD/MM/YY');
console.log(formattedDate);

const Patient = () => {
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
              )
            }
          })
        };
    return (
        <>
        <div className="patient-title">
            <header> <h2 className="date focus-in-contract-bck">Hoy es {formattedDate} </h2>
            <h3 className="subtitle focus-in-contract-bck">Disfruta tu consulta</h3>
             </header>
        </div>
       
        <Form onSubmit={handleSubmit} className="Form">
            <h3 className="mb-4"> Datos del Paciente</h3>
            <Form.Control type="text" className="mb-3" placeholder="Nombre"/>
            <Form.Control type="text" className="mb-3" placeholder="Edad" />
            <Form.Control type="text" className="mb-3" placeholder="Patología" />
            <Button variant="primary" type="submit"> Enviar </Button>{' '}
        </Form>

        <Footer/>
        </>
    )};


        export default Patient;