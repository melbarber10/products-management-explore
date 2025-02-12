const path = require('path');
const db = require('../config/database.js');

exports.getAddProduct = (req, res) => {
    res.render("add_product", { title: 'Add Product' });
};

exports.postAddProduct = (req, res) => {
    let { name, price, quantity, category, description } = req.body;
    let image = req.files.image;
    
    let sql = 'INSERT INTO product (product_name, product_price, product_quantity, product_category, product_image, product_description) VALUES (?, ?, ?, ?, ?, ?)';
    let values = [name, price, quantity, category, image.name, description];

    db.query(sql, values, (err, rows) => {
        if (err) throw err;
        console.log("1 record inserted");
        image.mv(path.join(__dirname, '../public/uploads', image.name), (err) => {
            if (err) throw err;
            console.log('File uploaded!');
            res.redirect('/');
        });
    });
};

exports.getEditProduct = (req, res) => {
    let sql = 'SELECT * FROM product WHERE product_id = ?';
    db.query(sql, [req.params.id], (err, rows) => {
        if (err) throw err;
        res.render("edit_product", { title: 'Edit Product', product: rows[0] });
    });
};

exports.postEditProduct = (req, res) => {
    let { name, price, quantity, category, description } = req.body;
    let sql, values;

    if (req.files && req.files.image) {
        let image = req.files.image;
        let imagePath = path.join(__dirname, '../public/uploads', image.name);
        sql = 'UPDATE product SET product_name = ?, product_price = ?, product_quantity = ?, product_category = ?, product_image = ?, product_description = ? WHERE product_id = ?';
        values = [name, price, quantity, category, image.name, description, req.params.id];
        image.mv(imagePath, (err) => {
            if (err) throw err;
            console.log('File uploaded!');
        });
    } else {
        sql = 'UPDATE product SET product_name = ?, product_price = ?, product_quantity = ?, product_category = ?, product_description = ? WHERE product_id = ?';
        values = [name, price, quantity, category, description, req.params.id];
    }

    db.query(sql, values, (err, result) => {
        if (err) throw err;
        console.log("1 record updated");
        res.redirect('/');
    });
};

exports.deleteProduct = (req, res) => {
    let sql = 'DELETE FROM product WHERE product_id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        console.log("1 record deleted");
        req.flash('success_msg', 'Product successfully deleted');
        res.redirect('/');
    });
};
