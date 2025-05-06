using Microsoft.EntityFrameworkCore;
using MovieWatchlist.API.Models;

namespace MovieWatchlist.API.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Movie> Movies { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Movie>()
            .Property(m => m.Title)
            .IsRequired()
            .HasMaxLength(200);

        modelBuilder.Entity<Movie>()
            .Property(m => m.Genre)
            .IsRequired()
            .HasMaxLength(100);

        modelBuilder.Entity<Movie>()
            .Property(m => m.Rating)
            .HasDefaultValue(0);
    }
} 