﻿using Microsoft.EntityFrameworkCore;

namespace _2022_PAA_WebApiSPA.Models
{
    public class EFContext : DbContext
    {
        // 1. Crear atributo que almacene la cadena de conexión a la BD
        private const string ConnectionString = "server=localhost;port=3306;database=musica_db;user=root;password=;Connect Timeout=5;";

        // ToDo: Para revisar con calma, la inclusión y/o modificaciones que se deban hacer
        // para configurar la instancia inicial de MySQL en conexión al proyecto
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(ConnectionString,
                new MySqlServerVersion(new Version(8, 0, 11)));
        }

        // 2. Definir qué clases son modelos desde la base de datos
        public DbSet<Album> Albumes { get; set; }
        public DbSet<Cancion> Canciones { get; set; }

        // 3. Configurar los modelos 
        // ToDo: Establecer las relaciones y restricciones de la tabla
        // * Definir clave primaria * Establecer las relaciones
        // * Definir cuáles son obligatorios
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Definir claves primarias
            modelBuilder.Entity<Cancion>().HasKey(i => i.Id);
            modelBuilder.Entity<Album>().HasKey(j => j.Id);

            // Definir relaciones uno a muchos: Canción a Álbum
            modelBuilder.Entity<Cancion>()
                .HasOne<Album>(s => s.Album)
                .WithMany(g => g.Canciones)
                .HasForeignKey(c => c.AlbumId);

            // Definimos los obligatorios (not null - mandatory) 
            modelBuilder.Entity<Cancion>().Property(s => s.AlbumId).IsRequired();
            modelBuilder.Entity<Cancion>().Property(s => s.Titulo).IsRequired();
            modelBuilder.Entity<Cancion>().Property(s => s.Duracion).IsRequired();

            modelBuilder.Entity<Album>().Property(s => s.Titulo).IsRequired();
            modelBuilder.Entity<Album>().Property(s => s.Lanzamiento)
                .HasDefaultValue(DateTime.Now) // Indicar un valor por defecto
                .IsRequired();
            modelBuilder.Entity<Album>().Property(s => s.Productora).IsRequired();
        }


    }
}


