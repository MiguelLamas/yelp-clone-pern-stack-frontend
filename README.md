# YELP CLONE - Frontend (PERN Stack - Postgres, Express, React, and Node)

A basic Yelp Clone App built with the PERN stack technologies. The application allows users to add restaurants, their location and price range initially. The user can then add reviews and ratings to each restaurant, as well as update and delete individual restaurants. The app takes into account the ratings provided by users and returns an average ratings score for each one aswell as a total of the number of reviews submitted.

**This README is for the Frontend of the Yelp Clone PERN App. If you would like to explore the Backend of the app please go to the [Backend repository](https://github.com/MiguelLamas/yelp-clone-pern-stack-api).**

<br />

---

<br />

## **_Features:_** 
- Add different restaurants
- Add multiple reviews and ratings for restaurants
- Get an average star rating, plus number of reviews available per restaurant
- Update restaurant information
- Delete listed restaurants that you no longer want/need

  <br />

---

<br />

## *_Project Setup & Running:_*

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

<br />

---

<br />


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

* Deployed using ElephantSQL & Render (PostgreSQL Database, Backend Webservice & Frontend Static Site)





## Developer:

* Miguel Lamas - [GitHub](https://github.com/MiguelLamas)

## License:

Copyright (c) 2023 Miguel Lamas - https://github.com/MiguelLamas

