const express = require('express');
const app = express();
const expressEdge = require('express-edge');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Setup bodyParser for getting body from post requests
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//Directory for all the assets.
app.use(express.static('public'));

//Templating Engine
app.use(expressEdge);
app.set('views' , `${__dirname}/views`);

//Controllers
const storeUrlController = require('./controllers/storeUrl');
const homePageController = require('./controllers/homepage');
const redirectController = require('./controllers/redirection');
//Middlwares
const urlVerifyMiddleware = require('./middleware/verifyUrl');
const connectFlash = require('connect-flash');


mongoose.connect('mongodb://localhost/UrlShortner');

//Get Requests
app.get('/' , homePageController);
app.get('/:hash' , redirectController);

app.post('/urls/store' , urlVerifyMiddleware , storeUrlController);



//Port listening on
let port = process.env.PORT;
if (port == null || port == " " ){
   port = 2124;
}
app.listen(port , function () {
   console.log('Server is started.');
});