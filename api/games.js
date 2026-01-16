export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch("https://v3.football.api-sports.io/fixtures?date=2026-01-16", {
      headers: {
        "x-apisports-key": "a5c2a4b76757e2163325b67332787f3d
"
      }
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch matches", details: error.message });
  }
}
