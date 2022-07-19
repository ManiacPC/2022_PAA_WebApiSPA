import React, { useEffect, useState } from 'react'

const AgregarAlbum = () => {
    const fechaActual = new Date()

    // Estados para campos de formulario
    const [titulo, setTitulo] = useState("")
    const [fechaLanzamiento, setFechaLanzamiento] = useState(fechaActual.toLocaleDateString('en-CA')) // La fecha debe estar formateada en YYYY-MM-DD
    const [topSeller, setTopSeller] = useState(false)
    const [productora, setProductora] = useState("")

    // Estados para uso en lógica
    const [alertaValidacion, setAlertaValidacion] = useState(false)

    // Método para enviar solicitud POST al backend con los datos
    const registrarAlbum = async (datos) => {
        await fetch('/albumes/nuevo', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos) // conversión a datos
        })
            .then(response => {
                // response.json() // aquí se obtiene la respuesta
                alert("Álbum ingresado correctamente")
            })
            .catch(error => {
                console.log("error")
                alert("Ocurrió un error, por favor revise los datos")
            })
    }

    /*
     * Función para manejar evento click al agregar álbum
    */ 
    const handleAgregarAlbum = async(evento) => {
        setAlertaValidacion(false)

        if (titulo === "" || productora === "") {
            setAlertaValidacion(true)
        } else {
            // crear objeto json para enviar datos
            const datos = {
                titulo      : titulo, // puede acotarse como titulo,
                lanzamiento : fechaLanzamiento,
                productora  : productora,
                topSeller   : topSeller
            }

            await registrarAlbum(datos) // se espera la respuesta
        }
    }

    // Salida JSX
    return (
        <>
            <div className="row">
                <div className="col-12 mb-3"><h1>Agregar álbum</h1></div>

                {/* Control: Título álbum */}
                <div className="col-4">
                    <div className="mb-3">
                        <label htmlFor="titulo" className="form-label">Título de álbum</label>
                        <input type="text"
                            className="form-control"
                            id="titulo"
                            placeholder="P.ej: Los sonoros milenarios"
                            value={titulo}
                            onChange={(evento) => setTitulo(evento.target.value)}
                        />
                    </div>
                </div>

                {/* Control: Fecha lanzamiento */}
                <div className="col-4">
                    <div className="mb-3">
                        <label htmlFor="lanzamiento" className="form-label">Fecha lanzamiento</label>
                        <input type="date"
                            className="form-control"
                            id="lanzamiento"
                            placeholder="P.ej: 21-10-1998"
                            value={fechaLanzamiento}
                            onChange={(evento) => setFechaLanzamiento(evento.target.value)}
                        />
                    </div>
                </div>

                {/* Control: Nombre de productora */}
                <div className="col-4">
                    <div className="mb-3">
                        <label htmlFor="nombre_productora" className="form-label">Nombre productora</label>
                        <input type="text"
                            className="form-control"
                            id="nombre_productora"
                            placeholder="P.ej: Blast! Musik!"
                            value={productora}
                            onChange={(evento) => setProductora(evento.target.value)}
                        />
                    </div>
                </div>

                {/* Control: ¿Es top seller? */}
                <div className="col-12">
                    <div className="form-check">
                        <input type="checkbox"
                            className="form-check-input"
                            value={topSeller}
                            onChange={() => setTopSeller(!topSeller)}
                            id="top_seller"
                        />
                        <label className="form-check-label" htmlFor="top_seller">
                            Es top seller
                        </label>
                    </div>
                </div>

                {/* Control: Botón */}
                <div className="col-12 justify-content-start mt-4">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={handleAgregarAlbum}
                    >
                        Guardar nuevo álbum
                    </button>
                </div>

                {/* Línea horizontal separadora */}
                <hr className="my-4" />

                {/* Alerta mostrada sólo si alertaValidacion === true */}
                {alertaValidacion && 
                    <div className="alert alert-warning d-flex align-items-center" role="alert">
                        <div>
                            ⚠ Algunos campos no pasaron la validación. Por favor revise que estén correctamente ingresados.
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default AgregarAlbum