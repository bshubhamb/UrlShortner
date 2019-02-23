const validUrl = require('valid-url');
const ShortUrl = require('../database/model/urlShortnerModel');
const shortid = require('shortid');



let hashing = function (url) {
    const hash = shortid.generate();
    return "localhost:8888/"+ hash;
};

module.exports = (req,res,next) => {
  if (validUrl.isUri(req.body.Url)){
      //Reduce the url to display appropriately.
      req.body.displayUrl = req.body.Url.substring(0,50) + '...';

      //Generate shorter URL
      const hash = shortid.generate();
      req.body.hash = hash;
      req.body.newUrl = "beep.boop/"+ hash;

      //Initialize the value with 0
      req.body.visited = 0;

      //Create the date
      const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"];
      const d = new Date();
      req.body.createdOn = months[d.getMonth()] + ", " + d.getDate() + " " + d.getFullYear();


      next();
  }
  else{
    console.log('Invalid data');
    //If not valid URL redirect to page with popup about error.
    return res.status(401).redirect('/');
  }
};



