Products Management App
A Node.js application for managing products with CRUD (Create, Read, Update, Delete) operations. This project uses Express.js, MySQL, EJS templating, and supports file uploads with express-fileupload. It follows an MVC-like structure with separate routes and controllers.

Features
Home Page: List all products ordered by ID.
About Page: A static page with project or company details.
Add Product: Create a new product with image upload.
Edit Product: Update product details and optionally update the product image.
Delete Product: Remove a product from the database.
Flash Messages: Provides feedback for add, update, and delete operations.
Environment Variables: Configuration via a .env file (using dotenv).
Technologies Used
Node.js and Express.js
MySQL for the database
EJS for templating
express-fileupload for handling file uploads
dotenv for environment variable management
connect-flash and express-session for flash messages and sessions