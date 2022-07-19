export const albumesEjemplo = [
    {
        id          : 1,
        iitulo      : "Álbum ejemplo",
        lanzamiento : "2022-01-09",
        topSeller   : false,
        productora  : "Blast! Musik!"
    }
]

export const cancionesEjemplo = [
    {
        id       : 101,
        albumId  : 1,
        titulo   : "Canción de ejemplo",
        duracion : 4,
        album    : {
            id          : 1,
            titulo      : "Álbum ejemplo",
            lanzamiento : "2022-01-09",
            topSeller   : false,
            productora  : "Blast! Musik!"
        }
    }
]