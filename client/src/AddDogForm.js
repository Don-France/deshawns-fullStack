import { useState, useEffect } from 'react';
import { addNewDog } from './apiManager.js';
import { getCities } from './apiManager.js';
import { getWalkers } from './apiManager.js';





export const AddDogForm = () => {

    const [dog, setDog] = useState({
        Name: '',
        Breed: '',
        Age: 0,
        CityId: 1, // Default city ID
        WalkerId: null, // Default walker ID
    });

    const [cities, setCities] = useState([]);
    const [walkers, setWalkers] = useState([]);

    // Fetch the list of cities and walkers when the component mounts
    useEffect(() => {
        getCities()

            .then((data) => setCities(data))
            .catch((error) => console.error('Error fetching cities:', error));

        getWalkers()

            .then((data) => setWalkers(data))
            .catch((error) => console.error('Error fetching walkers:', error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newDog = await addNewDog(dog)
            window.location.href = `/dogdetails/${newDog.id}`;



            // Handle success (e.g., reset the form)
            setDog({
                Name: '',
                Breed: '',
                Age: 0,
                CityId: 1,
                WalkerId: null,
            });
            console.log('Dog added successfully', newDog);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDog({
            ...dog,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>Add a New Dog</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Name">Name:</label>
                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        value={dog.Name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="Breed">Breed:</label>
                    <input
                        type="text"
                        id="Breed"
                        name="Breed"
                        value={dog.Breed}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="Age">Age:</label>
                    <input
                        type="number"
                        id="Age"
                        name="Age"
                        value={dog.Age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="CityId">City:</label>
                    <select
                        id="CityId"
                        name="CityId"
                        value={dog.CityId || ""}
                        onChange={handleChange}
                        style={{ width: '200px' }}
                    >
                        {cities.map((city) => (
                            <option key={city.id} value={city.id}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="WalkerId">Walker:</label>
                    <select
                        id="WalkerId"
                        name="WalkerId"
                        value={dog.WalkerId || ""}
                        onChange={handleChange}
                        style={{ width: '200px' }}
                    >

                        {walkers.map((walker) => (
                            <option key={walker.id} value={walker.id}>
                                {walker.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add Dog</button>
            </form>
        </div>
    );
}; 