export default async function handler(req, res) {
  const response = await fetch("https://v3.football.api-sports.io/fixtures?date=2026-01-16", {
    headers: {
      "x-apisports-key": "a5c2a4b76757e2163325b67332787f3d"
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
