namespace DeshawnsFullstack.Models;
public class Dog
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Breed { get; set; }
    public int Age { get; set; }
    public int CityId { get; set; }
    public int? WalkerId { get; set; }
    public Walker Walker { get; set; }
    public City City { get; set; }
}