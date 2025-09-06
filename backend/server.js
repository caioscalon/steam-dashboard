import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/steam", (req, res) => {
	const apiKey = process.env.STEAM_API_KEY;
	const steamId = "76561197960435530";

	const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamId}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			res.json(data);
		})
		.catch((error) => {
			console.error("Error fetching Steam data:", error);
			res.status(500).json({ error: "Failed to fetch Steam data" });
		});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
