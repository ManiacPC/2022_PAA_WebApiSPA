using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using _2022_PAA_WebApiSPA.Models;

namespace _2022_PAA_WebApiSPA.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlbumesController : ControllerBase
    {
        [HttpGet("lista")]
        public IEnumerable<Album> Listar()
        {
            // Un Ienumerable es un tipo genérico de colección, acepta distintos tipos
            IEnumerable<Album> albumes;

            // Using se utiliza para el contexto de la base de datos y al terminar se elimina de la memoria
            using (EFContext bd = new EFContext())
            {
                // Equivalente a SELECT * FROM Album;
                albumes = bd.Albumes.ToList();
            }

            return albumes; // El retorno es en formato JSON
        }

        [HttpPost("nuevo")]
        public string Nuevo([FromBody] Album album)
        {
            using (EFContext bd = new EFContext())
            {
                bd.Albumes.Add(album); // Agregar álbum

                try
                {
                    bd.SaveChanges();
                }
                catch (Exception)
                {
                    return "BAD";
                }
            }

            return "OK";
        }


    }
}
