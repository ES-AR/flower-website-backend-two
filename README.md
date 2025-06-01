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
The Flower Website Backend is a Node.js and Express.js-powered RESTful API designed to manage flowers in an online flower shop. This backend provides functionalities to create, read, update, and delete flower entries along with image uploads and category management.

## Features
- RESTful API for managing flowers
- Image upload support using `multer`
- MongoDB database integration with Mongoose
- CRUD operations for flowers (Create, Read, Update, Delete)
- Category support for flower classification
- Middleware for request logging and error handling

## Presentation Link
[Presentation Link](https://www.loom.com/share/0c90173bff494f06958ad9cee339cd2a?sid=73c09f61-b6b9-4d57-80fd-57dae154f2ea)

## Live Demo
[Live Demo](https://flower-website-backend.onrender.com)

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- Multer (for image uploads)
- dotenv (for environment configuration)

## API Endpoints
  The API will be running on `http://localhost:5000`
  
- GET /api/flowers - Retrieve all flowers
- GET /api/flowers/:id - Retrieve a specific flower by ID
- POST /api/flowers - Add a new flower (with image upload)
- PATCH /api/flowers/:id - Update a flower's details
- DELETE /api/flowers/:id - Delete a flower and its associated image

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

