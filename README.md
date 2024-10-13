# Dad Joke Favorites

This is a Next.js application that allows users to search for dad jokes, view them as images, and save their favorites. It uses Tailwind CSS for styling and MySQL for storing favorite jokes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (version 14.0 or later)
- You have a MySQL server running
- You have created a MySQL database for this project

## Installing Dad Joke Favorites

To install Dad Joke Favorites, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/dad-joke-favorites.git
   cd dad-joke-favorites
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following content:

   ```
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   ```

   Replace the values with your actual MySQL credentials.

4. Set up the database by running the following SQL command in your MySQL client:
   ```sql
   CREATE TABLE IF NOT EXISTS favorites (
     id INT AUTO_INCREMENT PRIMARY KEY,
     joke_id VARCHAR(255) NOT NULL,
     joke_text TEXT NOT NULL,
     image_url VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

## Using Dad Joke Favorites

To use Dad Joke Favorites, follow these steps:

1. Start the development server:

   ```
   npm run dev
   ```

2. Open your web browser and navigate to `http://localhost:3000`

3. Use the search bar to find dad jokes
4. Click the "Favorite" button to save jokes you like
5. Navigate to the "Favorites" page to view your saved jokes
