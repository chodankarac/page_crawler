export default async function Home() {
  const results = await fetch("http://localhost:3000/api/scraper", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      siteUrl: "https://www.squareyards.com/legal-services-for-real-estate",
    }),
  });
  const data = await results.json();
  console.log(data);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
  );
}
