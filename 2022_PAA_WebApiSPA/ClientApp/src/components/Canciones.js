import React, { useState, useEffect } from 'react'
import { cancionesEjemplo } from '../assets/data/DataEjemplo'// Datos de ejemplo, previos a la carga desde el backend

import TablaCancionesFragment from './Fragments/TablaCancionesFragment'

const Canciones = () => {
    const [canciones, setCanciones] = useState(cancionesEjemplo)

    return (
        <>
            <div className="row">
                <div className="col-12"><h1>Canciones</h1></div>

                <div className="col-12">
                    <TablaCancionesFragment canciones={canciones} />
                </div>

            </div>
        </>
    )
}

export default Canciones