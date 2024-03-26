




### Steps

1. **Install Docker**: If you haven't already, install Docker following the instructions [here](https://docs.docker.com/engine/install/).
2. **Clone Repository**: Clone this repository to your local machine using `git clone [repository-url]`.

3. **Install Dependencies**:

   - Navigate to the `client` directory in the terminal and run `npm install` to install all client-side dependencies.
   - Similarly, go to the `server` directory and run `npm install` for server-side dependencies.

4. **Set Up Environment Variables**:

   - In the `server` directory, create a `.env` file.
   - Add the following environment variables:
     ```
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     ```
     Replace `your_google_client_id` and `your_google_client_secret` with your actual Google client ID and secret.

5. **Start the Application**:

   - From the root directory of the project, run `docker compose up` in the terminal. This will set up the necessary Docker containers.
   - Optionally, you can run the client and server separately by navigating to their respective directories and executing `npm start` in each.

6. **Accessing**:
   - Once everything is up and running, your local instance should be accessible. The client will typically run on `http://localhost:3000`, and the server will run on `http://localhost:5000`.

