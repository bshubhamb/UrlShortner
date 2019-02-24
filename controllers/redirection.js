const ShortUrl = require('../database/model/urlShortnerModel');

module.exports = async (req,res) => {
    const key = req.params.hash;
    const search = await ShortUrl.findOne({hash: key});
    if(search){
        console.log(search);
        const searchid = search._id;
        console.log(search._id);
        const visits = search.visited + 1;
        ShortUrl.findByIdAndUpdate(searchid.toString() , {visited: visits.toString()} , (error ,post) => {
            console.log(error , post);
        });
        console.log(visits);
        console.log(search.visited);
        return res.redirect(search.Url);
    }
    else{
        return res.status(404);
    }

};