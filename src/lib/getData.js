export async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/data.json`,{ cache:"no-store" })
    .then((res) => res.json())
    .catch((err) => {
      console.error("Failed to fetch data:", err);
      return null;
    });
  return res;
}