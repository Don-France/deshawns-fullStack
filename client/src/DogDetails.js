


import React, { useEffect, useState } from "react";
import { getDogDetails } from "./apiManager.js";
import { useParams } from "react-router-dom";

export const DogDetails = () => {
    const { id } = useParams();
    const [dogDetails, setDogDetails] = useState(null); // Initialize dogDetails as null

    useEffect(() => {
        // Fetch dog details when the component mounts
        if (id) {
            getDogDetails(id) // Assuming getDogDetails accepts an ID as an argument
                .then((data) => {
                    setDogDetails(data); // Update the state with dog details
                })
                .catch((error) => {
                    console.error("Error fetching dog details:", error);
                });
        }
    }, [id]); // Trigger the effect when the "dog" prop changes

    if (!dogDetails) {
        return null; // Return null or loading indicator while fetching data
    }


    return (
        <div className="dog-details-container">
            <h2 className="dog-details-heading">Dog Details:</h2>
            <div className="dog-details">
                <div>
                    <strong className="dog-name-label">Name:</strong> {dogDetails.name}
                </div>
                <div>
                    <strong className="dog-breed-label">Breed:</strong> {dogDetails.breed}
                </div>
                <div>
                    <strong className="dog-age-label">Age:</strong> {dogDetails.age}
                </div>
                {dogDetails.walker && dogDetails.walker.name && (
                    <div>
                        <strong className="dog-walker-label">Walker:</strong> {dogDetails.walker.name}
                    </div>
                )}
                {!dogDetails.walker || !dogDetails.walker.name && (
                    <div>
                        <strong className="dog-walker-label">Walker:</strong> Not Assigned
                    </div>
                )}
                {dogDetails.city && dogDetails.city.name && (
                    <div>
                        <strong className="dog-city-label">City:</strong> {dogDetails.city.name}
                    </div>
                )}
                {!dogDetails.city || !dogDetails.city.name && (
                    <div>
                        <strong className="dog-city-label">City:</strong> Not Assigned
                    </div>
                )}
            </div>
        </div>
    );
};
