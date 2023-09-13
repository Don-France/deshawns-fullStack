using DeshawnsFullstack.Models;

List<Dog> dogs = new List<Dog>
{
    new Dog()
    {
        Id = 1,
        Name = "Dally",
        Breed = "Bulldog",
        Age = 3,
        CityId = 1,

    },
    new Dog()
    {
        Id = 2,
        Name = "Molly",
        Breed = "English Shepard",
        Age = 8,
        CityId = 3,
        WalkerId=2
    },
    new Dog()
    {
        Id = 3,
        Name = "Daniel",
        Breed = "Whizzer",
        Age = 3,
        CityId = 2,
        WalkerId=3
    },
    new Dog()
    {
        Id = 4,
        Name = "Macy",
        Breed = "Beagle",
        Age = 4,
        CityId = 4,

    },

};
List<Walker> walkers = new List<Walker>
{
    new Walker()
    {
        Id = 1,
        Name = "Coleton",
    },
    new Walker()
    {
        Id = 2,
        Name = "Rusty",
    },
    new Walker()
    {
        Id = 3,
        Name = "Kennedy",
    },
    new Walker()
    {
        Id = 4,
        Name = "Kayla",
    },
};
List<City> cities = new List<City>
{
    new City()
    {
        Id = 1,
        Name = "Nashville",
    },
    new City()
    {
        Id = 2,
        Name = "Lawrenceburg",
    },
    new City()
    {
        Id = 3,
        Name = "Ethridge",
    },
    new City()
    {
        Id = 4,
        Name = "Summertown",
    }
};



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

app.MapGet("/api/dogs", () =>
{
    return dogs;
});

app.MapGet("/api/dogs/{id}", (int id) =>
{
    Dog dog = dogs.FirstOrDefault(d => d.Id == id);
    if (dog == null)
    {
        return Results.NotFound();
    }
    dog.Walker = walkers.FirstOrDefault(w => w.Id == dog.WalkerId);
    dog.City = cities.FirstOrDefault(c => c.Id == dog.CityId);
    return Results.Ok(dog);
});

app.MapPost("/api/dogs", (Dog dog) =>
{
    dog.Id = dogs.Count > 0 ? dogs.Max(d => d.Id) + 1 : 1;
    dogs.Add(dog);
    return dog;
}
);

app.MapGet("/api/walkers", () =>
{
    return walkers;
});

app.MapGet("/api/cities", () =>
{
    return cities;
});
app.Run();
