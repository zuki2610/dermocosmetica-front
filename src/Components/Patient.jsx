import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";import ".././App.css";
import { Form, Button } from "react-bootstrap";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import { guardarDatosEnLocalStorage, obtenerDatosDeLocalStorage } from "../storage";
import DatePicker from "react-datepicker";


const moment = require("moment");
const formattedDate = moment().format("DD/MM/YY");
console.log(formattedDate);

const Patient = () => {
  const [redirect, setRedirect] = useState(false);
  const formattedDate = moment().format("DD/MM/YY");
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [rut, setRut] = useState('');
  const [patologia, setPatologia] = useState('');
  const [email, setEmail] = useState('');

  const { token } = obtenerDatosDeLocalStorage("token");

  console.log(formattedDate);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    Swal.fire({
      title: "¿Los datos son correctos?",
      text: "Es el momento de confirmarlos",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#53a653",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Datos Correctos!",
    }).then(async (result) => {
      console.log(token);
      if (result.isConfirmed) {
        Swal.fire("¡Perfecto!", "Vamos a la siguiente pantalla", "success").then(async () => {
          try {
            const response = await fetch("http://localhost:3001/api/dermocosmetica/pacientes", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Bearer ${token}` : "",
              },
              body: JSON.stringify({
                nombre,
                fechaNacimiento,
                rut,
                patologia,
                email,
              }),
            });
  
            if (response.status === 200) {
              const paciente = await response.json();
              console.log("Form submitted", response);
              guardarDatosEnLocalStorage("paciente", JSON.stringify(paciente.data));
              setRedirect(true);
            }
          } catch (error) {
            console.log(error);
          }
        });
      }
    });
  };

  if (redirect) {
    return <Navigate to="/dermocosmetica/medicinas" />;
  }

  return (
    <div className="App-patient">
      <div>
        <header className="patient-title text-focus-in">
          <h3 className="date focus-in-contract-bck me-4">
            Hoy es {formattedDate}{" "}
          </h3>
          <h3 className="subtitle focus-in-contract-bck">
            Disfruta tu consulta
          </h3>
        </header>
      </div>
      <Form onSubmit={handleSubmit} className="Form form jello-horizontal">
        <h3 className="mb-4"> Datos del Paciente</h3>
        <Form.Control type="text" className="mb-3" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <DatePicker selected={fechaNacimiento} onChange={(date) => setFechaNacimiento(date)} className="mb-3" />
        <Form.Control type="text" className="mb-3" placeholder="Rut" value={rut} onChange={(e) => setRut(e.target.value)}/>
        <Form.Control type="text" className="mb-3" placeholder="Patología" value={patologia} onChange={(e) => setPatologia(e.target.value)}/>
        <Form.Control type="text" className="mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Button type="submit" className="btn btn-patient">
          {" "}
          Enviar{" "}
        </Button>{" "}
      </Form>
      <Footer />
    </div>
  );
  
  
};

export default Patient;
