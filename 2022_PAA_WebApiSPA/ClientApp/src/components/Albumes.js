import React, { useEffect, useState } from 'react'
import { albumesEjemplo } from '../assets/data/DataEjemplo' // Datos de ejemplo, previos a la carga desde el backend

const Albumes = () => {
    const [albumes, setAlbumes] = useState(albumesEjemplo) // estado donde se guardarán los álbumes desde el backend

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
                            {albumes.map((album) => (
                                <tr>
                                    <td>{album.Titulo}</td>
                                    <td>{album.Lanzamiento}</td>
                                    <td>{album.TopSeller.toString()}</td>
                                    <td>{album.Productora}</td>
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