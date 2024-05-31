# MovieHub : A Movie Web App

This is a full-stack web application for an immersive movie search experience using the OMDB API. Users can register, login, and search for different variety of movies by title.

## Technologies Used

- **Frontend**: React.js, Javascript, Axios
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API**: OMDB API

## Features

- User registration and authentication
- Search for movies by title
- Display movie details such as title, year, and poster

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/movie-search-app.git


2. **Navigate to the project directory:**

   ```bash
   cd movie-search-app

3. **Install dependencies for frontend and backend:**

   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend  
   cd ../backend
   npm install


4. **Set up environment variables:**

- Create a `.env` file in the `backend` directory and add the following:

   ```bash
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   OMDB_API_KEY=your_omdb_api_key


5. **Start the Backend and FrontEnd Server**



## Folder Structure

**frontend/**: Contains the React.js frontend code.

**backend/**: Contains the Node.js backend code and database stored in MongoDB.



## API Endpoints

**POST /user/register**: Register a new user.

**POST /user/login**: Login and get a JWT token.

**POST /movie/search**: Search for movies by title (requires authentication).

