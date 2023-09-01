// import { getGreeting, getDogList } from "./apiManager";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [greeting, setGreeting] = useState({
//     message: "Not Connected to the API",
//   });
//   const [dogs, setDogs] = useState([]);

//   useEffect(() => {
//     getGreeting()
//       .then(setGreeting)
//       .catch(() => {
//         console.log("API not connected");
//       });
//   }, []);

//   return <p>{greeting.message}</p>;
// }

import React, { useEffect, useState } from "react";
import { getGreeting, getDogList } from "./apiManager";
import { DogList } from "./DogList.js";

export default function Home() {
  const [greeting, setGreeting] = useState({
    message: "Not Connected to the API",
  });
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch the greeting message
        const greetingResponse = await getGreeting();
        setGreeting(greetingResponse);

        // Fetch the list of dogs from your API
        const dogListResponse = await getDogList();
        setDogs(dogListResponse);
      } catch (error) {
        console.log("API not connected", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <p>{greeting.message}</p>
      <DogList dogs={dogs} /> {/* Pass the dogs data as a prop */}
    </div>
  );
}
