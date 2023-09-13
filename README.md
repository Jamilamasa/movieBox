# Vite Movie App

This project is a movie application built using Vite, consuming The Movie Database (TMDb) API.

## Getting Started

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

- Node.js (npm) installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Jamilamasa/movieBox

   ```

2. Navigate to the project directory:

   ```bash
   cd movieBox

   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Configuration

4. Create a .env file in the root folder of the project and add the following environment variables:

   ```plaintext
   VITE_BASE_URL=https://api.themoviedb.org
   VITE_IMGBASE_URL=https://image.tmdb.org/t/p/original
   VITE_API_KEY=[Your_tmdb_API_key]
   ```

Replace [Your_tmdb_API_key] with your actual TMDb API key from https://www.themoviedb.org/settings/api

### Running the Project

To run the project locally, use the following command:

    ```bash
    npm run dev
    ```
