const db = require('../config/database.js');

exports.homePage = (req, res) => {
    let sql = 'SELECT * FROM product ORDER BY product_id ASC';
    db.query(sql, (err, rows) => {
        if (err) throw err;
        res.render("index", { title: 'Home', products: rows });
    });
};

exports.aboutPage = (req, res) => {
    res.render("about", { title: 'About us' });
};
