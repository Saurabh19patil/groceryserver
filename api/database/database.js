let mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'grocerydelivery',
	
})


//This is for connect to my sql server
connection.connect(function (err) {

	if (err) {
		return console.error('error: ' + err.message);

	}

	console.log('connected to mysql server.');

});


// export this router to use in our customer.js,units.js,unit.js
module.exports = connection;