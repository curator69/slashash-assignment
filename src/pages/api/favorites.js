import pool from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.execute("SELECT * FROM favorites");
      connection.release();
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: "Error fetching favorites" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
