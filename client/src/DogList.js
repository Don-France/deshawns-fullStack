import React from "react";

export const DogList = ({ dogs }) => {
    return (
        <div className="dog-list-container"> {/* Add class name to the div */}
            <h2 className="dog-list-heading">List of Dogs:</h2> {/* Add class name to the heading */}
            <div className="dog-list">
                {dogs.map((dog) => (
                    <li key={dog.id} className="dog-item"> {/* Add class name to list items */}
                        {dog.name}
                    </li>
                ))}
            </div>
        </div>
    );
}


