const ShortUrl = require('../database/model/urlShortnerModel');

module.exports = (req,res) => ShortUrl.create({
    Url: req.body.Url,
    hash: req.body.hash,
    displayUrl: req.body.displayUrl,
    newUrl: req.body.newUrl,
    createdOn: req.body.createdOn
    } , (error , url) => {
    console.log(req.body);
    res.redirect('/');
});