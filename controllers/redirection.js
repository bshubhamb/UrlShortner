const ShortUrl = require('../database/model/urlShortnerModel');

module.exports = async (req,res) => {
    const key = req.params.hash;
    const search = await ShortUrl.findOne({hash: key});
    const searchid = search._id;
    console.log(searchid);
    if(search){
        const visits = search.visited + 1;
        ShortUrl.findByIdAndUpdate(searchid , {visited: 1});
        console.log(visits);
        console.log(search.visits);
        return res.redirect(search.Url);
    }
    else{
        return res.send.status(404);
    }

};