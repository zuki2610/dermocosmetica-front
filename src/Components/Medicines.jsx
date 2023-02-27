import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '.././App.css';
import { Form, Button, } from 'react-bootstrap';
import Footer from './Footer';
import { BsFillTrashFill, BsCheck2Circle, BsFillSaveFill } from "react-icons/bs";
import { obtenerDatosDeLocalStorage } from "../storage";



const Medicines = () => {
    const [categorias, setCategorias] = useState([]);
    const [marcas, setMarcas] = useState([]);
    /**formulario de crear medicina */
    const [imagenMedicina, setImagenMedicna] = useState(null);
    const [nombreMedicina, setNombreMedicina] = useState('');
    const [marcaMedicina, setMarcaMedicina] = useState('');
    const [componenteMedicina, setComponenteMedicina] = useState('');
    const [categoriaMedicina, setCategoriaMedicina] = useState('');
    /*/formulario de crear categoria */
    const [nombreCategoria, setNombreCategoria] = useState('');
    /**Formulario de crear marca */
    const [nombreMarca, setNombreMarca] = useState('');

    const { token } = obtenerDatosDeLocalStorage('token');

    function manejarCargaImagen(evento) {
        const archivo = evento.target.files[0];
        setImagenMedicna(archivo);
    }

    const registrarMedicina = async (evento) => {
        evento.preventDefault();
        const formData = new FormData();
        formData.append('file', imagenMedicina);
        formData.append('name', nombreMedicina);
        // formData.append('marca', marcaMedicina);
        console.log(marcaMedicina);
        formData.append('componente', componenteMedicina);
        formData.append('categoriaNames', categoriaMedicina);
        console.log(formData);
        const response = await fetch('http://localhost:3001/api/dermocosmetica/medicinas/', {
            method: 'POST',
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            },
            body: formData,
        });
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: '¡Perfecto!',
                text: 'Medicina registrada con éxito',
            });
        }
    }


    const  registrarCategoria = async (evento) => {
        evento.preventDefault();
        //crear funcion  post para registrar nuevas categorias, solo con nombreCategoria y que le pege a este endpoint localhost:3001/api/dermocosmetica/categorias/
        const response = await fetch('http://localhost:3001/api/dermocosmetica/categorias/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Bearer ${token}` : "",
            },
            body: JSON.stringify({
                name: nombreCategoria,
            }),
        });
        
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: '¡Perfecto!',
                text: 'Categoría registrada con éxito',
            });

            await obtenerCategorias();
        }
    }

    const registrarMarca = async (evento) => {
        evento.preventDefault();
        const response = await fetch('http://localhost:3001/api/dermocosmetica/marcas/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Bearer ${token}` : "",
            },
            body: JSON.stringify({
                name: nombreMarca,
            }),
        });
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: '¡Perfecto!',
                text: 'Marca registrada con éxito',
            });
            await obtenerMarcas();
        }
    }


    //crear funcion para obtener datos de catogorias que le pege a este endpoint localhost:3001/api/dermocosmetica/categorias/

    const obtenerCategorias = async () => {
        const response = await fetch('http://localhost:3001/api/dermocosmetica/categorias/', {
            headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Bearer ${token}` : "",
            },
        });
        const data = await response.json();
        setCategorias(data.data);
        console.log(categorias);
    }

    const obtenerMarcas = async () => {
        const response = await fetch('http://localhost:3001/api/dermocosmetica/marcas/', {
            headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Bearer ${token}` : "",
            },
        });
        const data = await response.json();
        setMarcas(data.data);
        console.log(marcas);
    }


    useEffect(() => {
        obtenerCategorias();
        obtenerMarcas();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

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
                            {
                                categorias.map((categoria) => {
                                    return (
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{categoria.name}</label>
                                        </div>
                                    )
                                })
                            }
                            <Button type="submit" className="btn btn-medicines"> Enviar </Button>{' '}
                        </div>
                        <div className="form form-medicina mb-5">
                            <h2 className="form-label">Marca</h2>
                            {
                                marcas.map((marca) => {
                                    return (
                                        <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{marca.name}</label>
                                    </div>
                                    )
                                })
                            }
                            <Button type="submit" className="btn btn-medicines"> Enviar </Button>{' '}
                        </div>
                        <div>
                            <div className="form form-medicina">
                                <h2 className="form-label fs-4">Nueva Categoría</h2>
                                <div>
                                    <Form onSubmit={registrarCategoria}>
                                        <Form.Control 
                                            type="text"
                                            id="nombre-categoria"
                                            placeholder="Nombre de la categoria"
                                            value={nombreCategoria}
                                            onChange={(e) => setNombreCategoria(e.target.value)}
                                        />
                                        <Button type="submit" className="btn btn-medicines"> Agregar </Button>{' '}
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="form form-medicina">
                                <h2 className="form-label fs-4">Nueva Marga</h2>
                                <div>
                                    <Form onSubmit={registrarMarca}>
                                        <Form.Control 
                                            type="text"
                                            id="nombre-categoria"
                                            placeholder="Nombre de la categoria"
                                            value={nombreMarca}
                                            onChange={(e) => setNombreMarca(e.target.value)}
                                        />
                                        <Button type="submit" className="btn btn-medicines"> Agregar </Button>{' '}
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </main>
                    <article className="article">
                        <div className="container">
                            <div className="card form flex-row flex-wrap">
                                <div className="card-header border-0">
                                    <img className="card-img" src="https://falabella.scene7.com/is/image/Falabella/50077328_1?wid=800&hei=800&qlt=70" alt="" />
                                </div>
                                <div className="card-block px-2">
                                    <h5 className="card-title">Nombre:<span className="text-secondary">tomate</span></h5>
                                    <h6 className="card-text">Categoría:<span className="text-secondary">tomatican</span></h6>
                                    <h6 className="card-text">Marca:<span className="text-secondary">tomaton</span></h6>
                                    <h6 className="card-text">Componentes:<span className="text-secondary">tomate</span></h6>
                                    <h4 type="submit" className="btn btn-medicines2"> <BsCheck2Circle /> </h4>{' '}
                                    <h4 type="submit" className="btn btn-medicines2"> <BsFillTrashFill /> </h4>{' '}
                                </div>
                            </div>
                        </div>
                        <div className="form form-PDF">
                            <h6 className="text-secondary">Generar PDF</h6>
                            <div>
                                <h4 type="submit" className="btn btn-PDF"><BsFillSaveFill /></h4>{' '}
                            </div>
                        </div>
                        <div className="container mt-5 ms-5">
                            <div className="card form flex-row flex-wrap newMedicine ms-5">
                                <div className="card-header border-0">
                                    <Form onSubmit={registrarMedicina}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Añadir nueva medicina</Form.Label>
                                            <Form.Control type="text" className="mb-2" placeholder="Nombre" onChange={e => setNombreMedicina(e.target.value)} value={nombreMedicina}/>
                                            <Form.Control type="text" className="mb-2" placeholder="Categoria" onChange={e => setCategoriaMedicina(e.target.value)} value={categoriaMedicina}/>
                                            <Form.Control type="text" className="mb-2" placeholder="Marca" onChange={e => setMarcaMedicina(e.target.value)} value={marcaMedicina}/>
                                            <Form.Control type="text" className="mb-2" placeholder="Componente" onChange={e => setComponenteMedicina(e.target.value)} value={componenteMedicina}/>
                                            <Form.Control type="file" accept="image/*" onChange={manejarCargaImagen} className="mb-2" placeholder="Imagen" />
                                            <Button type="submit" className="btn btn-medicines3 text-dark">  <BsFillSaveFill/>{' '} </Button>{' '}
                                           
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </article>
                    <Footer />
                </div>
            </div>
        </div>
    );
   
    
}
    export default Medicines;