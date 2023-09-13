

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useNavigate } from "react-router-dom"


export const DogList = ({ dogs }) => {
    const navigate = useNavigate()
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
            <div className="add-dog-button">
                <button className="addNewDog-button" onClick={() => navigate(`/adddogform`)}>Add a New Dog</button>
            </div>
        </div>
    );
}
