# Flower Website Backend

## Table of Contents
- Overview
- Features
- Presentation Link
- Live Demo
- Technologies Used
- API Endpoints
- Installation and Setup
- Environment Variables
- Author
- License

## Overview
The Flower Website Backend is a complete API server to manage an online flower shop's products and users. It includes:

- Full CRUD operations on flower entries
- Image upload support
- Category tagging
- Secure user registration and login
- Validation and error handling

## Features
-  RESTful API with Express
-  MongoDB integration using Mongoose
-  Flower CRUD (Create, Read, Update, Delete)
-  Image upload via `multer`
-  User authentication with hashed passwords
-  Strong password & email validation
-  Error handling middleware
-  Environment configuration using `dotenv`

## Presentation Link
[Presentation Link]()

## Live Demo
[Live Demo]()

## Technologies Used
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (image uploads)
- Bcrypt (password hashing)
- Validator (email & password validation)
- Dotenv (environment variables)

## API Endpoints
  The API will be running on `http://localhost:5000`

###  Auth
- POST /api/users/signup — Register a new user  
- POST /api/users/login — Log in existing user
- GET /api/users/getusers — Shows all the registered users


###  Flowers
- GET /api/flowers — Get all flowers  
- GET /api/flowers/:id — Get a flower by ID  
- POST /api/flowers — Create a new flower (image upload supported)  
- PATCH /api/flowers/:id — Update a flower  
- DELETE /api/flowers/:id — Delete a flower  

## Installation and Setup

1. **Clone the repository:**

2. **Install dependencies:**

3. **Set up the environment variables:**
   PORT=5000
   MONGO_URI=mongodb+srv://user:user123@cluster0.gfprrfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


4. **Start the server:**

## Environment Variables
Ensure you configure the `.env` file with the correct MongoDB connection string and port.

## Author 
  Name: Sadiq Ridwan Abubakar
  Contact: [sadiqridwan347@gmail.com]
  GitHub: [ES-AR](https://github.com/ES-AR)

## License
This project is licensed under the MIT License.

