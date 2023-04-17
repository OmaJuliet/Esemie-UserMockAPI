To get this React typescript application on your local machine, you need to follow the necessary steps

## Prerequisites

- Node.js (v14.17.6 or later)
- npm (v6.14.15 or later)


### Installation

1. Clone the repository or download the source code from GitHub. To clone it, use this command "git clone repo-link"
2. Open a terminal or command prompt and navigate to the project directory.
3. Run `yarn install` to install the dependencies.


### Other dependencies
- Run `npm i react-router-dom` to install the router library
- Run `npm i framer-motion` to install the framer motion animation library


### Running and Testing the application

1. Run this command `npx json-server --watch data/db.json --port 8000` in your terminal to watch the db.json file and wrap the API endpoint running on port 8000
2. Run `yarn run dev` to start the development server.
3. Open a web browser and go to http://127.0.0.1:5173 to view the application.


### Application Details

The application displays a list of users on the homepage. Clicking on the "View full details" button on each user row will take you to a page that displays the selected user's full details. The data for the application is provided by a mocked API in the "data/db.json" file.


### Technologies Used
- React.js
- TypeScript
- Fetch (for fetching data and making HTTP requests)
- Tailwind CSS (for styling)
- Framer Motion (for loading animation)


## Folder Structure

- data/db.json: Contains the mocked API.
- src/components: Contains the React components for the application.
- src/App.tsx: Contains the routing configuration for the application.
- src/main.tsx: The entry point for the React application.
- src/useFetch.tsx: Contains the API implementation