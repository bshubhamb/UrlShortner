const validUrl = require('valid-url');
const ShortUrl = require('../database/model/urlShortnerModel');
const shortid = require('shortid');


module.exports = (req,res,next) => {
  if (validUrl.isUri(req.body.Url)){


      //Reduce the url to display appropriately.
      if (req.body.Url.length > 50) {
          req.body.displayUrl = req.body.Url.substring(0, 50) + '...';
      }
      else{
          req.body.displayUrl = req.body.Url;
      }
      //Generate shorter URL
      const hash = shortid.generate();
      req.body.hash = hash;
      req.body.newUrl = "fgethell.xyz:2124/"+ hash;

      //Initialize the value with 0
      req.body.visited = 0;

      //Create the date
      const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"];
      const d = new Date();
      req.body.createdOn = months[d.getMonth()] + ", " + d.getDate() + " " + d.getFullYear();

      next();
  }
  else{
    console.log('Invalid Url');
    //If not valid URL redirect to page with popup about error.
    return res.status(401).redirect('/');
  }
};



