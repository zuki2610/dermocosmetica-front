import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././App.css';
import { Image } from 'react-bootstrap';



const Home = () => {
    return (
        <>
        <div className="container-grid">
            <header className="bienvenida">Bienvenida Mariana</header>
         <main><Image src="./../../public/assets/mariana.jpg" /></main>
         </div>
         </>
    );
}

export default Home;