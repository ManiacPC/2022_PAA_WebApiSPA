export const albumesEjemplo = [
    {
        Id          : 1,
        Titulo      : "Álbum ejemplo",
        Lanzamiento : "2022-01-09",
        TopSeller   : false,
        Productora  : "Blast! Musik!"
    }
]

export const cancionesEjemplo = [
    {
        Id: 101,
        AlbumId: 1,
        Titulo: "Canción de ejemplo",
        Duracion: 4,
        Album: {
            Id: 1,
            Titulo: "Álbum ejemplo",
            Lanzamiento: "2022-01-09",
            TopSeller: false,
            Productora: "Blast! Musik!"
        }
    }
]