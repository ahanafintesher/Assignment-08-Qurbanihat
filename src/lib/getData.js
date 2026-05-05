export async function getData() {
  const res = await fetch(`https://qurbanihat-teal.vercel.app/data.json`,{ cache:"no-store" })
    .then((res) => res.json())
    .catch((err) => {
      console.error("Failed to fetch data:", err);
      return null;
    });
  return res;
}