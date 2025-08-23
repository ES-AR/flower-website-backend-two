# Flower Website Backend (Backend + Admin Panel)

## Table of Contents
- Overview
- Features
- Presentation Link
- Live Demo
- Technologies Used
- API Endpoints
- Installation and Setup
- Deployment
- Environment Variables
- Author
- License

## Overview
The Flower Delivery Website is a full-stack application that combines a backend API with an admin panel frontend to manage an online flower shop's products and users.

- Full CRUD operations on flower entries
- Image upload support
- Category tagging
- Secure user registration and login
- Admin panel for managing flowers
- Validation and error handling

## Features
-  RESTful API with Express
-  MongoDB integration using Mongoose
-  Flower CRUD (Create, Read, Update, Delete)
-  Image upload via `multer`
-  User authentication with hashed passwords
- Admin Panel (React + Vite) for managing flowers
- Toast notifications for actions (add/delete)
-  Error handling middleware
-  Environment configuration using `dotenv`

## Presentation Link
[Presentation Link](https://www.loom.com/share/d7d6294fb7724bd790acaf80553abe92?sid=4616d532-942a-4b3f-b782-026f85ef8de1)

## Live Demo
[Live Demo](https://flower-website-backend-two-2ddp.onrender.com/api/flowers)

## Technologies Used
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (image uploads)
- Bcrypt (password hashing)
- Validator (email & password validation)
- Dotenv (environment variables)
- Admin Panel (React + Vite) for managing flowers
- Toast notifications for actions (add/delete)

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
  `git clone https://github.com/your-username/flower-website-backend-two.git`
  `cd flower-website-backend-two`
2. **Install dependencies:**
  `cd backend`
  `npm install`
  `npm start`
3. **Set up the environment variables:**
   `PORT=5000`
   `MONGO_URI=your-mongodb-connection-uri`


4. **Start the server:**
  In admin folder `npm run dev`
  In backend folder `npm start`

## Environment Variables
Ensure you configure the `.env` file with the correct MongoDB connection string and port.

## Author 
  Name: Sadiq Ridwan Abubakar
  Contact: [sadiqridwan347@gmail.com]
  GitHub: [ES-AR](https://github.com/ES-AR)

## License
This project is licensed under the MIT License.

