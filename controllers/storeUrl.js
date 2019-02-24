const ShortUrl = require('../database/model/urlShortnerModel');

module.exports = (req,res) => ShortUrl.create({
    ...req.body} , (error , url) => {
    console.log(req.body);
    res.redirect('/');
});