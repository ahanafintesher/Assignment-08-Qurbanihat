export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`)
    .then((res) => res.json())
    .catch((err) => {
      console.error("Failed to fetch data:", err);
      return null;
    });
  return res;
}