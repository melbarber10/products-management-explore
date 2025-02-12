# Products Management Explore App

A Node.js application for managing products with full CRUD (Create, Read, Update, Delete) operations. This project uses Express.js, MySQL, and EJS templating, and supports file uploads with [express-fileupload](https://www.npmjs.com/package/express-fileupload). The project follows an MVC-like structure with separate routes and controllers.

## Features

- **Home Page:** Lists all products in the database.
- **About Page:** Displays information about the project.
- **Add Product:** Form to add a new product, including image upload.
- **Edit Product:** Form to update existing product details and optionally update the product image.
- **Delete Product:** Removes a product from the database.
- **Flash Messages:** Provides user feedback on actions.
- **Environment Variables:** Managed via [dotenv](https://www.npmjs.com/package/dotenv).

## Technologies Used

- Node.js
- Express.js
- MySQL
- EJS
- express-fileupload
- dotenv
- connect-flash & express-session

## Project Structure

```
.
├── controllers
│   ├── index.js       # Logic for home and about pages
│   └── product.js     # Logic for product add, edit, delete
├── config
│   └── database.js              # MySQL database connection
├── routes
│   ├── index.js                 # Routes for home and about pages
│   └── product.js               # Routes for product CRUD operations
├── views
|   ├── partials                 # Contains header.ejs and footer.ejs
│   ├── index.ejs                # Home page template
│   ├── about.ejs                # About page template
│   ├── add_product.ejs          # Form for adding a product
│   └── edit_product.ejs         # Form for editing a product
├── public
│   └── uploads                  # Folder for uploaded images (ignored by Git)
├── .env                         # Environment variables (ignored by Git)
├── .gitignore                   # Files and folders to ignore in Git
├── app.js                       # Main application file
└── README.md                    # README File 
```

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root of the project with your database and port configurations. For example:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=products
   PORT=3000
   ```

4. **Set Up Your MySQL Database:**

   - Create a database (e.g., `products`).
   - Create a table named `product` with columns such as:
     - `product_id` (INT, PRIMARY KEY, AUTO_INCREMENT)
     - `product_name` (VARCHAR)
     - `product_price` (DECIMAL)
     - `product_quantity` (INT)
     - `product_category` (VARCHAR)
     - `product_image` (VARCHAR)
     - `product_description` (TEXT)

5. **Create the Uploads Folder:**

   Manually create the `public/uploads` directory if it doesn't exist.

## Usage

1. **Start the Application:**

   ```bash
   npm start
   ```

2. **Access the Application:**

   Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the home page.

3. **Available Routes:**

   - Home Page: `/`
   - About Page: `/about`
   - Add Product: `/add` *(or `/product/add` if using a route prefix)*
   - Edit Product: `/edit/:id` *(or `/product/edit/:id` if using a route prefix)*
   - Delete Product: (triggered by a form that POSTs to `/delete/:id`)

## Uploading the Project to GitHub

Follow these steps to upload your project to GitHub:

1. **Initialize Git (if not already initialized):**

   ```bash
   git init
   ```

2. **Add Files to Git:**

   ```bash
   git add .
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m "Initial commit: Products Management Explore App"
   ```

4. **Create a New Repository on GitHub:**

   - Log in to [GitHub](https://github.com) and create a new repository (e.g., `products-management-app`).
   - **Do not** initialize the repository with a README if you already have one.

5. **Link Your Local Repository to GitHub:**

   ```bash
   git remote add origin https://github.com/your-username/your-repo.git
   ```

6. **Push Your Project to GitHub:**

   ```bash
   git push -u origin master
   ```

   *Note: Replace `master` with `main` if your repository’s default branch is named `main`.*

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. For more details, please see the LICENSE file.


## Acknowledgements

- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [EJS](https://ejs.co/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-fileupload](https://www.npmjs.com/package/express-fileupload)
- The open-source community for inspiration and support.
```

After creating and saving the file, remember to add, commit, and push it to your GitHub repository:

```bash
git add README.md
git commit -m "Add README.md file"
git push origin master
```

