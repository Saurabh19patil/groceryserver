let mysql = require('mysql');

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



// const item = { id : 47, item_name : 'tur-dal', price : 125.0, item_photo : null, description : null, unit_id : 1 };
// connection.query('insert into item set ?', item, (err, res) => {
 
//  if(err) {

//  	throw err;
//  }

//  console.log('data recived from db');
//  console.log(res.id);

// });




connection.query('select * from item', (err, rows) => {
 
 if(err) {

 	throw err;
 }

 console.log('data recived from db');
 console.log(rows);

});

app.get('/', function(req, resp){

connection.query("select * from item", function(error, rows) {
 if(!!error) {
 	console.log('error in the query');
 } else {
 	console.log('successful query');
 }
});
});
