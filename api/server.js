

const express = require('express');
const bodyParser = require('body-parser');
let mysql = require('mysql');
var myitems = require('./routes/items/Items.js');
var myunits = require('./routes/items/Units.js');
var mycustomers = require('./routes/items/Customers.js');


// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: true
}))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// Add headers
app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);
	
	// res.setHeader('Authorization', true);

	// Pass to next layer of middleware
	next();
});

app.use('/myitems', myitems)
app.use('/myunits', myunits)
app.use('/mycustomers', mycustomers)

let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'grocerydelivery'

})

connection.connect(function (err) {

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
// app.get('/items', (req, res) => {

//   connection.query("select * from item", function(error, rows) {
//     if(!!error) {
//       console.log('error in the query');
//     } else {
//       console.log('successful query');
//       res.send(rows);
//       console.log(rows);

//     }
//    });

// });

app.get('/', function (req, resp) {

	connection.query("select * from item", function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			//  console.log(rows);

		}
	});
});


//get all units
// app.get('/units', function(req, resp){
// connection.query("select * from unit", function(error, rows) {
//  if(!!error) {
//  	console.log('error in the query');
//  } else {
//  	console.log('successful query');
//  	console.log(rows);
//    resp.send(rows);

//  }
// });
// });

//get all boxes
app.get('/boxes', function (req, resp) {

	connection.query("select * from box", function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			resp.send(rows);
		}
	})
})

// get all customers
// app.get('/customers',function(req, resp) {
//   connection.query("select * from customer",function(error, rows){
//     if(!!error){
//       console.log('error in the query');
//     } else {
//       console.log('successful query');
//       console.log(rows);
//       resp.send(rows);
//     }
//   })
// })

//get all cities

app.get('/cities', function (req, resp) {
	connection.query("select *from city", function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			resp.send(rows);
		}
	})
})

//all get employees

app.get('/employees', function (req, resp) {

	connection.query('select * from employee', function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			resp.send(rows);
		}
	})
})

//all gets deliveries
app.get('/deliveries', function (req, resp) {

	connection.query('select * from delivery', function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			resp.send(rows);
		}
	})
})

//all gets items in box
app.get('/item_in_boxes', function (req, resp) {

	connection.query('select * from item_in_box', function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			resp.send(rows);
		}
	})
})

// all get notes
app.get('/notes', function (req, resp) {

	connection.query('select * from notes', function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			resp.send(rows);
		}
	})
})

// all get order_items
app.get('/order_items', function (req, resp) {

	connection.query('select * from order_item', function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			resp.send(rows);
		}
	})
})

//all get status
app.get('/order_status', function (req, resp) {

	connection.query('select * from order_status', function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			resp.send(rows);
		}
	})
})

//all get place_order
app.get('/place_order', function (req, resp) {

	connection.query('select * from place_order', function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			resp.send(rows);
		}
	})
})

// all get status_catalog
app.get('/status_catalog', function (req, resp) {

	connection.query('select * from status_catalog', function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			resp.send(rows);
		}
	})
})

// listen for requests
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});