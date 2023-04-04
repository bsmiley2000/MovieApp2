﻿using Microsoft.EntityFrameworkCore;

namespace MovieApp2.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<Movie> Movies { get; set;}

    }
}
