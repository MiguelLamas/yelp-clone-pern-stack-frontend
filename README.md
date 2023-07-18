# YELP CLONE - Frontend (PERN Stack - Postgres, Express, React, and Node)

A basic Yelp Clone App built with the PERN stack technologies. The application allows users to add restaurants, their location and price range initially. The user can then add reviews and ratings to each restaurant, as well as update and delete individual restaurants. The app takes into account the ratings provided by users and returns an average ratings score for each one aswell as a total of the number of reviews submitted.

**This README is for the Frontend of the Yelp Clone PERN App. If you would like to explore the Backend of the app please go to the [Backend repository](https://github.com/MiguelLamas/yelp-clone-pern-stack-api).**

<br />

---

<br />

## **_Features:_** 
- Add multiple restaurants
- Add multiple reviews and ratings for restaurants
- Update restaurant information
- Delete listed restaurants that you no longer want/need

  <br />

---

<br />

## **_Getting Started_**

### **Backend**

The backend is deployed on ElephantSQL however if you would like to run locally you will need to follow the steps below.

1. Git clone the backend repository by pasting the following into your terminal:

```bash
  git clone https://github.com/MiguelLamas/yelp-clone-pern-stack-api
```

2. Install all required dependencies by running:

```bash
  npm i
```

3. Copy your database (e.g. ElephantSQL) URL into the .env file, following the format:

```bash
 DATABASE_URL = <Database URL goes here>
```

4. Create all tables in your database by running the following scripts in the terminal:

```bash
npm run createRestaurantsTable
npm run createReviewsTable
```

5. To populate the tables you can achieve this by interacting with the front-end, you can either run this locally or host on a hosting platform - for this project I used Render but you are free to choose your own. For assistance deploying on Render please [click here](https://render.com/docs).

6. Finally, to run the server locally use the following script within your terminal:

```bash
  npm run start
```


## Frontend Built with:

* React.js
* JavaScript
* HTML
* CSS
* Bootstrap 5

## Backend Built with:

* Node.js
* Express
* PostgreSQL
* CORS - Cross-Origin Resource Sharing


## Deployed with:

* Deployed using Render (PostgreSQL Database, Backend Webservice & Frontend Static Site)

## Project Setup & Running:

* Prerequisites
  * Install Node.js
  * Install [postgres](https://www.youtube.com/watch?v=fZQI7nBu32M&t=0s)

* Clone Repo `https://github.com/MiguelLamas/to-do-app-pern-stack-frontend.git`

* Before starting the project, follow these steps to create project and get your server up and running:

  * `mkdir server` - starting our server
  * `cd server`
  * `npm init` - is going to keep track of all our packages inside the application
  * `npm install express pg cors` - express allows us to quickly create a server in Node.js, cors allows different domain applications to interact with each other (server will be running on localhost:5000 & React App on localhost:3000, postgres is there to connect our server with our database in order to run postgres queries)
  * `touch index.js` - require the libraries in this file, app.listen to start server, app.use to create middlewear (express, cors)
  * `npm install -g nodemon`
  * `nodemon index` - will watch index.js file, every time there's a change it will instantly restart it
  * `npx create-react-app client` - setting up client side with React
  * `npm start` - to get client side started

* To make your dev experience easier, download these VS code extensions:
  * ES7 React/Redux/GraphQL/React-Native snippets
  * ESLint

## Developer:

* Miguel Lamas - [GitHub](https://github.com/MiguelLamas)

## License:

Copyright (c) 2023 Miguel Lamas - https://github.com/MiguelLamas

