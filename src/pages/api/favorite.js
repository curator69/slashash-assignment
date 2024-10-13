import pool from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id, joke, imageUrl } = req.body;
    try {
      const connection = await pool.getConnection();
      await connection.execute(
        "INSERT INTO favorites (joke_id, joke_text, image_url) VALUES (?, ?, ?)",
        [id, joke, imageUrl]
      );
      connection.release();
      res.status(200).json({ message: "Joke added to favorites" });
    } catch (error) {
      res.status(500).json({ error: "Error adding joke to favorites" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
