import React, { useEffect, useState } from 'react'
import { albumesEjemplo } from '../assets/data/DataEjemplo' // Datos de ejemplo, previos a la carga desde el backend

const Albumes = () => {
    const [albumes, setAlbumes] = useState(albumesEjemplo) // estado donde se guardarán los álbumes desde el backend

    // Función asíncrona para obtener los álbumes desde el backend
    const cargarAlbumes = async () => {
        const response = await fetch('/albumes/lista', {
            method: "GET", // Método GET o POST
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json() // La respuesta se convierte a objeto JSON
        setAlbumes(data)
    }

    // UseEffect en formato useEffect(() => {}, []) es la función que se gatilla
    // cuando la página termina de cargar (renderizar)
    useEffect(() => {
        // se debe crear una función llamada cargaInicial del tipo asíncrona
        const cargaInicial = async () => {
            await cargarAlbumes()
        }

        cargaInicial()
    }, [])


    return (
        <>
            <div className="row">
                <div className="col-12"><h1>Álbumes</h1></div>

                <div className="col-12">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Lanzamiento</th>
                                <th>¿Top Seller?</th>
                                <th>Productora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Iteración entre albumes, renderizando filas de la tabla */}
                            {albumes.map((album, indice) => (
                                <tr key={indice}>
                                    <td>{album.titulo}</td>
                                    <td>{new Date(album.lanzamiento).toLocaleDateString()}</td>
                                    <td>
                                    {album.topSeller // condición
                                        ? <span className="text-success">Si</span> // verdadero
                                        : <span className="text-secondary">No</span> // falso
                                    }
                                    </td>
                                    <td>{album.productora}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Albumes