namespace MovieWatchlist.API.Models;

public class Movie
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Genre { get; set; } = string.Empty;
    public bool Watched { get; set; }
    public int Rating { get; set; }
} 