

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { DogDetails } from "./DogDetails.js";

export const DogList = ({ dogs }) => {
    return (
        <div className="dog-list-container">
            <h2 className="dog-list-heading">List of Dogs:</h2>
            <div className="dog-list">
                {dogs.map((dog) => (
                    <li key={dog.id} className="dog-item">
                        <Link to={`/dogdetails/${dog.id}`}> {/* Set the link to the DogDetails page */}
                            {dog.name}
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    );
}
