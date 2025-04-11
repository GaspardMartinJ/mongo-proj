# Setup Instructions

Follow these steps to set up the project:

## Prerequisites
- Install [Node.js](https://nodejs.org/) (version 14 or higher recommended).

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/GaspardMartinJ/mongo-proj
    cd mongo-proj
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and configure the required environment variables:
    ```
    MONGO_URI=your_mongodb_connection_string
    SUPABASE_URL=your_supabase_url
    SUPABASE_KEY=your_supabase_key
    ```

## Running the Application
1. Run the application:

    in dev:
    ```bash
    npm run dev
    ```
    in production:
    ```bash
    npm run build
    npm run start
    ```


2. Open your browser and navigate to `http://localhost:3000`.