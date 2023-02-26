import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";
import { Image } from "react-bootstrap";
import Footer from "./Footer";

import { Navigate } from 'react-router-dom';

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("http://localhost:3001/api/dermocosmetica/usuarios/iniciar-sesion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (data.status === 200) {
        const response = await data.json();
        console.log(response);
        setLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loggedIn) {
    return <Navigate to="/dermocosmetica/patient" />;
  }

  return (
    <div className="home">
      <div className="App-home">
        <div className="container-grid">
          <header className="bienvenida blink-1">
            Bienvenida Mariana
          </header>
          <main>
            <Image
              className="doc-img rounded-circle slide-in-bottom"
              src="https://github.com/zuki2610/dermocosmetica-front/blob/main/public/assets/mariana.jpg?raw=true"
            />
          </main>
          <article className="form">
            <form onSubmit={login}>
              <div className="m-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="m-3">
                <label className="form-label">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-purple">
                Enviar
              </button>
              <div id="emailHelp" className="form-text text-dark">
                Ten una maravillosa consulta el día de hoy!
              </div>
            </form>
          </article>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
