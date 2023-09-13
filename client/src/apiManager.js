export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getDogs = async () => {
  const res = await fetch("/api/dogs");
  const data = await res.json();
  return data;
};


export const getDogDetails = async (id) => {
  try {
    const res = await fetch(`/api/dogs/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching dog details:", error);
    throw error;
  }
};

export const addNewDog = async (dogData) => {
  try {
    const res = await fetch("/api/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dogData),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error adding a new dog:", error);
    throw error;
  }
};
export const getCities = async () => {
  const res = await fetch("/api/cities");
  return res.json();
}
export const getWalkers = async () => {
  const res = await fetch("/api/walkers");
  return res.json();
}