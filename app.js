const express = require('express');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();


// Set up view engine and views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Handle URL-encoded data
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

// Session and Flash
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});



// Routes
const indexRoutes = require('./routes/index.js');
const productRoutes = require('./routes/product.js');

app.use('/', indexRoutes);
app.use('/', productRoutes); 

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
