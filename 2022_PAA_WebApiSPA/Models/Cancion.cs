using System.ComponentModel.DataAnnotations.Schema;

namespace _2022_PAA_WebApiSPA.Models
{
    [Table("Cancion")] // Indicar la tabla al que pertenecerá la clase POCO
    public class Cancion
    {
        public int Id { get; set; }
        public int AlbumId { get; set; }
        public string Titulo { get; set; }
        public int Duracion { get; set; }

        // Relaciones
        public virtual Album Album { get; set; }
    }
}



