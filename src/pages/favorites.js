import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await axios.get("/api/favorites");
      setFavorites(response.data);
    };
    fetchFavorites();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Favorite Dad Jokes</h1>
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        Back to Search
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((joke) => (
          <div key={joke.id} className="border p-4 rounded">
            <img
              src={joke.image_url}
              alt={joke.joke}
              className="w-full mb-4 !bg-white"
            />
            <p>{joke.joke_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
