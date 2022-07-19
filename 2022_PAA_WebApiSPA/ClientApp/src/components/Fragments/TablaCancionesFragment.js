import React, { useState, useEffect } from 'react'

const TablaCancionesFragment = ({ canciones }) => {

    return (
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Título canción</th>
                        <th>Duración</th>
                        <th>Álbum</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Iteración entre albumes, renderizando filas de la tabla */}
                    {canciones.map((cancion, indice) => (
                        <tr key={indice}>
                            <td>{cancion.Titulo}</td>
                            <td>{cancion.Duracion} minuto(s)</td>
                            <td>{cancion.Album.Titulo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TablaCancionesFragment