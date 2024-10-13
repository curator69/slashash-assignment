import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jokes, setJokes] = useState([]);

  const searchJokes = async (e) => {
    e.preventDefault();
    const response = await axios.get(`/api/search?term=${searchTerm}`);
    setJokes(response.data);
  };

  const favoriteJoke = async (joke) => {
    await axios.post("/api/favorite", joke);
    alert("Joke added to favorites!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Dad Joke Search</h1>
      <Link
        href="/favorites"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        View Favorites
      </Link>
      <form onSubmit={searchJokes} className="mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 mr-2 text-black"
          placeholder="Search for jokes"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jokes.map((joke) => (
          <div key={joke.id} className="border p-4 rounded">
            <img src={joke.imageUrl} alt={joke.joke} className="w-full mb-4" />
            <p className="mb-2">{joke.joke}</p>
            <button
              onClick={() => favoriteJoke(joke)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
