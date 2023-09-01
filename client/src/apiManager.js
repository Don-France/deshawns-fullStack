export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getDogList = async () => {
  const res = await fetch("/api/dogs");
  const data = await res.json();
  return data;
}