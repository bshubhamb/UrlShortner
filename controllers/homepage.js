const shortner = require('../database/model/urlShortnerModel');

module.exports = async (req,res) => {
    const urls = await shortner.find({});
    console.log(req.url);
    res.render('index' , {
        urls
    });
};