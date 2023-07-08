import axios from "axios";


const baseURL = process.env.NODE_ENV === 'production' ? `https://yelp-clone-pern-stack-api.onrender.com/api/v1/restaurants`
: `http://localhost:5000/api/v1/restaurants`



export default axios.create({
    baseURL: baseURL,
});