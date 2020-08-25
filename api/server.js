const express = require('express');
const bodyParser = require('body-parser');
let mysql = require('mysql');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


let connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'password',
	database : 'grocerydelivery'

})

connection.connect(function(err){

 if (err) {
 	return console.error('error: ' + err.message);

 }

console.log('connected to mysql server.');

});

// define a root route
// app.get('/', (req, res) => {
//   res.send("Hello World");
//   console.log("Server says hello");
// });

// get all items
app.get('/items', (req, res) => {
  res.send("items");
  console.log("all items");
});

app.get('/', function(req, resp){

connection.query("select * from item", function(error, rows) {
 if(!!error) {
 	console.log('error in the query');
 } else {
 	console.log('successful query');
 	console.log(rows);
 }
});
});






app.get('/unit', function(req, resp){

connection.query("select * from unit", function(error, rows) {
 if(!!error) {
 	console.log('error in the query');
 } else {
 	console.log('successful query');
 	console.log(rows);
 	resp.send(rows);
 }
});
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});