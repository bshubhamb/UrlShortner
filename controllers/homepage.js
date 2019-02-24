const shortner = require('../database/model/urlShortnerModel');

module.exports = async function(req,res){
    const urls = await shortner.find({});
    console.log(req.url);
    res.render('index' , {
        urls
    });
};