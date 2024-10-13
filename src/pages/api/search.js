import axios from "axios";

export default async function handler(req, res) {
  const { term } = req.query;
  try {
    const response = await axios.get(
      `https://icanhazdadjoke.com/search?term=${term}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const jokes = response.data.results.map((joke) => ({
      id: joke.id,
      joke: joke.joke,
      imageUrl: `https://icanhazdadjoke.com/j/${joke.id}.png`,
    }));

    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ error: "Error fetching jokes" });
  }
}
