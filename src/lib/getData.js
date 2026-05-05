export async function getData() {
  const res = await fetch(`http://localhost:3000/data.json`,{ next: { revalidate: 0 } })
    .then((res) => res.json())
    .catch((err) => {
      console.error("Failed to fetch data:", err);
      return null;
    });
  return res;
}