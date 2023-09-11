export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getDogList = async () => {
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
